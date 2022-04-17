import ImmigrationOfficer from "./good/ImmigrationOfficer";
import {passports} from "./common/fixture";

(function main() {
	const { permitPassports, banPassports, permitCount } = new ImmigrationOfficer(
		passports,
		passport => !['JP', 'NZ'].includes(passport.nation) && !passport.crime
	)

	console.log('permitPassports : ', permitPassports)
	console.log('banPassports : ', banPassports)
	console.log('permitCount : ', permitCount)
}())