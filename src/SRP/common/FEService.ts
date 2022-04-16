import {Service, ServiceClass} from "./Service";

interface FEServiceClass extends ServiceClass {
	getUI(): string
}

export class FEService extends Service implements FEServiceClass {
	public getUI () {
		return `<h1>${this.getName()}</h1>`
	}
}