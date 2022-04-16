class CoffeeLimitController {
	private todayCoffeeCount = Infinity;

	constructor(coffeeLimit: number) {
		this.todayCoffeeCount = coffeeLimit;
	}

	drink = () => {
		if (this.todayCoffeeCount === 0) throw new Error('coffee limit over')
		this.todayCoffeeCount -= 1
		return true
	}
}

export default class CoffeeLover {
	private readonly coffeeController = new CoffeeLimitController(2)

	drink = this.coffeeController.drink;
}