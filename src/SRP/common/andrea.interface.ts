import {ServiceClass} from "./Service";

export default interface AndreaClass {
	developService(service: ServiceClass): boolean,
	pettingPuppy(): 'pet pet 🐶' | 'no puppy 😭',
	drinkCoffee(): boolean
}