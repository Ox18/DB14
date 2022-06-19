import { Router } from "express";
import { adaptRoute } from "@/main/adapters";
import { makeGetAccountsController } from "@/main/factories/controllers";

export default (router: Router): void => {
	router.get("/accounts", adaptRoute(makeGetAccountsController()));
};
