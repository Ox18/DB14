import { DbCreateAccount } from "@/data/usecases";
import { AccountMysqlRepository } from "@/infra/db";

export const makeDbCreateAccount = (): DbCreateAccount => {
	return new DbCreateAccount(new AccountMysqlRepository());
};
