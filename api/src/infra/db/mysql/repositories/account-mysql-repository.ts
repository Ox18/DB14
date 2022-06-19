import { MySQLHelper } from "@/infra/db";
import { QueryBuilder } from "../query-builder";

import {
	FindAllAccountRepository,
	FindByWhereAccountRepository,
	CreateAccountRepository,
	FindByWhereOrAccountRepository,
} from "@/data/protocols/db/account";
import { FindByWhereOrAccount } from "@/domain/usecases";

export class AccountMysqlRepository
	implements
		FindAllAccountRepository,
		FindByWhereAccountRepository,
		CreateAccountRepository,
		FindByWhereOrAccountRepository
{
	private readonly tableName = "accounts";

	async findAll(): Promise<FindAllAccountRepository.Result> {
		const query = new QueryBuilder()
			.selectAll()
			.from(this.tableName)
			.generate();

		const response = await MySQLHelper.query(query);
		return response;
	}

	async findByWhere(
		where: FindByWhereAccountRepository.Params
	): Promise<FindByWhereAccountRepository.Result> {
		const query = new QueryBuilder()
			.selectAll()
			.from(this.tableName)
			.whereByObject(where)
			.generate();

		const response = await MySQLHelper.query(query);
		return response;
	}

	async create(
		account: CreateAccountRepository.Params
	): Promise<CreateAccountRepository.Result> {
		const query = new QueryBuilder()
			.insert()
			.into(this.tableName, Object.keys(account))
			.values(Object.values(account))
			.generate();
		const response = await MySQLHelper.insert(query, account);
		return response;
	}

	async findByWhereOr(
		where: FindByWhereOrAccount.Params
	): Promise<FindByWhereOrAccount.Result> {
		const query = new QueryBuilder()
			.selectAll()
			.from(this.tableName)
			.whereOrByObject(where)
			.generate();

		const response = await MySQLHelper.query(query);
		return response;
	}
}
