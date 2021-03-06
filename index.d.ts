import { NextFunction, Request, RequestHandler, Response } from 'express';
export declare const asyncMiddleware: (middleware: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => any) => (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => void;
/**
 * wrap async function to connect-like middleware
 * @param middleware can return Promise or throw error
 * @returns {Function} connect-like middleware
 * next function is always called at most once
 */
export default asyncMiddleware;
declare type IRequestHandler = RequestHandler | IRequestHandlerArray;
interface IRequestHandlerArray extends ReadonlyArray<IRequestHandler> {
}
/**
 * combine list of middlewares into 1 middlewares
 * then combined chain does not break if any middelware throws error
 * to catch these errors, wrap the middlewares with asyncMiddleware
 * @param first
 * @param middlewares
 * @returns {Function}
 */
export declare const combineMiddlewares: (first?: IRequestHandler, ...middlewares: readonly IRequestHandler[]) => (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => void;
/**
 * mimic the next middleware
 * @param middleware a single middleware
 * @return result/error promise
 */
export declare const middlewareToPromise: (middleware: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>) => (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>) => Promise<undefined>;
/**
 * extended version of middlewareToPromise which allows one or more middleware / array of middlewares
 * @param args
 */
export declare const combineToAsync: (...args: IRequestHandlerArray) => (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>) => Promise<undefined>;
