import { FirebaseMessagingName } from '@firebase/messaging-types';
import { FirebaseAuthInternalName } from '@firebase/auth-interop-types';
import { Provider } from '@firebase/component';
/**
 * The metadata that should be supplied with function calls.
 */
export interface Context {
    authToken?: string;
    instanceIdToken?: string;
}
/**
 * Helper class to get metadata that should be included with a function call.
 */
export declare class ContextProvider {
    private auth;
    private messaging;
    constructor(authProvider: Provider<FirebaseAuthInternalName>, messagingProvider: Provider<FirebaseMessagingName>);
    getAuthToken(): Promise<string | undefined>;
    getInstanceIdToken(): Promise<string | undefined>;
    getContext(): Promise<Context>;
}
