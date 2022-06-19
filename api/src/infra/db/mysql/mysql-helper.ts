import mysql from "mysql2/promise";
import { CONFIG } from "./mysql-config";

export class MySQLHelper {
	static async insert(sql: string, lastData: any): Promise<any> {
		const response = await MySQLHelper.query(sql);
		return {
			id: response.insertId,
			...lastData,
			created_at: new Date(),
		};
	}

	static async query(sql: string, params: any[] = []): Promise<any> {
		const connection = await mysql.createConnection(CONFIG);
		const [results] = await connection.execute(sql, params);
		return results;
	}
}
