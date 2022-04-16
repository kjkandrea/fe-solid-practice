import {ServiceClass} from "../common/Service";
import {FEService} from "../common/FEService";
import AndreaClass from "../common/andrea.interface";

export default class Andrea implements AndreaClass {
	private readonly roll = FEService; // andrea is fe developer
	private readonly puppy = null
	private readonly coffee = {
		todayCoffeeCount: 2,
		drink() {
			if (this.todayCoffeeCount === 0) throw new Error('coffee limit over')
			this.todayCoffeeCount -= 1
			return true
		}
	}

	public developService (service: ServiceClass) {
		return service instanceof this.roll
	}

	pettingPuppy () {
		return this.puppy ? 'pet pet 🐶' : 'no puppy 😭'
	}

	drinkCoffee () {
		return this.coffee.drink()
	}
}