// Data structure that will store the friends data
var friendsArray = [
	{
		name: 'Arizona Cardinals',
		photo: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/022014/untitled-1_206.png?itok=rS-00NKD',
		scores: [
			'1',
			'5',
			'5',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Atlanta Falcons',
		photo: 'http://74.86.207.139/content1/wallpaper/2009/WP49aab011e8dbc.jpg?width=360',
		scores: [
			'2',
			'4',
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
	},
	{
		name: 'Baltimore Ravens',
		photo: 'http://planetill.com/wp-content/uploads/2009/09/ravens_logo.jpg',
		scores: [
			'4',
			'3',
			'5',
			'1',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1'
		]
	},
	{
		name: 'Buffalo Bills',
		photo: 'https://images.vexels.com/media/users/3/141819/isolated/preview/8a7228855c873ef9a3874d063588279e-buffalo-bills-american-football-by-vexels.png',
		scores: [
			'1',
			'1',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'1'
		]
	},
	{
		name: 'Carolina Panthers',
		photo: 'http://cdn.abclocal.go.com/content/wtvd/images/cms/57327_630x354.jpg',
		scores: [
			'1',
			'1',
			'5',
			'1',
			'3',
			'2',
			'5',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Chicago Bears',
		photo: 'http://cdn.bleacherreport.net/images_root/slides/photos/002/019/923/ChicagoBears_display_image.jpg?1331751433',
		scores: [
			'5',
			'4',
			'4',
			'2',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
		]
	},
	{
		name: 'Cincinnati Bengals',
		photo: 'https://www.festisite.com/static/partylogo/img/logos/bengals.png',
		scores: [
			'5',
			'2',
			'3',
			'1',
			'5',
			'1',
			'3',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Cleveland Browns',
		photo: 'https://blog.logosbynick.com/wp-content/uploads/2015/10/clevelandbrowns.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},
	{
		name: 'Dallas Cowboys',
		photo: 'https://fontmeme.com/images/Dallas-Cowboys-Logo.jpg',
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
		]
	},{
		name: 'Denver Broncos',
		photo: 'https://vignette.wikia.nocookie.net/logopedia/images/a/a3/Broncos_Alternate_logo.gif/revision/latest?cb=20131104164121',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Detriot Lions',
		photo: 'https://static.wixstatic.com/media/c01557_26703973a59e49eda194af809deb6a8d~mv2.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Green Bay Packers',
		photo: 'https://fontmeme.com/images/packers-football-logo.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Houston Texans',
		photo: 'http://houstonsportsinsider.com/sites/default/files/styles/large/public/httpwww.sports-logos-screensavers.comuserHouston_Texans4_1.jpg?itok=y_8qXJ6n',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Indianapolis Colts',
		photo: 'http://www.sportsecyclopedia.com/nfl/indy/Coltsscript.gif',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Jacksonville Jaguars',
		photo: 'https://i0.wp.com/www.assuresign.com/app/uploads/2017/06/admin-ajax-1.jpg?fit=400%2C300&ssl=1',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Kansas City Chiefs',
		photo: 'https://cdn7.bigcommerce.com/s-a4w28t94lu/images/stencil/1280x1280/products/77486/84543/62395-kansas-city-chiefs-lunch-napkins__80811.1492707556.jpg?c=2',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Los Angeles Chargers',
		photo: 'https://sc-events.s3.amazonaws.com/52186/main.gif',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Los Angeles Rams',
		photo: 'https://www.awesomesportslogos.com/prodImages/2016/LosAngelesRams.png',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Miami Dolphins',
		photo: 'http://media.miamiherald.com/static/media/projects/2015/fins-at-50/logos/img/thumb/1997.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Minnesota Vikings',
		photo: 'https://www.festisite.com/static/partylogo/img/logos/vikings.png',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'New England Patriots',
		photo: 'http://moziru.com/images/logo-clipart-new-england-patriots-2.gif',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'New Orleans Saints',
		photo: 'http://wherewhodatsshop.com/4008-large_default/new-orleans-saints-1975-circle-logo-hardboard-wooden-sign.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'New York Giants',
		photo: 'https://i.pinimg.com/236x/54/b2/cf/54b2cf1311abf117896ffcfb04c517e1--giants-football-new-york-giants.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'New York Jets',
		photo: 'https://betanews.com/wp-content/uploads/2013/03/Jets-Pin-Pro-300x300.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Oakland Raiders',
		photo: 'https://sep.yimg.com/ay/oaklandraiders/oakland-raiders-12-inch-shield-magnet-12.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Philadelphia Eagles',
		photo: 'https://vignette.wikia.nocookie.net/legostarwars/images/b/bf/Eagles.png/revision/latest?cb=20070831165944',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Pittsburgh Steelers',
		photo: 'https://i.pinimg.com/736x/b6/57/45/b657457dac196dfe1e3cb4ffdd1879b0--football-banner-steelers-football.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'San Fransisco 49ers',
		photo: 'https://static1.squarespace.com/static/558e0af0e4b01c6273e72ab4/t/561c4896e4b0faa8c8494568/1444694189234/SAN-FRANCISCO-49ERS',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Seattle Seahawks',
		photo: 'https://www.microbytecorp.com/bsf-images/nfl/Seahawks.png',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Tampa Bay Buccaneers',
		photo: 'https://images.vexels.com/media/users/3/142046/isolated/preview/c7f9ce5cc93d7f6bf233b170af8a3dae-tampa-bay-buccaneers-american-football-by-vexels.png',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Tennessee Titans',
		photo: 'https://www.irononsticker.com/images/nfl/STK-NFL-TET-A1999-02.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},{
		name: 'Washington Redskins',
		photo: 'http://www.sportsjourney.com/wp-content/uploads/Redskins-logo-flag.jpg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	}
];

module.exports = friendsArray;