import { Controller, HttpResponse } from "@/presentation/protocols";
import { serverError, ok } from "@/presentation/helpers";
import {
	CreateAccount,
	CreateUser,
	FindByWhereAccount,
} from "@/domain/usecases";
import { AccountModel } from "@/domain/models";

export class PostRegisterController implements Controller {
	constructor(
		private readonly findByWhereAccount: FindByWhereAccount,
		private readonly createAccount: CreateAccount,
		private readonly createUser: CreateUser
	) {}

	async handle(request: PostRegisterController.Request): Promise<HttpResponse> {
		try {
			const { name, email, password, birthday, gender } = request;
			console.log(request);

			const accountModel = {
				email,
				password,
				name,
			} as AccountModel;

			const newAccountModel = await this.createAccount.create(accountModel);

			return ok(newAccountModel);
		} catch (ex) {
			return serverError(ex);
		}
	}
}

export namespace PostRegisterController {
	export type Request = {
		name: string;
		email: string;
		password: string;
		gender: string;
		birthday: Date;
	};
}
