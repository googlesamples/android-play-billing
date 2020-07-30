/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { dialogflow_v2 } from './v2';
import { dialogflow_v2beta1 } from './v2beta1';
export declare const VERSIONS: {
    v2: typeof dialogflow_v2.Dialogflow;
    v2beta1: typeof dialogflow_v2beta1.Dialogflow;
};
export declare function dialogflow(version: 'v2'): dialogflow_v2.Dialogflow;
export declare function dialogflow(options: dialogflow_v2.Options): dialogflow_v2.Dialogflow;
export declare function dialogflow(version: 'v2beta1'): dialogflow_v2beta1.Dialogflow;
export declare function dialogflow(options: dialogflow_v2beta1.Options): dialogflow_v2beta1.Dialogflow;
declare const auth: AuthPlus;
export { auth };
