import { CreateAccount } from "@/domain/usecases";
import { CreateAccountRepository } from "../protocols/db";

export class DbCreateAccount implements CreateAccount {
	constructor(
		private readonly createAccountRepository: CreateAccountRepository
	) {}

	create: (
		account: CreateAccountRepository.Params
	) => Promise<CreateAccountRepository.Result> = async (account) => {
		const response = await this.createAccountRepository.create(account);
		return response;
	};
}
