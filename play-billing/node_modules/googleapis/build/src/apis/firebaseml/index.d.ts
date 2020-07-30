/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { firebaseml_v1 } from './v1';
import { firebaseml_v1beta2 } from './v1beta2';
export declare const VERSIONS: {
    v1: typeof firebaseml_v1.Firebaseml;
    v1beta2: typeof firebaseml_v1beta2.Firebaseml;
};
export declare function firebaseml(version: 'v1'): firebaseml_v1.Firebaseml;
export declare function firebaseml(options: firebaseml_v1.Options): firebaseml_v1.Firebaseml;
export declare function firebaseml(version: 'v1beta2'): firebaseml_v1beta2.Firebaseml;
export declare function firebaseml(options: firebaseml_v1beta2.Options): firebaseml_v1beta2.Firebaseml;
declare const auth: AuthPlus;
export { auth };
