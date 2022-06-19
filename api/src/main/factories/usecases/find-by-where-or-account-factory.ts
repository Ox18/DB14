import { DbFindByWhereOrAccount } from "@/data/usecases";
import { AccountMysqlRepository } from "@/infra/db";

export const makeDbFindByWhereOrAccount = (): DbFindByWhereOrAccount => {
	return new DbFindByWhereOrAccount(new AccountMysqlRepository());
};
