import Andrea from "./Andrea";
import {FEService} from "../common/FEService";
import {BEService} from "../common/BEService";

(function main() {
	const andrea = new Andrea()
	const dashboardService = new FEService({ name : 'dashboard' })
	const apiService = new BEService({ name : 'api' })

	console.log('develop dashboard : ', andrea.developService(dashboardService))
	console.log('develop api : ', andrea.developService(apiService))
	console.log('petting puppy : ', andrea.pettingPuppy())
	console.log('drink coffee : ', andrea.drinkCoffee())
	console.log('drink coffee : ', andrea.drinkCoffee())
}())