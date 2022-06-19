import { Controller } from "@/presentation/protocols";

import { Request, Response } from "express";

export const adaptRoute = (controller: Controller) => {
	return async (req: Request, res: Response) => {
		const request = {
			...(req.body || {}),
			...(req.params || {}),
			...(req.query || {}),
		};

		const httpResponse = await controller.handle(request);
		if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
			if (typeof httpResponse.body === "object") {
				res.status(httpResponse.statusCode).json(httpResponse.body);
			}
			if (typeof httpResponse.body === "string") {
				res.status(httpResponse.statusCode).send(httpResponse.body);
			}
		} else {
			res.status(httpResponse.statusCode).json({
				error: httpResponse.body.message,
			});
		}
	};
};
