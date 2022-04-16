import {Service} from "../common/Service";
import {FEService} from "../common/FEService";

export default class Andrea {
	private readonly roll = FEService;
	private readonly puppy = null
	private readonly coffee = {
		todayCoffeeCount: 2,
		drink() {
			if (this.todayCoffeeCount === 0) throw new Error('coffee limit over')
			this.todayCoffeeCount -= 1
			return true
		}
	}

	public developService (service: Service) {
		// andrea is fe developer
		return service instanceof this.roll
	}

	pettingPuppy () {
		return this.puppy ? 'pet pet 🐶' : 'no puppy 😭'
	}

	drinkCoffee () {
		return this.coffee.drink()
	}
}