import {component$, Resource, useResource$} from '@builder.io/qwik'
import type {RequestHandler} from '@builder.io/qwik-city'
import {useEndpoint} from '@builder.io/qwik-city'
import {Link} from '@builder.io/qwik-city'
import {useLocation} from '@builder.io/qwik-city'
import type {DocumentHead} from '@builder.io/qwik-city'
import type {Page, Show} from '../../components/dataFech'
import DataFetch from '../../components/dataFech'

export const onGet: RequestHandler<any> = async ({params}) => {
	return DataFetch(`page=${params.skuId}`)
}

export default component$(() => {
	const location = useLocation()
	const page = useEndpoint<Page>()
	const slug = location.params.skuId

	const shows = useResource$<Show[]>(() => {
		return DataFetch(`category=${slug}`)
	})

	return (
		<div>
			<Resource
				value={page}
				onPending={() => <div>Loading...</div>}
				onRejected={() => <div>Error</div>}
				onResolved={data => (
					<>
						<h1>{data.title}</h1>
						<div dangerouslySetInnerHTML={data?.content} />
					</>
				)}
			/>

			<Resource
				value={shows}
				onPending={() => <div>Loading...</div>}
				onRejected={reason => <div>Error: {reason}</div>}
				onResolved={data => (
					<ul class="list">
						{data.map(e => {
							return (
								<li class="content">
									<div class="linkText">
										<div class="linkTitle">
											<Link href={`/show/${e.slug}/`}>{e.title}</Link>
										</div>

										<div class="linkDesc">{e.description}</div>
									</div>

									<ul class="social">
										{e.links.map(link => {
											return (
												<li>
													<a href={link.url}>
														<img src={`/icons/${link.platformIcon}.svg`} height="30" />
													</a>
												</li>
											)
										})}
									</ul>
								</li>
							)
						})}
					</ul>
				)}
			/>
		</div>
	)
})

export const head: DocumentHead<Page> = ({data}) => {
	return {
		title: data.title,
		description: data.description
	}
}
