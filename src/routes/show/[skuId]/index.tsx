import {component$, Resource} from '@builder.io/qwik'
import {Link} from '@builder.io/qwik-city'
import {useEndpoint} from '@builder.io/qwik-city'
import type {DocumentHead} from '@builder.io/qwik-city'
import type {RequestHandler} from '@builder.io/qwik-city'
import {ArrowLeft, ArrowRight, Home} from '../../../components/icons'
import DataFetch from '../../../components/dataFech'
import type {Show} from '../../../components/dataFech'

export const onGet: RequestHandler<any> = async ({params}) => {
	return DataFetch(`show=${params.skuId}`)
}

export default component$(() => {
	const page = useEndpoint<Show>()

	return (
		<div id="show">
			<Resource
				value={page}
				onPending={() => <div>Loading...</div>}
				onRejected={() => <div>Error</div>}
				onResolved={data => (
					<>
						<div id="showNavLinks" class="grid mx-auto">
							<div>
								{data.prev && (
									<Link
										href={`/show/${data.prev.slug}`}
										class="grid"
										rel="prev"
										title={data.prev.title}
									>
										<ArrowLeft />
									</Link>
								)}
							</div>

							<Link href="/" rel="home" class="grid">
								<Home />
							</Link>

							<div>
								{data.next && (
									<Link
										href={`/show/${data.next.slug}`}
										class="grid"
										rel="next"
										title={data.next.title}
									>
										<ArrowRight />
									</Link>
								)}
							</div>
						</div>

						<article itemScope itemType="http://schema.org/Article">
							<h1>{data.title}</h1>
							<div class="lastUpdated">
								Last update:{' '}
								<time itemProp="dateModified" dateTime={data.updated}>
									{data.showDate}
								</time>
							</div>
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

							{data.videoId && (
								<section id="youtube">
									<h2>Latest video on YouTube: {data.videoName}</h2>
									<div class="video">
										<iframe
											src={`https://www.youtube-nocookie.com/embed/${data.videoId}`}
											title={data.videoName}
										></iframe>
									</div>
								</section>
							)}
						</article>
					</>
				)}
			/>
		</div>
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
				content: data.hasImage ? `/image/${data.slug}.webp` : '/image/default.webp',
				name: 'twitter:image',
				property: 'og:image'
			},
			{
				content: data.created,
				name: 'pubdate',
				property: 'og:pubdate'
			},
			{
				content: data.created,
				property: 'article:published_time'
			},
			{
				name: 'revised',
				property: 'article:modified_time',
				content: data.updated
			}
		]
	}
}
