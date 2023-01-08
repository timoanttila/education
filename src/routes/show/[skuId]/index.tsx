import {component$, Resource} from '@builder.io/qwik'
import type {RequestHandler} from '@builder.io/qwik-city'
import {useEndpoint} from '@builder.io/qwik-city'
import type {DocumentHead} from '@builder.io/qwik-city'
import type {Page} from '../../../components/dataFech'
import DataFetch from '../../../components/dataFech'

export const onGet: RequestHandler<any> = async ({params}) => {
	return DataFetch(`show=${params.skuId}`)
}

export default component$(() => {
	const page = useEndpoint<Page>()

	return (
		<Resource
			value={page}
			onPending={() => <div>Loading...</div>}
			onRejected={() => <div>Error</div>}
			onResolved={data => (
				<>
					<div id="show">
						<div>
							<h1>{data.title}</h1>
							<div
								dangerouslySetInnerHTML={data.content ?? data.description}
								id="showContent"
								class="content"
							/>

							<ul class="social">
								{data.links.map(link => {
									return (
										<li>
											<a href={link.url} title={`${link.platformName}: ${data.title}`}>
												<img src={`/icons/${link.platformIcon}.svg`} height="30" />
											</a>
										</li>
									)
								})}
							</ul>
						</div>

						<div>
							<img id="showImage" src={`/images/${data.slug}.webp`} alt={data.title} />
						</div>
					</div>

					{data.youtube && (
						<section>
							<h2>Latest video on YouTube</h2>
							<div class="video">
								<iframe
									src={`https://www.youtube-nocookie.com/embed/${data.youtube}`}
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
						</section>
					)}
				</>
			)}
		/>
	)
})

export const head: DocumentHead<Page> = ({data}) => {
	return {
		title: `${data.title} | Information Highway`,
		description: data.description
	}
}
