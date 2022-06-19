import { Controller, HttpResponse } from "@/presentation/protocols";
import { serverError, ok } from "@/presentation/helpers";
import {
	CreateAccount,
	CreateUser,
	FindByWhereAccount,
	FindByWhereOrAccount,
} from "@/domain/usecases";
import { AccountModel, UserModel } from "@/domain/models";

export class PostRegisterController implements Controller {
	constructor(
		private readonly findByWhereAccount: FindByWhereAccount,
		private readonly createAccount: CreateAccount,
		private readonly createUser: CreateUser,
		private readonly findByWhereOrAccount: FindByWhereOrAccount
	) {}

	async handle(request: PostRegisterController.Request): Promise<HttpResponse> {
		try {
			const { name, email, password, gender, month, year, day } = request;

			const birthday = new Date(year, month, day);

			const accountsByWhereOr = await this.findByWhereOrAccount.findByWhereOr({
				name,
				email,
			});

			if (accountsByWhereOr.length > 0) {
				return ok([
					"Cuenta ya existe",
					"Por favor, intentar usar otro correo o username",
				]);
			}

			const accountModel = {
				email,
				password,
				name,
			} as AccountModel;

			const newAccountModel = await this.createAccount.create(accountModel);

			const userModel = {
				name,
				birthday,
				rank: 0,
				account_id: newAccountModel.id,
				gender,
				country: "PE",
			} as UserModel;

			const newUserModel = await this.createUser.create({
				...userModel,
				birthday: birthday.toISOString().slice(0, 19).replace("T", " "),
			});

			// 		this.user_id = a;
			// this.user_rank = b;
			// this.user_auth_key = d;
			// this.user_country = c;

			return ok([1, 24, "dwdqwdqwdqwdqwdqd", "PE", 0]);
		} catch (ex) {
			console.log(ex)
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
		year: number;
		month: number;
		day: number;
	};
}
