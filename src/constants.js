const DONATIONS = 'DONATIONS',
	TOTAL_VALUE = 'TOTAL_VALUE',
	DEMOGRAPHICS = 'DEMOGRAPHICS';

const walkthruSections = {
	[DONATIONS]: [
		{
			title: 'Donations',
			imgUrl: 'images/donations-1.png',
			text: 'This is the first step',
		},
	],
	[TOTAL_VALUE]: [
		{
			title: 'Total Value',
			imgUrl: 'images/total-value-1.png',
			text: `
				In the Total Value section, we sum together
				all of the items you've donated in total.
			`,
		},
	],
	[DEMOGRAPHICS]: [
		{
			title: 'Demographics',
			imgUrl: 'images/demographics-1.png',
			text: `
				In this section, view the demographics of everyone
				who has contributed.
			`,
		},
	]
};

module.exports = {
	DONATIONS,
	TOTAL_VALUE,
	DEMOGRAPHICS,
	walkthruSections,
};