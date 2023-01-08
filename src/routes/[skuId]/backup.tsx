import {component$, useStore, Resource, useResource$} from '@builder.io/qwik'
import type {DocumentHead} from '@builder.io/qwik-city'

export default component$(() => {
	const github = useStore({
		org: 'BuilderIO'
	})

	// Use useResource$() to set up how the data is fetched from the server.
	// See the example for Fetching Data in the text on the left.
	// @ts-ignore: Unused declaration
	const reposResource = useResource$<any>(({track, cleanup}) => {
		// We need a way to re-run fetching data whenever the `github.org` changes.
		// Use `track` to trigger re-running of the this data fetching function.
		track(() => github.org)

		// A good practice is to use `AbortController` to abort the fetching of data if
		// new request comes in. We create a new `AbortController` and register a `cleanup`
		// function which is called when this function re-runs.
		const controller = new AbortController()
		cleanup(() => controller.abort())

		// Fetch the data and return the promises.
		return getRepositories()
	})

	console.log('Render')
	return (
		<div>
			<Resource
				value={reposResource}
				onPending={() => <div>Loading...</div>}
				onRejected={reason => <div>Error: {reason}</div>}
				onResolved={data => (
					<div>
						{data.map((e, i) => {
							console.log('Entered')
							// Return the element. Also pass key
							return (
								<li>
									<div>{e.title}</div>
									<div>{e.description}</div>
								</li>
							)
						})}
					</div>
				)}
			/>
			<span>
				GitHub username:
				<input
					value={github.org}
					onInput$={ev => (github.org = (ev.target as HTMLInputElement).value)}
				/>
			</span>
			<div>
				{/* Use <Resource> to display the data from the useResource$() function. */}
				{/* To help, here's a callback function to display the data on resolved. */}
				{/* (repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={`https://github.com/${github.org}/${repo}`}>{repo}</a>
                </li>
              ))}
            </ul>
          ) */}
			</div>
		</div>
	)
})

export async function getRepositories(): Promise<string[]> {
	console.log('FETCH', `https://api.timoanttila.com/`)
	const resp = await fetch('https://api.timoanttila.com/education.php?categoryId=1&typeId=2')
	console.log('FETCH resolved')
	const json = await resp.json()
	return Array.isArray(json) ? json : Promise.reject(json)
}

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description'
		}
	]
}
