type Nation = 'KR'|'US'|'JP'|'UK'|'NL'

interface Passport {
	name: string,
	nation: Nation,
	crime: boolean,
	job: 'programmer'|string
}

export const passports: Passport[] = [
	{
		name: 'andrea',
		nation: 'KR',
		crime: true,
		job: 'programmer'
	},
	{
		name: 'yusoo',
		nation: 'KR',
		crime: false,
		job: 'programmer'
	},
	{
		name: 'zoro',
		nation: 'JP',
		crime: true,
		job: 'pirate'
	},
	{
		name: 'mummu',
		nation: 'US',
		crime: true,
		job: 'little puppy'
	},
	{
		name: 'Robert C. Martin',
		nation: 'KR',
		crime: false,
		job: 'programmer'
	},
	{
		name: 'Dan Abramov',
		nation: 'UK',
		crime: false,
		job: 'programmer'
	},
	{
		name: 'Edsger Wybe Dijkstra',
		nation: 'NL',
		crime: false,
		job: 'programmer'
	},
]