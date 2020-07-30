/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { tpu_v1 } from './v1';
import { tpu_v1alpha1 } from './v1alpha1';
export declare const VERSIONS: {
    v1: typeof tpu_v1.Tpu;
    v1alpha1: typeof tpu_v1alpha1.Tpu;
};
export declare function tpu(version: 'v1'): tpu_v1.Tpu;
export declare function tpu(options: tpu_v1.Options): tpu_v1.Tpu;
export declare function tpu(version: 'v1alpha1'): tpu_v1alpha1.Tpu;
export declare function tpu(options: tpu_v1alpha1.Options): tpu_v1alpha1.Tpu;
declare const auth: AuthPlus;
export { auth };
