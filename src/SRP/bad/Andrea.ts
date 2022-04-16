import {Service} from "../common/Service";
import {FEService} from "../common/FEService";

/**
 * Andrea 생성자는 단일책임 원칙에 위배된다.
 * 다음 세가지 메서드를 가진다.
 * * developService : 서비스를 개발한다. 리턴값은 수행 여부
 * * pettingPuppy : 강아지를 쓰다듬는다.
 * * drinkCoffee : 커피를 마신다.
 *
 *  개발자가 이 세 메서드를 Andrea 라는 단일 클래스에 배치하여 세 액터가 서로 결합되어 버렸다.
 *  두 명의 서로 다른 개발자가 Andrea 클래스를 동시 개발할 경우 SRP 위반 징후인 '병합' 이 나타날 가능성이 높다.
 */
export default class Andrea {
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

	public developService (service: Service) {
		return service instanceof this.roll
	}

	pettingPuppy () {
		return this.puppy ? 'pet pet 🐶' : 'no puppy 😭'
	}

	drinkCoffee () {
		return this.coffee.drink()
	}
}