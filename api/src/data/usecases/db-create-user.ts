import { CreateUser } from "@/domain/usecases";
import { CreateUserRepository } from "../protocols/db";

export class DbCreateUser implements CreateUser {
	constructor(private readonly createUserRepository: CreateUserRepository) {}

	create: (
		user: CreateUserRepository.Params
	) => Promise<CreateUserRepository.Result> = async (user) => {
		const response = await this.createUserRepository.create(user);
		return response;
	};
}
