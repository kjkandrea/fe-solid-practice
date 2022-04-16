import {Passport} from "../common/fixture";

export default class ImmigrationOfficer {
	public readonly permitPassports: Passport[]
	public readonly banPassports: Passport[]

	constructor(passports: Passport[]) {
		const { permitPassports, banPassports } = this.immigrationPassports(passports)
		this.permitPassports = permitPassports;
		this.banPassports = banPassports;
	}

	private immigrationPassports (passports: Passport[]) {
		const permitPassports: Passport[] = []
		const banPassports: Passport[] = []

		for (const passport of passports) {
			if (['JP', 'NZ'].includes(passport.nation)) {
				banPassports.push(passport)
				continue
			}

			if (passport.crime) {
				banPassports.push(passport)
				continue
			}

			permitPassports.push(passport)
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