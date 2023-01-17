import {component$, Resource} from '@builder.io/qwik'
import {useEndpoint} from '@builder.io/qwik-city'
import type {StaticGenerateHandler} from '@builder.io/qwik-city'
import DataFetch from '../components/dataFech'
import Listing from '../components/listing'
import type {DocumentHead} from '@builder.io/qwik-city'
import type {Show} from '../components/dataFech'

export const onStaticGenerate: StaticGenerateHandler = async () => {
	return DataFetch('page=business')
}

export default component$(() => {
	const page = useEndpoint<Show>()
	return (
		<>
			<Resource
				value={page}
				onPending={() => <div>Loading...</div>}
				onRejected={() => <div>Error</div>}
				onResolved={data => (
					<>
						<h1>{data.title}</h1>
						<div dangerouslySetInnerHTML={data.content} id="categoryList" class="content" />
					</>
				)}
			/>
			<Listing />
		</>
	)
})

export const head: DocumentHead<Show> = ({data}) => {
	return {
		title: `${data.title} | Education Highway`,
		meta: [
			{
				name: 'description',
				property: 'og:description',
				content: data.description
			},
			{
				property: 'og:title',
				name: 'twitter:title',
				content: data.title
			},
			{
				content: `/image/${data.slug}.webp`,
				name: 'twitter:image',
				property: 'og:image'
			}
		]
	}
}
