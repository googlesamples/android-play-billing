/// <reference types="node" />
export interface JwkCertificate {
    kty: string;
    alg: string;
    use?: string;
    kid: string;
    n: string;
    e: string;
}
export interface CryptoSigner {
    update(data: string): void;
    sign(key: string, outputFormat: string): string;
}
export interface Crypto {
    sha256DigestBase64(str: string): Promise<string>;
    randomBytesBase64(n: number): string;
    verify(pubkey: string | JwkCertificate, data: string | Buffer, signature: string): Promise<boolean>;
    sign(privateKey: string | JwkCertificate, data: string | Buffer): Promise<string>;
    decodeBase64StringUtf8(base64: string): string;
    encodeBase64StringUtf8(text: string): string;
}
export declare function createCrypto(): Crypto;
export declare function hasBrowserCrypto(): boolean;
