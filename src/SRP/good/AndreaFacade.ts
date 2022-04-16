import FEDeveloper from "./subSystem/FEDeveloper";
import PuppyLover from "./subSystem/PuppyLover";
import CoffeeLover from "./subSystem/CoffeeLover";
import AndreaClass from "../common/andrea.interface";

/**
 * AndreaFacade 생성자는 퍼사드 패턴으로 통합 인터페이스를 제공한다.
 * 이 클래스는 세 클래스의 객체를 생성하고, 요청된 메서드를 가지는 객체로 위임하는 일을 책임진다.
 *
 * 이처럼 여러 메서드가 하나의 가족을 이루고, 메서드의 가족을 포함하는 각 클래스는 하나의 유효 범위가 된다.
 */
export default class AndreaFacade implements AndreaClass {
	private readonly feDeveloper = new FEDeveloper()
	private readonly puppyLover = new PuppyLover()
	private readonly coffeeLover = new CoffeeLover()

	developService = this.feDeveloper.developService;
	pettingPuppy = this.puppyLover.pettingPuppy;
	drinkCoffee = this.coffeeLover.drink;
}