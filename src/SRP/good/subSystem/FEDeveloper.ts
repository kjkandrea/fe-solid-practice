import {FEService} from "../../common/FEService";
import {ServiceClass} from "../../common/Service";

export default class FEDeveloper {
	private readonly roll = FEService;

	public developService = (service: ServiceClass) => {
		return service instanceof this.roll;
	}
}