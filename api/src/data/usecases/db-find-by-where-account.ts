import { FindByWhereAccount } from "@/domain/usecases";
import { FindByWhereAccountRepository } from "../protocols/db";

export class DbFindByWhereAccount implements FindByWhereAccount {
	constructor(
		private readonly findByWhereAccountRepository: FindByWhereAccountRepository
	) {}

	findByWhere: (
		where: FindByWhereAccountRepository.Params
	) => Promise<FindByWhereAccountRepository.Result> = async (where) => {
		const response = await this.findByWhereAccountRepository.findByWhere(where);
		return response;
	};
}
