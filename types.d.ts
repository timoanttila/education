interface AdList extends Basic {
	image: ImageMeta
	link: string
}

interface Basic {
	description?: string
	id: number
	slug: string
	title: string
}

interface CartData {
	quantity: number
}

interface GameData {
	awayTeam: Team
	datetime: string
	future: 1 | 0
	home: 1 | 0
	homeTeam: Team
	id: number
	key?: number
	location: string | undefined
	percentage?: number
	season: number
	seasonName: string | number
	serie?: {
		categoryId: string | number
		groupId: number
		groupName?: string
		logo?: string
		name: string
	}
	stream: string | undefined
}

interface ImageMeta {
	alt: string
	ext: string
	height: number
	url: string
	webp: string
	width: number
	thumb?: {
		ext: string
		height: number
		url: string
		webp: string
		width: number
	}
}

interface Option {
	label: string
	value: string | number
}

interface List {
	content: string
	id: number
}

interface PageList extends Basic {
	datetime: string
	image: ImageMeta
	link: string
	template: number
}

interface PageData extends Basic {
	children?: PageList[]
	content?: string
	datetime: string
	hero?: string
	heroMobile?: string
	imagePosition?: number
	images?: ImageMeta[]
	imageSocial?: string
	modified?: string
	parents?: PageList[]
	template: number
	templateName: string
}

interface Partner {
	id: number
	image: ImageMeta
	link: string
	title: string
}

interface PartnerList extends Basic {
	items: Partner[]
}

interface SiteData extends Basic {
	colors: {
		button_bg: string
		button: string
		header: string
		link: string
		menu_link1: string
		menu_link2: string
		primary: string
		secondary: string
		submenu: string
	}
	favicon: {
		height: number
		url: string
		width: number
	}
	footer?: List[]
	imageSocial: ImageMeta
	imageSub: string
	lang: string
	logo: ImageMeta
	multilingual: number
	newsletter?: string
	paymentBanner?: ImageMeta
	rounded: {
		inputs: number
		submenu: number
	}
	social?: {
		facebook?: string
		instagram?: string
		tiktok?: string
		twitter?: string
		youtube?: string
	}
	tickets?: string
	useGames: number
	useStats: number
	useVideos: number
}

interface StatsTeam {
	active: boolean
	id?: number
	info?: string
	label: string
	logo?: string
	name?: string
	value: number | string
}

interface StatsSerie {
	categoryId: number | string
	categoryName: string
	groupId: number
	groupName: string
	stats: Array<StatsTeam[]>
}

interface StatsTeams {
	season: Option
	seasons: Option[]
	data: StatsSerie[]
}

type Team = {
	abbreviation: string
	goals: number
	id: number
	logo: string
	name: string
	percentage?: number
}
