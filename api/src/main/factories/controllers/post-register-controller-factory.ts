import { PostRegisterController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import {
	makeDbCreateAccount,
	makeDbCreateUser,
	makeDbFindByWhereAccount,
	makeDbFindByWhereOrAccount,
} from "../usecases";

export const makePostRegisterController = (): Controller => {
	return new PostRegisterController(
		makeDbFindByWhereAccount(),
		makeDbCreateAccount(),
		makeDbCreateUser(),
		makeDbFindByWhereOrAccount()
	);
};
