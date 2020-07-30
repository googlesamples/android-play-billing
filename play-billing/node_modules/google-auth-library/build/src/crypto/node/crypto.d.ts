/// <reference types="node" />
import { Crypto } from '../crypto';
export declare class NodeCrypto implements Crypto {
    sha256DigestBase64(str: string): Promise<string>;
    randomBytesBase64(count: number): string;
    verify(pubkey: string, data: string | Buffer, signature: string): Promise<boolean>;
    sign(privateKey: string, data: string | Buffer): Promise<string>;
    decodeBase64StringUtf8(base64: string): string;
    encodeBase64StringUtf8(text: string): string;
}
