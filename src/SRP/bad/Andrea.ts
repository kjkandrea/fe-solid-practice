import {Service} from "../common/Service";
import {FEService} from "../common/FEService";

export default class Andrea {
	developService (service: Service) {
		return service instanceof FEService
	}
}