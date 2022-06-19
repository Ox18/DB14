export class QueryBuilder {
	private query = "";

	private addStep(step: string, data: any): QueryBuilder {
		this.query += `${step} ${data} `;
		return this;
	}

	public select(data: string): QueryBuilder {
		return this.addStep("select", data);
	}

	public selectMultiple(data: string[]): QueryBuilder {
		return this.addStep("select", data.join(", "));
	}

	public selectAll(): QueryBuilder {
		return this.addStep("select", "*");
	}

	public from(data: string): QueryBuilder {
		return this.addStep("from", data);
	}

	public where(data: string): QueryBuilder {
		return this.addStep("where", data);
	}

	public orderBy(data: string): QueryBuilder {
		return this.addStep("orderBy", data);
	}

	public limit(data: number, listPerPage: number): QueryBuilder {
		return this.addStep("limit", `${data},${listPerPage}`);
	}

	public offset(data: number): QueryBuilder {
		return this.addStep("offset", data);
	}

	public groupBy(data: string): QueryBuilder {
		return this.addStep("groupBy", data);
	}

	public having(data: string): QueryBuilder {
		return this.addStep("having", data);
	}

	public join(data: string): QueryBuilder {
		return this.addStep("join", data);
	}

	public insert(): QueryBuilder {
		return this.addStep("insert", "");
	}

	public into(tablename: string, columns: string[]): QueryBuilder {
		const columns_query = columns.join(", ");
		return this.addStep("into", `${tablename} (${columns_query})`);
	}

	public values(values: any[]): QueryBuilder {
		const values_query = values.map((value) => `'${value}'`).join(", ");
		return this.addStep("values", "(" + values_query + ")");
	}

	public generate(): string {
		return this.query.slice(0, -1);
	}

	public whereByObject(data: any): QueryBuilder {
		const keys = Object.keys(data);
		const values = Object.values(data);
		const where_query = this.convertToWhereByKeyAndValue(keys, values);
		return this.addStep("where", where_query);
	}

	public whereOrByObject(data: any): QueryBuilder {
		const keys = Object.keys(data);
		const values = Object.values(data);
		const where_query = this.convertToWhereOrByKeyAndValue(keys, values);
		return this.addStep("where", where_query);
	}

	private convertToWhereByKeyAndValue(keys: any, values: any): string {
		return keys
			.map((key, index) => `${key} = '${values[index]}'`)
			.join(" and ");
	}

	private convertToWhereOrByKeyAndValue(keys: any, values: any): string {
		return keys.map((key, index) => `${key} = '${values[index]}'`).join(" or ");
	}

	public customized(data: string): QueryBuilder {
		return this.addStep("", data);
	}
}
