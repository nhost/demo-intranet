import { useAuth } from "@/lib/auth-context";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useState } from "react";

// Types for the GraphQL responses
export interface GraphiteMessage {
	id: string;
	createdAt: string;
	role: "user" | "assistant";
	message: string;
	isTemporary?: boolean;
}

export interface GraphiteSession {
	sessionID: string;
	assistantID: string;
	userID: string;
	createdAt: string;
}

export interface GraphiteMessageResponse {
	sessionID: string;
	messages: GraphiteMessage[];
}

export function useAiAssistant(assistantId: string) {
	const [currentSession, setCurrentSession] = useState<string | null>(null);
	const [messages, setMessages] = useState<GraphiteMessage[]>([]);
	const [lastMessageId, setLastMessageId] = useState("");

	const { nhost } = useAuth();

	const executeGraphQL = useCallback(
		async (query: string, variables: Record<string, unknown>) => {
			const response = await nhost.graphql.post({
				query,
				variables,
			});

			if (!response.body.data) {
				throw new Error(
					`GraphQL request failed: ${JSON.stringify(response.body)}`,
				);
			}

			return response.body.data;
		},
		[nhost],
	);

	// Start a new session mutation
	const startSessionMutation = useMutation({
		mutationFn: async () => {
			const query = `
				mutation StartAssistantSession($assistantId: String!) {
					graphite {
						startSession(assistantID: $assistantId) {
							sessionID
							assistantID
							userID
							createdAt
						}
					}
				}
			`;

			const response = await executeGraphQL(query, {
				assistantId,
			});

			return response.graphite.startSession as GraphiteSession;
		},
		onSuccess: (session) => {
			setCurrentSession(session.sessionID);
			// Clear messages when starting a new session
			setMessages([]);
			setLastMessageId("");
		},
	});

	// Send message mutation
	const sendMessageMutation = useMutation({
		mutationFn: async ({
			sessionId,
			message,
			prevMessageId,
		}: {
			sessionId: string;
			message: string;
			prevMessageId: string;
		}) => {
			const query = `
				mutation SendAssistantMessage(
					$sessionId: String!
					$message: String!
					$prevMessageId: String!
				) {
					graphite {
						sendMessage(
							sessionID: $sessionId
							message: $message
							prevMessageID: $prevMessageId
						) {
							sessionID
							messages {
								id
								createdAt
								role
								message
							}
						}
					}
				}
			`;

			const response = await executeGraphQL(query, {
				sessionId,
				message,
				prevMessageId,
			});

			return response.graphite.sendMessage as GraphiteMessageResponse;
		},
		onSuccess: (response) => {
			// Remove temporary messages and add all messages from the response
			setMessages((prev) => {
				// Filter out temporary messages
				const nonTemporaryMessages = prev.filter((msg) => !msg.isTemporary);

				// Add new messages that aren't already in the non-temporary list
				const newMessages = response.messages.filter(
					(msg) =>
						!nonTemporaryMessages.some((existing) => existing.id === msg.id) &&
						!(msg.message.trim().toLowerCase() === "start"),
				);

				return [...nonTemporaryMessages, ...newMessages];
			});

			// Update last message ID
			if (response.messages.length > 0) {
				const lastMsg = response.messages[response.messages.length - 1];
				setLastMessageId(lastMsg.id);
			}
		},
	});

	const startSession = useCallback(() => {
		if (!currentSession && !startSessionMutation.isPending) {
			startSessionMutation.mutate();
		}
	}, [currentSession, startSessionMutation]);

	const sendMessage = useCallback(
		(message: string) => {
			if (!message.trim() || !currentSession || sendMessageMutation.isPending) {
				return false;
			}

			// Add user message immediately to the UI
			const userMessage: GraphiteMessage = {
				id: `temp-user-${Date.now()}`, // Temporary ID
				createdAt: new Date().toISOString(),
				role: "user",
				message: message.trim(),
				isTemporary: true,
			};

			setMessages((prev) => [...prev, userMessage]);

			sendMessageMutation.mutate({
				sessionId: currentSession,
				message: message.trim(),
				prevMessageId: lastMessageId,
			});

			return true;
		},
		[currentSession, lastMessageId, sendMessageMutation],
	);

	const resetSession = useCallback(() => {
		setCurrentSession(null);
		setMessages([]);
		setLastMessageId("");
	}, []);

	const resetAndStartSession = useCallback(() => {
		// Reset session state
		setCurrentSession(null);
		setMessages([]);
		setLastMessageId("");

		// Start new session immediately
		if (!startSessionMutation.isPending) {
			startSessionMutation.mutate();
		}
	}, [startSessionMutation]);

	return {
		// State
		currentSession,
		messages,
		lastMessageId,

		// Actions
		startSession,
		sendMessage,
		resetSession,
		resetAndStartSession,

		// Loading states
		isStartingSession: startSessionMutation.isPending,
		isSendingMessage: sendMessageMutation.isPending,

		// Error states
		startSessionError: startSessionMutation.error,
		sendMessageError: sendMessageMutation.error,

		// Combined loading state
		isLoading: startSessionMutation.isPending || sendMessageMutation.isPending,
	};
}
