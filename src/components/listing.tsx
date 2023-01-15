import {component$, Resource, useResource$} from '@builder.io/qwik'
import {Link} from '@builder.io/qwik-city'
import {useLocation} from '@builder.io/qwik-city'
import type {Show} from './dataFech'
import DataFetch from './dataFech'
import {ArrowRight} from './icons'

export default component$(() => {
	const location = useLocation()
	const slug = location.params.skuId ?? 'business'

	const shows = useResource$<Show[]>(() => {
		return DataFetch(`category=${slug}`)
	})

	return (
		<Resource
			value={shows}
			onPending={() => <div>Loading...</div>}
			onRejected={reason => <div>Error: {reason}</div>}
			onResolved={data => (
				<ul class="content grid list">
					{data.map(e => {
						return (
							<li class="listItem">
								<div class="linkText">
									<div class="linkTitle grid">
										<h2 class="grid">
											<span class="self-center">{e.title}</span>
										</h2>
										<Link class="grid" href={`/show/${e.slug}/`}>
											<ArrowRight />
										</Link>
									</div>
									<div class="lastUpdated">
										<time itemProp="dateModified" dateTime={e.updated}>
											{e.showDate}
										</time>
									</div>

									<div class="linkDesc">{e.description}</div>
								</div>

								<ul class="social">
									{e.links.map(link => {
										return (
											<li>
												<a href={link.url} title={`${link.platformName}: ${e.title}`}>
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
	)
})
