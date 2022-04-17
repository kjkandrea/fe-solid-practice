import {Bye, HelloFriend} from "./good/hello";


(function main() {
	const { hello } = new HelloFriend()
	const { bye } = new Bye()

	console.log('helloFriend : ', hello('andrea', 5))
	console.log('bye : ', bye('andrea'))
}())