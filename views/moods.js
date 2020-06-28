var moodsMap = new Map([
	[ 'friendship', [ "I'm Only Me When I'm With You", '22', 'New Romantics' ] ],
	[
		'they-messed-up',
		[
			"Should've Said No",
			'White Horse',
			'Tell Me Why',
			"You're Not Sorry",
			'Dear John',
			'I Knew You Were Trouble.',
			'The Last Time',
			'All You Had To Do Was Stay'
		]
	],
	[ 'saying-goodbye', [ 'Breathe', 'Death By A Thousand Cuts' ] ],
	[ 'they-should-pick-me', [ 'Speak Now', 'Hey Stephen', 'You Belong With Me' ] ],
	[ 'ldr', [ 'Come Back...Be Here' ] ],
	[
		'toxic-relationship',
		[
			'Wonderland',
			'All You Had To Do Was Stay',
			'Look What You Made Me Do',
			'Bad Blood',
			'The Last Time',
			'Tell Me Why'
		]
	],
	[ 'healing', [ 'Clean', 'Daylight', 'Call It What You Want' ] ],
	[
		'how-to-fix-this-relationship',
		[
			'How You Get The Girl',
			'I Wish You Would',
			'All You Had To Do Was Stay',
			'Stay Stay Stay',
			'If This Was A Movie',
			'The Other Side Of The Door'
		]
	],
	[ 'itll-end-but-til-end', [ 'Wildest Dreams', 'Long Live', 'Treacherous', 'Tim McGraw' ] ],
	[
		'tumultuous-relationship',
		[
			'Out Of The Woods',
			'Style',
			'I Knew You Were Trouble.',
			'Picture To Burn',
			'Cold As You',
			'The Moment I Knew',
			'Blank Space'
		]
	],
	[ 'secret-relationship', [ 'I Know Places', 'Out Of The Woods', 'Dancing With Our Hands Tied' ] ],
	[
		'eye-rolling',
		[
			"This Is Why We Can't Have Nice Things",
			'You Need To Calm Down',
			'I Did Something Bad',
			'Look What You Made Me Do',
			'Bad Blood'
		]
	],
	[ 'apologies', [ 'Afterglow', 'Back To December' ] ],
	[
		'vulnerability',
		[ 'Cornelia Street', 'Death By A Thousand Cuts', 'Haunted', 'Clean', 'All Too Well', 'White Horse' ]
	],
	[ 'staring-over', [ 'Begin Again', 'Welcome To New York', 'Daylight' ] ],
	[
		'narrative-arcs',
		[
			"Mary's Song (Oh My My My)",
			'Love Story',
			'The Best Day',
			"It's Nice To Have A Friend",
			'All Too Well',
			'The Lucky One',
			'Starlight',
			'Mine',
			'Fifteen'
		]
	],
	[
		'happy-relationship',
		[
			'Ours',
			'Stay Stay Stay',
			'You Are In Love',
			"It's Nice To Have A Friend",
			"New Year's Day",
			'Call It What You Want',
			'This Love',
			'Mine'
		]
	],
	[
		'infatuation',
		[
			'I Think He Knows',
			'Paper Rings',
			"Don't Blame Me",
			'End Game',
			'Treacherous',
			'Come Back...Be Here',
			'Sparks Fly',
			'Enchanted',
			'Fearless',
			'Hey Stephen',
			'Jump Then Fall',
			'Teardrops On My Guitar'
		]
	],
	[
		'burning-down-the-patriarchy',
		[ 'The Man', 'I Did Something Bad', 'Look What You Made Me Do', 'Bad Blood', 'Mean', 'You Need To Calm Down' ]
	],
	[ 'feeling-good', [ 'ME!', 'Shake It Off', 'Clean', 'New Romantics' ] ],
	[
		'mature-romance',
		[ 'Wildest Dreams', 'Dress', 'So It Goes...', 'Cruel Summer', 'False God', "New Year's Day", 'This Love' ]
	],
	[
		'the-start-of-something-good',
		[ 'Begin Again', 'Everything Has Changed', '...Ready For It?', 'Daylight', 'Fearless', 'Delicate' ]
	],
	[
		'growing-up',
		[
			'The Outside',
			'A Place In This World',
			'Fifteen',
			'Never Grow Up',
			'Innocent',
			'The Archer',
			'22',
			'A Place In This World',
			'Tied Together With A Smile'
		]
	],
	[
		'over-the-breakup',
		[ 'We Are Never Ever Getting Back Together', 'Clean', 'All Too Well', 'I Forgot That You Existed' ]
	],
	[ 'friend-breakups', [ 'Death By A Thousand Cuts', 'Breathe' ] ],
	[
		'nostagia-of-past-love',
		[
			'Tim McGraw',
			'The Way I Loved You',
			'Red',
			'All Too Well',
			'Death By A Thousand Cuts',
			'Holy Ground',
			'Back To December'
		]
	],
	[ 'family', [ 'The Best Day', 'Never Grow Up', "Soon You'll Get Better" ] ],
	[
		'breakups',
		[
			'Last Kiss',
			'If This Was A Movie',
			'Haunted',
			'I Knew You Were Trouble.',
			'Red',
			'All You Had To Do Was Stay',
			'Death By A Thousand Cuts',
			"You're Not Sorry",
			'Forever & Always',
			'White Horse',
			'Dear John',
			'They Story Of Us',
			'The Moment I Knew',
			'All You Had To Do Was Stay',
			'Sad Beautiful Tragic',
			'Dear John',
			'The Story Of Us',
			"Should've Said No"
		]
	],
	[ 'songs-for-crying', [ 'All Too Well', 'Last Kiss', 'Back To December', 'Dear John', 'Sad Beautiful Tragic' ] ],
	[ 'they-like-someone-else', [ 'Teardrops On My Guitar', 'You Belong With Me', 'Speak Now', 'Invisible' ] ],
	[
		'vengeance',
		[
			'Picture To Burn',
			'Better Than Revenge',
			'Look What You Made Me Do',
			'I Did Something Bad',
			'Mean',
			'Bad Blood'
		]
	],
	[ 'for-dancing', [ 'Shake It Off', 'New Romantics', "This Is Why We Can't Have Nice Things", 'London Boy' ] ],
	[
		'crushing-hard',
		[
			'Hey Stephen',
			'Enchanted',
			'Gorgeous',
			'Paper Rings',
			'Sparks Fly',
			'Stay Beautiful',
			'Everything Has Changed',
			'Jump Them Fall',
			'Teardrops On My Guitar'
		]
	],
	[
		'relationship-problems',
		[ 'The Last Time', 'Out Of The Woods', 'Tell Me Why', "You're Not Sorry", 'The Other Side Of The Door' ]
	],
	[
		'slow-bops',
		[
			'Afterglow',
			'This Love',
			'Last Kiss',
			'Enchanted',
			'Daylight',
			'Untouchable',
			'All Too Well',
			"New Year's Day",
			'You Are In Love',
			'I Almost Do',
			'The Archer',
			'Lover',
			'Come In With The Rain',
			'Begin Again',
			'Sad Beautiful Tragic',
			'Treacherous',
			'Innocent',
			'Haunted',
			'Dear John',
			'Back To December',
			'White Horse',
			"You're Not Sorry",
			'Cold As You'
		]
	],
	[
		'heartbroken',
		[
			"Should've Said No",
			'Cold As You',
			'A Perfectly Good Heart',
			'Forever & Always',
			'Last Kiss',
			'White Horse',
			'Back To December',
			'All You Had To Do Was Stay',
			'Dear John',
			'Breathe'
		]
	],
	[
		'angry-energy',
		[
			'I Did Something Bad',
			"Don't Blame Me",
			'...Ready For It?',
			'End Game',
			'Look What You Made Me Do',
			"This is Why We Can't Have Nice Things",
			'I Forgot That You Existed',
			'You Need To Calm Down'
		]
	],
	[
		'to-sing-with-friends',
		[
			'22',
			'New Romantics',
			'Cruel Summer',
			'The Man',
			'London Boy',
			'ME!',
			'Delicate',
			"This Is Why We Can't Have Nice Things",
			'Blank Space',
			'Style',
			'I Know Places',
			'Bad Blood',
			'I Knew You Were Trouble.',
			'We Are Never Ever Getting Back Together',
			'Sparks Fly',
			'Mine',
			'You Belong With Me',
			'Hey Stephen',
			'Love Story',
			"Should've Said No",
			'Teardrops On My Guitar',
			'Picture To Burn',
			'Our Song'
		]
	],
	[ 'unfaithful-partner', [ "Should've Said No", 'Better Than Revenge' ] ],
	[
		'pop-bops',
		[
			'Cruel Summer',
			'Miss Americana & The Heartbreak Prince',
			'I Think He Knows',
			'London Boy',
			'ME!',
			'Delicate',
			'I Did Something Bad',
			'Blank Space',
			'Wildest Dreams',
			'Style',
			'I Know Places',
			'Out Of The Woods',
			'Red',
			'22',
			'New Romantics'
		]
	],
	[ 'rebound', [ 'Getaway Car' ] ],
	[
		'being-in-love',
		[
			'I Think He Knows',
			'Crazier',
			'Lover',
			'London Boy',
			'Delicate',
			'King Of My Heart',
			'Call It What You Want',
			'Our Song',
			"I'm Only Me When I'm With You",
			'Jump Then Fall',
			'Fearless',
			'Sparks Fly',
			'Stay Stay Stay',
			'You Are In Love',
			'Paper Rings',
			'Today Was A Fairytale',
			'Mine',
			'This Love',
			'Cornerlia Street',
			'False God',
			'Daylight',
			"New Year's Day",
			"Don't Blame Me",
			'Ours'
		]
	]
]);

module.exports.moodsMap = moodsMap;
