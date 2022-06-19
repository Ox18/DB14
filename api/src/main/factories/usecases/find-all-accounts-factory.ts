import { DbFindAllAccount } from "@/data/usecases";
import { AccountMysqlRepository } from "@/infra/db/mysql/repositories/account-mysql-repository";

export const makeDbFindAllAccounts = (): DbFindAllAccount => {
	return new DbFindAllAccount(new AccountMysqlRepository());
};
