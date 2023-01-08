import {component$, Resource} from '@builder.io/qwik'
import type {RequestHandler} from '@builder.io/qwik-city'
import {useEndpoint} from '@builder.io/qwik-city'
import type {DocumentHead} from '@builder.io/qwik-city'
import type {Page} from '../components/dataFech'
import DataFetch from '../components/dataFech'
import Listing from '../components/listing'

export const onGet: RequestHandler<any> = async () => {
	return DataFetch('page=business')
}

export default component$(() => {
	const page = useEndpoint<Page>()
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

export const head: DocumentHead<Page> = ({data}) => {
	return {
		title: data.title,
		description: data.description
	}
}
