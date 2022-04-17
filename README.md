> 클린 아키텍처 : 소프트웨어 구조와 설계의 원칙

solid 원칙 다시 공부하기

```bash
yarn
```

## SRP : 단일 책임 원칙

단일 책임 원칙(Single Responsibility Principle)이란 모든 클래스는 하나의 책임만 가져야 한다는 원칙을 일컫는다.

> 하나의 모듈은 하나의 액터에 대해서만 책임져야 한다.

단일 액터들을 묶어주는 하나의 코드를 만들어보며 이를 배워보자.

```bash
yarn run:s 
```

### `Andrea` 

`Andrea` 객체는 다음과 같은 기능을 가질것이다.

[![](https://mermaid.ink/img/pako:eNpNj7sKwzAMRX_FaGppviBbabsXsnoRtpya-oUjB0LIv9fk0fZO4twDkmZQURO0oBwOw91in9HLIGpWIq5BZ0Ixb0yIi9A0koupozxaRafzr0nEbEP_LClN_1xnG963aAx99eVot0ADnrJHq-sp6y4J_CJPEto6ajJYHEuQYalqSRqZHtpyzNAadAM1gIVjNwUFLedCh7R_tFvLB3JCS3I)](https://mermaid.live/edit#pako:eNpNj7sKwzAMRX_FaGppviBbabsXsnoRtpya-oUjB0LIv9fk0fZO4twDkmZQURO0oBwOw91in9HLIGpWIq5BZ0Ixb0yIi9A0koupozxaRafzr0nEbEP_LClN_1xnG963aAx99eVot0ADnrJHq-sp6y4J_CJPEto6ajJYHEuQYalqSRqZHtpyzNAadAM1gIVjNwUFLedCh7R_tFvLB3JCS3I)

* `developService()` 는 서비스를 개발하는 메서드 이다. 리턴값은 수행 가능 여부 boolean 이다.
* `pettingPuppy()` 는 강아지를 쓰다듬는 메서드 이다. 
* `drinkCoffee()` 는 커피를 마시는 메서드 이다. 

이를 단일 클래스로 구현하면 다음과 같다. : [src/SRP/bad/Andrea.ts](src/SRP/bad/Andrea.ts)

각 액터들을 구현 한 뒤 퍼사드 패턴을 이용하여 이를 통합하여 보자.

[![](https://mermaid.ink/img/pako:eNp1kc1qwzAQhF9F7CmlyQuIXkJ-TjkEctVlkcapqC0JWTKE1O9eY8fEodGe9PPNzg57J-0NSJKuuW33lq-RG-XEUFtnIvjImg3E1-9mI46HPTrUPiCWkHMO4XbyXZnY-aoCCogUn2ayuCB2VmP18RYKSMm66-hWQEy07mcym4kx4zLFfXoXJdd-qXtGe8rezfEiWqRdmP0frZ8_p3q90ZoaxIatGRY1tlGUvtFAkRyOBhXnOilSrh_QHAwnHIxNPpKsuG6xJs7JX25Ok0wxY4Ye-35Q_R-YoKgq)](https://mermaid.live/edit#pako:eNp1kc1qwzAQhF9F7CmlyQuIXkJ-TjkEctVlkcapqC0JWTKE1O9eY8fEodGe9PPNzg57J-0NSJKuuW33lq-RG-XEUFtnIvjImg3E1-9mI46HPTrUPiCWkHMO4XbyXZnY-aoCCogUn2ayuCB2VmP18RYKSMm66-hWQEy07mcym4kx4zLFfXoXJdd-qXtGe8rezfEiWqRdmP0frZ8_p3q90ZoaxIatGRY1tlGUvtFAkRyOBhXnOilSrh_QHAwnHIxNPpKsuG6xJs7JX25Ok0wxY4Ye-35Q_R-YoKgq)

``` typescript
class AndreaFacade {
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

이처럼 서로 다른 액터를 분리한 후 결합하여 SRP을 준수할 수 있다.

## OCP : 개방-폐쇄 원칙

개방-폐쇄 원칙(Open-Closed Principle) 은 소프트웨어 개체(클래스, 모듈, 함수 등등)는 확장에는 열려 있어야 하고, 수정에 대해서는 닫혀 있어야 한다는 원칙을 일컫는다.

> 모듈 자체의 소스 코드를 수정하지 않아도 모듈의 기능을 확장하거나 변경할 수 있다.

기능 변경에 있어 열려있는 클래스를 만들어보자.

```bash
yarn run:o 
```

### `ImmigrationOfficer`

[복수개의 여권](src/OCP/common/fixture.ts)을 받아 특정 기준에 부합하게 여권을 심사하는 어플리케이션을 만들어보자.
심사 현재 기준은 다음과 같다.

* 네덜란드, 일본 여권은 반려 한다.
* 범죄 여부가 조회되면 반려 한다.

위 두 조건은 가변 조건이다. 소프트웨어 시스템은 사용자와 이해관계자를 만족 시키기 위해 항상 변경된다.
행위를 변경/확장 할 수 있어야하지만, 이 때 개체를 변경해서는 안된다.

``` ts
class ImmigrationOfficer {
	constructor(passports: Passport[], predict: (passport: Passport) => boolean) {
		const { permitPassports, banPassports } = this.immigrationPassports(passports, predict)
    }
}
```

[ImmigrationOfficer 클래스](src/OCP/good/ImmigrationOfficer.ts)는 `predict` 이라는 조건을 평가하는 로직을 인자로 받은 후 이를 평가한다.

이후 [사용부](src/OCP/index.ts)에서 평가 로직을 입력한다.

```ts
new ImmigrationOfficer(
	passports, // 심사할 여권
	passport => !['JP', 'NZ'].includes(passport.nation) && !passport.crime // 판단 기준
)
``` 

이처럼 함수를 매개 변수로 받는 방법을 통해서 평가를 사용부에 위임함으로서 공통 로직과 가변되는 로직을 분리해서 다룰 수 있다.
 
## LSP : 리스코프 치환 원칙 

리스코프 치환 원칙(Liskov substitution principle)은 부모 객체를 호출하는 동작에서 자식 객체가 부모 객체를 대체할 수 있어야 한다는 원칙을 일컫는다.

> 모든 상속 받는 객체는 부모 객체의 규칙을 위배하지 말아야한다.

대표적인 위반 징후는 다음과 같다.

* 하위 클래스에서 부모 클래스의 메서드에 다른 매개변수를 추가한다. 
* 하위 클래스에서 부모 클래스의 메서드를 의도와 다르게 오버라이딩한다.

```bash
yarn run:l 
```

[이를 위배하는 예시](src/LSP/bad/hello.ts)는 다음과 같다.

```js
class Hello {
  hello(name: string) {
    return `Hello, ${name}!`;
  }
}

export class HelloFriend extends Hello {
  // LSP 위반 : 하위 클래스에서 부모 클래스의 메서드에 다른 매개변수를 추가한다.
  // @ts-ignore
  hello(name: string, age: string) {
    return `Hello, ${age} year old ${name}, have a nice day!`;
  }
}

export class Bye extends Hello {
  // LSP 위반 : 위 클래스에서 부모 클래스의 메서드를 의도와 다르게 오버라이딩한다.
  // @ts-ignore
  hello (name: string) {
    throw new Error()
  }

  bye(name: string) {
    return `Bye, ${name}!`;
  }
}
```

재밌게도 typescript 환경에서는 오버라이딩에 상위 유형을 그대로 리턴해야한다는 제약이 있어
위와 같은 코드 자체가 성립하지 않는다. (incompatible override)

때문에 @ts-ignore 를 추가 해주었다.

```bash
TS2416: Property 'hello' in type 'HelloFriend' is not assignable to the same property in base type 'Hello'. 
  Type '(name: string, age: string) => string' is not assignable to type '(name: string) => string'.
```

### 아키텍처 관점에서의 LSP 준수

LSP 규칙은 클래스 상속 뿐만 아니라 '정의된 인터페이스와 그 인터페이스의 구현체끼리의 상호 치환 가능성에 기대는' 서비스 관점에서 생각해볼 수 있다.

클린 아키텍처 책에서는 메인 시스템에서 정의한 인터페이스와, 그 인터페이스를 지키지 않은 서브 시스템으로 인해 발생하는 상황을 예로 든다.
서브 시스템에서 인터페이스를 준수하지 않고 시스템을 구성한 후 메인 시스템에 예외 처리를 요구한다.

이 경우 메인 시스템에서 서브 시스템을 위해 예외 처리를 해주는것을 용납하여서는 안된다.

클래스 상속관계 뿐만 아니라 아키텍처 관점에서도 다음과 같은 원칙을 준수하여야한다.

> 부모 객체를 호출하는 동작에서 자식 객체가 부모 객체를 대체할 수 있어야 한다
  
