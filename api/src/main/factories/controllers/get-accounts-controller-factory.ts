import { GetAccountsController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbFindAllAccounts, makeDbFindByWhereAccount } from "../usecases";

export const makeGetAccountsController = (): Controller => {
	const controller = new GetAccountsController(makeDbFindAllAccounts(), makeDbFindByWhereAccount());
	return controller;
};
