import { UserMysqlRepository } from "@/infra/db/mysql/repositories/user-mysql-repository";

const userRepository = new UserMysqlRepository();

describe("repository user", () => {
	it("creando cuenta", async () => {
		await userRepository.create({
			name: "wilmer",
			account_id: 1,
			gender: "m",
            birthday: new Date().toISOString().slice(0, 19).replace('T', ' ')
		});
	});
});
