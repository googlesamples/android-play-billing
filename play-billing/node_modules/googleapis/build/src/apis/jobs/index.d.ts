/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { jobs_v2 } from './v2';
import { jobs_v3 } from './v3';
import { jobs_v3p1beta1 } from './v3p1beta1';
export declare const VERSIONS: {
    v2: typeof jobs_v2.Jobs;
    v3: typeof jobs_v3.Jobs;
    v3p1beta1: typeof jobs_v3p1beta1.Jobs;
};
export declare function jobs(version: 'v2'): jobs_v2.Jobs;
export declare function jobs(options: jobs_v2.Options): jobs_v2.Jobs;
export declare function jobs(version: 'v3'): jobs_v3.Jobs;
export declare function jobs(options: jobs_v3.Options): jobs_v3.Jobs;
export declare function jobs(version: 'v3p1beta1'): jobs_v3p1beta1.Jobs;
export declare function jobs(options: jobs_v3p1beta1.Options): jobs_v3p1beta1.Jobs;
declare const auth: AuthPlus;
export { auth };
