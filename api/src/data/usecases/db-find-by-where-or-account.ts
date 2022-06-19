import { FindByWhereOrAccount } from "@/domain/usecases";
import { FindByWhereOrAccountRepository } from "../protocols/db";

export class DbFindByWhereOrAccount implements FindByWhereOrAccount {
	constructor(
		private readonly findByWhereOrAccountRepository: FindByWhereOrAccountRepository
	) {}

	findByWhereOr: (
		where: FindByWhereOrAccountRepository.Params
	) => Promise<FindByWhereOrAccountRepository.Result> = async (where) => {
		const response = await this.findByWhereOrAccountRepository.findByWhereOr(
			where
		);
		return response;
	};
}
