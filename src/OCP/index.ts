import ImmigrationOfficer from "./bad/ImmigrationOfficer";
import {passports} from "./common/fixture";

(function main() {
	const { permitPassports, banPassports, permitCount } = new ImmigrationOfficer(passports)

	console.log('permitPassports : ', permitPassports)
	console.log('banPassports : ', banPassports)
	console.log('permitCount : ', permitCount)
}())