import {Passport} from "../common/fixture";

export default class ImmigrationOfficer {
	public readonly permitPassports: Passport[]
	public readonly banPassports: Passport[]

	constructor(passports: Passport[], predict: (passport: Passport) => boolean) {
		const { permitPassports, banPassports } = this.immigrationPassports(passports, predict)
		this.permitPassports = permitPassports;
		this.banPassports = banPassports;
	}

	private immigrationPassports (passports: Passport[], predict: (passport: Passport) => boolean) {
		const permitPassports: Passport[] = []
		const banPassports: Passport[] = []

		for (const passport of passports) {
			predict(passport) ? permitPassports.push(passport) : banPassports.push(passport)
		}

		return {
			permitPassports,
			banPassports
		}
	}

	get permitCount () {
		return this.permitPassports.length
	}
}