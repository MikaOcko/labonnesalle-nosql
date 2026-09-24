// ============ Imports ============
import type { NextFunction, Request, Response, RequestHandler } from "express";
import { z, ZodError } from 'zod';
// =========== Logic =============

interface TypedRequest<T> extends Request {
  body: T;
}

export const validateData = <T extends z.ZodTypeAny>(schema: T): RequestHandler => {
    return (request: TypedRequest<any>, response: Response, next: NextFunction):void => {
		// try {
		// 	// schema.parse(request.body);
		// 	// next();

		// } catch (error) {
		// 	// if (error instanceof ZodError) {
		// 	// const errorMessages = error.errors.map((issue: any) => ({
		// 	// 	message: `${issue.path.join('.')} is ${issue.message}`,
		// 	// }))
		// 	// response.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
		// 	// } else {
		// 	// response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
		// 	// }

		// }

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