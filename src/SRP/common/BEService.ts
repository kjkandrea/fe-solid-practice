import {Service, ServiceClass} from "./Service";

interface BEServiceClass extends ServiceClass {
	getAPI(): string
}

export class BEService extends Service implements BEServiceClass {
	public getAPI () {
		return `GET /service/${this.getName()} `
	}
}