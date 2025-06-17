/**
 * WebAuthn utility functions for handling browser compatibility and error messages
 */

/**
 * Check if WebAuthn is supported in the current browser
 */
export function isWebAuthnSupported(): boolean {
	if (typeof window === "undefined") {
		return false;
	}

	return !!(
		window.PublicKeyCredential &&
		typeof window.PublicKeyCredential === "function"
	);
}

/**
 * Check if the browser supports conditional UI (autofill) for WebAuthn
 */
export async function isConditionalUISupported(): Promise<boolean> {
	if (!isWebAuthnSupported()) {
		return false;
	}

	try {
		return await window.PublicKeyCredential.isConditionalMediationAvailable();
	} catch {
		return false;
	}
}

/**
 * Get a user-friendly error message from WebAuthn errors
 */
export function getWebAuthnErrorMessage(error: unknown): string {
	if (!error || typeof error !== "object") {
		return "An unexpected error occurred during authentication.";
	}

	const err = error as { name?: string; message?: string };

	switch (err.name) {
		case "NotAllowedError":
			return "Authentication was cancelled or timed out. Please try again.";
		case "InvalidStateError":
			return "This device is already registered. Please try signing in instead.";
		case "NotSupportedError":
			return "Your browser doesn't support this type of authentication.";
		case "SecurityError":
			return "Authentication failed due to security restrictions.";
		case "AbortError":
			return "Authentication was cancelled.";
		case "ConstraintError":
			return "The authenticator doesn't meet the security requirements.";
		case "NotReadableError":
			return "The authenticator is not available or accessible.";
		case "UnknownError":
			return "An unknown error occurred with the authenticator.";
		case "NetworkError":
			return "Network error occurred during authentication.";
		default: {
			// If it's a network/API error from Nhost
			if (err.message?.includes("fetch")) {
				return "Network error occurred. Please check your connection and try again.";
			}
			// If it's a validation error from the server
			if (err.message?.includes("invalid")) {
				return "Authentication failed. Please try again.";
			}
			return err.message || "Authentication failed. Please try again.";
		}
	}
}

/**
 * Check if the current device likely supports platform authenticators (like Touch ID, Face ID, Windows Hello)
 */
export async function isPlatformAuthenticatorAvailable(): Promise<boolean> {
	if (!isWebAuthnSupported()) {
		return false;
	}

	try {
		// This will return true if platform authenticators are available
		return await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
	} catch {
		return false;
	}
}

/**
 * Format WebAuthn capability information for debugging or user information
 */
export async function getWebAuthnCapabilities(): Promise<{
	supported: boolean;
	conditionalUI: boolean;
	platformAuthenticator: boolean;
	userAgent: string;
}> {
	const supported = isWebAuthnSupported();
	const conditionalUI = supported ? await isConditionalUISupported() : false;
	const platformAuthenticator = supported
		? await isPlatformAuthenticatorAvailable()
		: false;

	return {
		supported,
		conditionalUI,
		platformAuthenticator,
		userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "",
	};
}

/**
 * Common WebAuthn authenticator attachment preferences
 */
export const AUTHENTICATOR_ATTACHMENT = {
	platform: "platform" as const,
	crossPlatform: "cross-platform" as const,
} as const;

/**
 * Common WebAuthn user verification requirements
 */
export const USER_VERIFICATION = {
	required: "required" as const,
	preferred: "preferred" as const,
	discouraged: "discouraged" as const,
} as const;

/**
 * Common WebAuthn timeout values (in milliseconds)
 */
export const WEBAUTHN_TIMEOUTS = {
	default: 60000, // 1 minute
	extended: 300000, // 5 minutes
	quick: 30000, // 30 seconds
} as const;
