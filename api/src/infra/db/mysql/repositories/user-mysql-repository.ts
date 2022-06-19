import { MySQLHelper } from "@/infra/db";
import { QueryBuilder } from "../query-builder";

import { CreateUserRepository } from "@/data/protocols/db";

export class UserMysqlRepository implements CreateUserRepository {
	private readonly tableName = "users";

	async create(
		user: CreateUserRepository.Params
	): Promise<CreateUserRepository.Result> {
		const query = new QueryBuilder()
			.insert()
			.into(this.tableName, Object.keys(user))
			.values(Object.values(user))
			.generate();
		const response = await MySQLHelper.query(query);
		const newBirthday = new Date(user.birthday);

		delete user.birthday;
		return {
			...response,
			birthday: newBirthday,
		};
	}
}
