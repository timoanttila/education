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

export interface Page {
	categoryName: string
	content?: string
	description: string
	id: number
	links: ShowLink[]
	slug: string
	title: string
	youtube?: string
}

export default async function dataFetch(query: string): Promise<any> {
	return await fetch(`https://api.timoanttila.com/education.php?${query}`).then(res => res.json())
}
