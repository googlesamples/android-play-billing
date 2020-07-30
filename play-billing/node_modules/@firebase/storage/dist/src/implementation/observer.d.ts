import { FirebaseStorageError } from './error';
export declare type NextFn<T> = (value: T) => void;
export declare type ErrorFn = (error: Error | FirebaseStorageError) => void;
export declare type CompleteFn = () => void;
export declare type Unsubscribe = () => void;
export interface StorageObserver<T> {
    next?: NextFn<T> | null;
    error?: ErrorFn | null;
    complete?: CompleteFn | null;
}
export declare type Subscribe<T> = (next?: NextFn<T> | StorageObserver<T> | null, error?: ErrorFn | null, complete?: CompleteFn | null) => Unsubscribe;
/**
 * @struct
 */
export declare class Observer<T> implements StorageObserver<T> {
    next?: NextFn<T> | null;
    error?: ErrorFn | null;
    complete?: CompleteFn | null;
    constructor(nextOrObserver?: NextFn<T> | StorageObserver<T> | null, error?: ErrorFn | null, complete?: CompleteFn | null);
}
