/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { osconfig_v1 } from './v1';
import { osconfig_v1beta } from './v1beta';
export declare const VERSIONS: {
    v1: typeof osconfig_v1.Osconfig;
    v1beta: typeof osconfig_v1beta.Osconfig;
};
export declare function osconfig(version: 'v1'): osconfig_v1.Osconfig;
export declare function osconfig(options: osconfig_v1.Options): osconfig_v1.Osconfig;
export declare function osconfig(version: 'v1beta'): osconfig_v1beta.Osconfig;
export declare function osconfig(options: osconfig_v1beta.Options): osconfig_v1beta.Osconfig;
declare const auth: AuthPlus;
export { auth };
