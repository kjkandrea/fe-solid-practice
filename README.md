# fe-solid-practice
solid 원칙 다시 공부하기

```bash
yarn
```

## SRP : 단일 책임 원칙

단일 책임 원칙(single responsibility principle)이란 모든 클래스는 하나의 책임만 가져야 한다는 원칙을 일컫는다.

> 하나의 모듈은 하나의 액터에 대해서만 책임져야 한다.

단일 액터들을 묶어주는 하나의 코드를 만들어보며 이를 배워보자.

```bash
yarn run:s 
```

`Andrea` 객체는 다음과 같은 기능을 가질것이다.

[![](https://mermaid.ink/img/pako:eNpNj7sKwzAMRX_FaGppviBbabsXsnoRtpya-oUjB0LIv9fk0fZO4twDkmZQURO0oBwOw91in9HLIGpWIq5BZ0Ixb0yIi9A0koupozxaRafzr0nEbEP_LClN_1xnG963aAx99eVot0ADnrJHq-sp6y4J_CJPEto6ajJYHEuQYalqSRqZHtpyzNAadAM1gIVjNwUFLedCh7R_tFvLB3JCS3I)](https://mermaid.live/edit#pako:eNpNj7sKwzAMRX_FaGppviBbabsXsnoRtpya-oUjB0LIv9fk0fZO4twDkmZQURO0oBwOw91in9HLIGpWIq5BZ0Ixb0yIi9A0koupozxaRafzr0nEbEP_LClN_1xnG963aAx99eVot0ADnrJHq-sp6y4J_CJPEto6ajJYHEuQYalqSRqZHtpyzNAadAM1gIVjNwUFLedCh7R_tFvLB3JCS3I)

* `developService()` 는 서비스를 개발하는 메서드 이다. 리턴값은 수행 가능 여부 boolean 이다.
* `developService()` 는 강아지를 쓰다듬는 메서드 이다. 
* `developService()` 는 커피를 마시는 메서드 이다. 

이를 단일 클래스로 구현하면 다음과 같다. : [bad/Andrea.ts](src/SRP/bad/Andrea.ts)

각 액터들을 구현 한 뒤 퍼사드 패턴을 이용하여 이를 통합하여 보자.

[![](https://mermaid.ink/img/pako:eNp1kcFuwyAMhl8F-bRp7QugXaa1Pe0wqVcuFvzp0BJABCJVXd59KGlWqjU-gf39tn_5QtobkCTdct_vLJ8id8qJEm_ORPCBNRuI15_tVhz2OwxofUBcQz5zCOcPP6wT775pgBVEipeq_vT8kAhIybrTNGoFMdG677nTQkwGawuXOS8KPaeOiIPVf4Kx1t183WSP9rgTVVaqYf9XG5fiHPc_2lCH2LE15UpTG0XpCx0UyfI0aDi3SZFyY0FzMJywNzb5SLLhtseGOCd_PDtNMsWMBboe-0qNv-otpro)](https://mermaid.live/edit#pako:eNp1kcFuwyAMhl8F-bRp7QugXaa1Pe0wqVcuFvzp0BJABCJVXd59KGlWqjU-gf39tn_5QtobkCTdct_vLJ8id8qJEm_ORPCBNRuI15_tVhz2OwxofUBcQz5zCOcPP6wT775pgBVEipeq_vT8kAhIybrTNGoFMdG677nTQkwGawuXOS8KPaeOiIPVf4Kx1t183WSP9rgTVVaqYf9XG5fiHPc_2lCH2LE15UpTG0XpCx0UyfI0aDi3SZFyY0FzMJywNzb5SLLhtseGOCd_PDtNMsWMBboe-0qNv-otpro)

``` typescript
class AndreaFacade implements AndreaClass {
	private readonly feDeveloper = new FEDeveloper()
	private readonly puppyLover = new PuppyLover()
	private readonly coffeeLover = new CoffeeLover()

	developService = this.feDeveloper.developService;
	pettingPuppy = this.puppyLover.pettingPuppy;
	drinkCoffee = this.coffeeLover.drink;
}
```

[AndreaFacade 생성자](src/SRP/good/AndreaFacade.ts)는 퍼사드 패턴으로 통합 인터페이스를 제공한다.
이 클래스는 세 클래스의 객체를 생성하고, 요청된 메서드를 가지는 객체로 위임하는 일을 책임진다.

이처럼 여러 메서드가 하나의 가족을 이루고, 메서드의 가족을 포함하는 각 클래스는 하나의 유효 범위가 된다.

이처럼 서로다른 액터를 분리한 후 결합하여 SRP을 준수할 수 있다.