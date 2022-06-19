import { DbFindByWhereAccount } from "@/data/usecases";
import { AccountMysqlRepository } from "@/infra/db";

export const makeDbFindByWhereAccount = (): DbFindByWhereAccount => {
	return new DbFindByWhereAccount(new AccountMysqlRepository());
};
