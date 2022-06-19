import { AccountModel } from "../models";

export interface FindAllAccount{
    findAll: () => Promise<FindAllAccount.Result>;
}

export namespace FindAllAccount{
    export type Result = AccountModel[];
}