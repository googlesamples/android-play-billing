/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { cloudfunctions_v1 } from './v1';
import { cloudfunctions_v1beta2 } from './v1beta2';
export declare const VERSIONS: {
    v1: typeof cloudfunctions_v1.Cloudfunctions;
    v1beta2: typeof cloudfunctions_v1beta2.Cloudfunctions;
};
export declare function cloudfunctions(version: 'v1'): cloudfunctions_v1.Cloudfunctions;
export declare function cloudfunctions(options: cloudfunctions_v1.Options): cloudfunctions_v1.Cloudfunctions;
export declare function cloudfunctions(version: 'v1beta2'): cloudfunctions_v1beta2.Cloudfunctions;
export declare function cloudfunctions(options: cloudfunctions_v1beta2.Options): cloudfunctions_v1beta2.Cloudfunctions;
declare const auth: AuthPlus;
export { auth };
