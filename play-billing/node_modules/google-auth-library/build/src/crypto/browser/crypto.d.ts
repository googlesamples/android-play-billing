import { Crypto, JwkCertificate } from '../crypto';
export declare class BrowserCrypto implements Crypto {
    constructor();
    sha256DigestBase64(str: string): Promise<string>;
    randomBytesBase64(count: number): string;
    private static padBase64;
    verify(pubkey: JwkCertificate, data: string, signature: string): Promise<boolean>;
    sign(privateKey: JwkCertificate, data: string): Promise<string>;
    decodeBase64StringUtf8(base64: string): string;
    encodeBase64StringUtf8(text: string): string;
}
