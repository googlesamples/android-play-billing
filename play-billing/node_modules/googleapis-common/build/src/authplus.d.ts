import { Compute, GoogleAuth, GoogleAuthOptions, JWT, OAuth2Client, ProjectIdCallback, UserRefreshClient } from 'google-auth-library';
export declare class AuthPlus extends GoogleAuth {
    JWT: typeof JWT;
    Compute: typeof Compute;
    OAuth2: typeof OAuth2Client;
    GoogleAuth: typeof GoogleAuth;
    private _cachedAuth?;
    /**
     * Override getClient(), memoizing an instance of auth for
     * subsequent calls to getProjectId().
     */
    getClient(options?: GoogleAuthOptions): Promise<Compute | JWT | UserRefreshClient>;
    /**
     * Override getProjectId(), using the most recently configured
     * auth instance when fetching projectId.
     */
    getProjectId(): Promise<string>;
    getProjectId(callback: ProjectIdCallback): void;
}
