import { Router } from "express";
import { adaptRoute } from "@/main/adapters";
import { makePostRegisterController } from "../factories/controllers";

export default (router: Router): void => {
	router.post("/register", adaptRoute(makePostRegisterController()));
};
