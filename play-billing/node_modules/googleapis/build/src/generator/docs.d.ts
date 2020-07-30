/// <reference types="node" />
import * as execa from 'execa';
import * as fs from 'fs';
export declare const gfs: {
    mkdir: typeof fs.mkdirSync;
    exists: typeof fs.existsSync;
    writeFile: typeof fs.writeFile.__promisify__;
    readdir: typeof fs.readdir.__promisify__;
    execa: {
        (file: string, arguments?: readonly string[] | undefined, options?: execa.Options<string> | undefined): execa.ExecaChildProcess<string>;
        (file: string, arguments?: readonly string[] | undefined, options?: execa.Options<null> | undefined): execa.ExecaChildProcess<Buffer>;
        (file: string, options?: execa.Options<string> | undefined): execa.ExecaChildProcess<string>;
        (file: string, options?: execa.Options<null> | undefined): execa.ExecaChildProcess<Buffer>;
        sync(file: string, arguments?: readonly string[] | undefined, options?: execa.SyncOptions<string> | undefined): execa.ExecaSyncReturnValue<string>;
        sync(file: string, arguments?: readonly string[] | undefined, options?: execa.SyncOptions<null> | undefined): execa.ExecaSyncReturnValue<Buffer>;
        sync(file: string, options?: execa.SyncOptions<string> | undefined): execa.ExecaSyncReturnValue<string>;
        sync(file: string, options?: execa.SyncOptions<null> | undefined): execa.ExecaSyncReturnValue<Buffer>;
        command(command: string, options?: execa.Options<string> | undefined): execa.ExecaChildProcess<string>;
        command(command: string, options?: execa.Options<null> | undefined): execa.ExecaChildProcess<Buffer>;
        commandSync(command: string, options?: execa.SyncOptions<string> | undefined): execa.ExecaSyncReturnValue<string>;
        commandSync(command: string, options?: execa.SyncOptions<null> | undefined): execa.ExecaSyncReturnValue<Buffer>;
        node(scriptPath: string, arguments?: readonly string[] | undefined, options?: execa.NodeOptions<string> | undefined): execa.ExecaChildProcess<string>;
        node(scriptPath: string, arguments?: readonly string[] | undefined, options?: execa.Options<null> | undefined): execa.ExecaChildProcess<Buffer>;
        node(scriptPath: string, options?: execa.Options<string> | undefined): execa.ExecaChildProcess<string>;
        node(scriptPath: string, options?: execa.Options<null> | undefined): execa.ExecaChildProcess<Buffer>;
    };
};
/**
 * Iterate over each API directory, and use the `compodoc` tool to generate
 * reference API documentation in the `docs` folder.  This folder is ignored
 * in git, so a publish must be done with `npm run publish-docs`.
 *
 * To use this, run `npm run generate-docs`.
 */
export declare function main(): Promise<void>;
