import {component$, Resource, useResource$} from '@builder.io/qwik'
import {useLocation} from '@builder.io/qwik-city'
import type {DocumentHead} from '@builder.io/qwik-city'
import type {Show} from '../../../components/dataFech'
import DataFetch from '../../../components/dataFech'

export default component$(() => {
	const location = useLocation()
	const shows = useResource$<Show>(() => {
		return DataFetch(`show=${location.params.skuId}`)
	})

	return (
		<div>
			<Resource
				value={shows}
				onPending={() => <div>Loading...</div>}
				onRejected={reason => <div>Error: {reason}</div>}
				onResolved={data => (
					<ul class="list">
						{data.map((e, i) => {
							console.log('Entered')
							// Return the element. Also pass key
							return (
								<li>
									<div>
										<a href={e.url}>{e.title}</a>
									</div>
									<div>{e.description}</div>
								</li>
							)
						})}
					</ul>
				)}
			/>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description'
		}
	]
}
