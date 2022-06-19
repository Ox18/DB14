import { AccountMysqlRepository } from "@/infra/db/mysql/repositories/account-mysql-repository";

const accountRepository = new AccountMysqlRepository();

describe("testeo", () => {
	it("Existe una cuenta", async ()=>{
        const result = await accountRepository.findAll();
        const expected = 5;
        expect(result.length).toEqual(expected);
    })

    // it("crear cuenta", async ()=>{  
    //      await accountRepository.create({
    //         name: "testw",
    //         email: "test",
    //         password: "test",
    //     });
    //     expect(1).toEqual(1);
    // })
});
