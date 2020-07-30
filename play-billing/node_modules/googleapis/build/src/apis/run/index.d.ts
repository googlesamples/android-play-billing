/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { run_v1 } from './v1';
import { run_v1alpha1 } from './v1alpha1';
import { run_v1beta1 } from './v1beta1';
export declare const VERSIONS: {
    v1: typeof run_v1.Run;
    v1alpha1: typeof run_v1alpha1.Run;
    v1beta1: typeof run_v1beta1.Run;
};
export declare function run(version: 'v1'): run_v1.Run;
export declare function run(options: run_v1.Options): run_v1.Run;
export declare function run(version: 'v1alpha1'): run_v1alpha1.Run;
export declare function run(options: run_v1alpha1.Options): run_v1alpha1.Run;
export declare function run(version: 'v1beta1'): run_v1beta1.Run;
export declare function run(options: run_v1beta1.Options): run_v1beta1.Run;
declare const auth: AuthPlus;
export { auth };
