import { Controller, HttpResponse } from "@/presentation/protocols";
import { serverError, ok, objHaveKeys } from "@/presentation/helpers";
import { FindAllAccount, FindByWhereAccount } from "@/domain/usecases";

export class GetAccountsController implements Controller {
	constructor(
		private readonly findAllAccount: FindAllAccount,
		private readonly findByWhereAccount: FindByWhereAccount
	) {}

	async handle(request: GetAccountsController.Request): Promise<HttpResponse> {
		try {
			let accounts = [];

			if (objHaveKeys(request)) {
				accounts = await this.findByWhereAccount.findByWhere(request);
			} else {
				accounts = await this.findAllAccount.findAll();
			}

			return ok(accounts);
		} catch (error) {
			return serverError(error);
		}
	}
}

export namespace GetAccountsController {
	export type Request = {
		id?: number;
		name?: string;
		email?: string;
	};
}
