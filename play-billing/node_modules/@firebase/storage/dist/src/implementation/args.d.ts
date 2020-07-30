/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
export declare function validate(name: string, specs: ArgSpec[], passed: IArguments): void;
/**
 * @struct
 */
export declare class ArgSpec {
    validator: (p1: unknown) => void;
    optional: boolean;
    constructor(validator: (p1: unknown) => void, optional?: boolean);
}
export declare function and_(v1: (p1: unknown) => void, v2: (p1: unknown) => void): (p1: unknown) => void;
export declare function stringSpec(validator?: (p1: unknown) => void | null, optional?: boolean): ArgSpec;
export declare function uploadDataSpec(): ArgSpec;
export declare function metadataSpec(optional?: boolean): ArgSpec;
export declare function listOptionSpec(optional?: boolean): ArgSpec;
export declare function nonNegativeNumberSpec(): ArgSpec;
export declare function looseObjectSpec(validator?: ((p1: unknown) => void) | null, optional?: boolean): ArgSpec;
export declare function nullFunctionSpec(optional?: boolean): ArgSpec;
