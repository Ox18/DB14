import { FindAllAccount } from "@/domain/usecases/find-all-account";
import { FindAllAccountRepository } from "../protocols/db/account";

export class DbFindAllAccount implements FindAllAccount {
	constructor(
		private readonly findAllAccountRepository: FindAllAccountRepository
	) {}

	findAll: () => Promise<FindAllAccount.Result> = async () => {
		const response = await this.findAllAccountRepository.findAll();
		return response;
	};
}
