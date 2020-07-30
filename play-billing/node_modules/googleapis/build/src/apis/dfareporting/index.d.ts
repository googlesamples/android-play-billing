/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { dfareporting_v3_3 } from './v3.3';
import { dfareporting_v3_4 } from './v3.4';
export declare const VERSIONS: {
    'v3.3': typeof dfareporting_v3_3.Dfareporting;
    'v3.4': typeof dfareporting_v3_4.Dfareporting;
};
export declare function dfareporting(version: 'v3.3'): dfareporting_v3_3.Dfareporting;
export declare function dfareporting(options: dfareporting_v3_3.Options): dfareporting_v3_3.Dfareporting;
export declare function dfareporting(version: 'v3.4'): dfareporting_v3_4.Dfareporting;
export declare function dfareporting(options: dfareporting_v3_4.Options): dfareporting_v3_4.Dfareporting;
declare const auth: AuthPlus;
export { auth };
