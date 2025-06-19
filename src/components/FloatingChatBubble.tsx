import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/lib/auth-context";
import { useAiAssistant } from "@/lib/useAiAssistant";
import { cn } from "@/lib/utils";
import { Bot, MessageCircle, Send, User, X } from "lucide-react";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";

export function FloatingChatBubble() {
	const { session } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const [inputMessage, setInputMessage] = useState("");
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const assistantId = process.env.BUN_PUBLIC_ASSISTANT_ID || "";
	const {
		currentSession,
		messages,
		startSession,
		sendMessage,
		resetAndStartSession,
		isStartingSession,
		isSendingMessage,
		startSessionError,
		sendMessageError,
		isLoading,
	} = useAiAssistant(assistantId);

	// Auto-scroll to bottom when new messages arrive
	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	});

	// Only show for authenticated users
	if (!session) {
		return null;
	}

	const handleSendMessage = () => {
		if (!inputMessage.trim()) {
			return;
		}

		// Clear input immediately for better UX
		const messageToSend = inputMessage;
		setInputMessage("");

		// Send the message
		sendMessage(messageToSend);
	};

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	const handleToggleChat = () => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
			if (assistantId && !currentSession && !isStartingSession) {
				startSession();
			}
		}
	};

	const handleNewChat = () => {
		resetAndStartSession();
	};

	return (
		<>
			{/* Chat Bubble */}
			{!isOpen && (
				<Button
					onClick={handleToggleChat}
					className="fixed bottom-4 right-4 md:bottom-6 md:right-6 h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 opacity-50 hover:opacity-100"
					size="icon"
				>
					<MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
				</Button>
			)}

			{/* Chat Window */}
			{isOpen && (
				<Card className="fixed bottom-4 right-4 w-96 h-[36rem] md:w-[28rem] md:h-[40rem] lg:w-[32rem] lg:h-[44rem] md:bottom-6 md:right-6 shadow-2xl z-50 flex flex-col max-h-[85vh]">
					<CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
						<div className="flex items-center space-x-2">
							<Bot className="h-5 w-5 text-blue-500" />
							<CardTitle className="text-sm">AI Assistant</CardTitle>
						</div>
						<div className="flex space-x-1">
							<Button
								variant="ghost"
								size="sm"
								onClick={handleNewChat}
								className="h-8 w-8 p-0"
								disabled={isLoading}
							>
								<MessageCircle className="h-4 w-4" />
							</Button>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setIsOpen(false)}
								className="h-8 w-8 p-0"
							>
								<X className="h-4 w-4" />
							</Button>
						</div>
					</CardHeader>

					<CardContent className="flex-1 flex flex-col p-3 md:p-4 pt-0">
						{/* Messages Area */}
						<ScrollArea className="flex-1 mb-2 md:mb-3 h-0 overflow-y-auto">
							<div className="space-y-2 md:space-y-3 p-1 md:p-2 min-h-full">
								{!assistantId && (
									<div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md">
										<div className="font-medium mb-2">
											AI Assistant not configured
										</div>
										<div className="space-y-1 text-xs">
											<div>
												1. Make sure .secrets includes a valid key under
												OPENAI_API_KEY
											</div>
											<div>2. Run: make dev-env-up-ai</div>
											<div>
												3. The assistant ID will be automatically configured
											</div>
										</div>
									</div>
								)}

								{assistantId && !currentSession && isStartingSession && (
									<div className="flex items-center justify-center py-4">
										<div className="text-sm text-muted-foreground">
											Starting conversation...
										</div>
									</div>
								)}

								{assistantId && startSessionError && (
									<div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md">
										Failed to start chat session. Please try again.
									</div>
								)}

								{messages.length === 0 && currentSession && (
									<div className="flex items-center justify-center py-4">
										<div className="text-sm text-muted-foreground text-center">
											Hi! I'm your AI assistant. How can I help you today?
										</div>
									</div>
								)}

								{messages.map((message) => (
									<div
										key={message.id}
										className={cn(
											"flex gap-2",
											message.role === "user" ? "justify-end" : "justify-start",
										)}
									>
										<div
											className={cn(
												"flex gap-2 max-w-[85%]",
												message.role === "user"
													? "flex-row-reverse"
													: "flex-row",
											)}
										>
											<div
												className={cn(
													"flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full text-xs",
													message.role === "user"
														? "bg-primary text-primary-foreground"
														: "bg-muted",
												)}
											>
												{message.role === "user" ? (
													<User className="h-4 w-4" />
												) : (
													<Bot className="h-4 w-4" />
												)}
											</div>
											<div
												className={cn(
													"rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-xs md:text-sm leading-relaxed break-words",
													message.role === "user"
														? "bg-primary text-primary-foreground"
														: "bg-muted",
												)}
											>
												{message.message}
											</div>
										</div>
									</div>
								))}

								{isSendingMessage && (
									<div className="flex gap-2 justify-start">
										<div className="flex gap-2 max-w-[85%]">
											<div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full text-xs bg-muted">
												<Bot className="h-4 w-4" />
											</div>
											<div className="bg-muted rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-xs md:text-sm leading-relaxed">
												<div className="flex space-x-1">
													<div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
													<div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
													<div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" />
												</div>
											</div>
										</div>
									</div>
								)}

								{sendMessageError && (
									<div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md">
										Failed to send message. Please try again.
									</div>
								)}

								{/* Invisible element to scroll to */}
								<div ref={messagesEndRef} />
							</div>
						</ScrollArea>

						{/* Input Area */}
						<div className="flex space-x-2 mt-1 md:mt-2">
							<Input
								placeholder="Type your message..."
								value={inputMessage}
								onChange={(e) => setInputMessage(e.target.value)}
								onKeyPress={handleKeyPress}
								disabled={!assistantId || !currentSession || isLoading}
								className="flex-1 min-h-[36px] md:min-h-[40px] text-sm resize-none"
							/>
							<Button
								onClick={handleSendMessage}
								disabled={
									!assistantId ||
									!inputMessage.trim() ||
									!currentSession ||
									isLoading
								}
								size="sm"
								className="h-[36px] w-[36px] md:h-[40px] md:w-[40px] p-0"
							>
								<Send className="h-3 w-3 md:h-4 md:w-4" />
							</Button>
						</div>
					</CardContent>
				</Card>
			)}
		</>
	);
}
