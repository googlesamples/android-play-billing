export interface Credentials {
    refresh_token?: string | null;
    expiry_date?: number | null;
    access_token?: string | null;
    token_type?: string | null;
    id_token?: string | null;
}
export interface CredentialRequest {
    refresh_token?: string;
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    id_token?: string;
}
export interface JWTInput {
    type?: string;
    client_email?: string;
    private_key?: string;
    private_key_id?: string;
    project_id?: string;
    client_id?: string;
    client_secret?: string;
    refresh_token?: string;
    quota_project_id?: string;
}
export interface CredentialBody {
    client_email?: string;
    private_key?: string;
}
