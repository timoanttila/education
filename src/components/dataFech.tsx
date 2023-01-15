type ShowLink = {
	langaugeId: number
	langaugeName: string
	platformIcon: string
	platformId: number
	platformName: string
	typeId: number
	typeName: string
	url: string
}

export interface Show {
	categoryId: number
	categoryName: string
	description: string
	id: number
	links: ShowLink[]
	slug: string
	title: string
}

interface NavLink {
	id: number
	slug: string
	title: string
}

export interface Page {
	categoryName: string
	content?: string
	created: string
	description: string
	hasImage?: boolean
	id: number
	links: ShowLink[]
	next?: NavLink
	prev?: NavLink
	slug: string
	title: string
	updated: string
	videoId?: string
	videoName?: string
}

export default async function dataFetch(query: string): Promise<any> {
	return await fetch(`https://api.timoanttila.com/education.php?${query}`).then(res => res.json())
}
