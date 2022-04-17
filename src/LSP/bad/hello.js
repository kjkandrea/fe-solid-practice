class Hello {
  hello(name) {
    return `Hello, ${name}!`;
  }
}

export class HelloFriend extends Hello {
  // LSP 위반 : 하위 클래스에서 부모 클래스의 메서드에 다른 매개변수를 추가한다.
  hello(name, age) {
    return `Hello, ${age} year old ${name}, have a nice day!`;
  }
}

export class Bye extends Hello {
  // LSP 위반 : 위 클래스에서 부모 클래스의 메서드를 의도와 다르게 오버라이딩한다.
  hello (name) {
    throw new Error()
  }

  bye(name) {
    return `Bye, ${name}!`;
  }
}