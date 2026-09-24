// ============ Imports ============
import type { NextFunction, Request, Response, RequestHandler } from "express";
import { z, ZodError } from 'zod';
// =========== Logic =============

interface TypedRequest<T> extends Request {
  body: T;
}

export const validateData = <T extends z.ZodTypeAny>(schema: T): RequestHandler => {
    return (request: TypedRequest<z.infer<T>>, response: Response, next: NextFunction):void => {

		const validationResult = schema.safeParse(request.body);

		if (!validationResult.success) {
		response.status(400).json({
			message: "Validation failed",
			errors: validationResult.error,
		});
		return; 
		}

		// Overwrite the req.body with validated data
		request.body = validationResult.data;

		next(); 


    };
}