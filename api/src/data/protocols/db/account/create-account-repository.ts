import { CreateAccount } from "@/domain/usecases";

export interface CreateAccountRepository {
    create(account: CreateAccountRepository.Params): Promise<CreateAccountRepository.Result>;
}

export namespace CreateAccountRepository {
    export type Params = CreateAccount.Params;
    export type Result = CreateAccount.Result;
}