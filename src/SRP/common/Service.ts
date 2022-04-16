export interface ServiceClass {
	getName(): string
}

export class Service implements ServiceClass {
	private readonly name: string;

	constructor({ name }: { name: string }) {
		this.name = name
	}

	public getName() {
		return this.name
	}
}