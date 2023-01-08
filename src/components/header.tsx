import {component$} from '@builder.io/qwik'
import {Link} from '@builder.io/qwik-city'

export default component$(() => {
	const title = 'The highway of knowledge'

	return (
		<header>
			<div class="logo">
				<a href="/" rel="home">
					{title}
				</a>
			</div>

			<nav>
				<ul>
					<li>
						<Link href="/business/">Business</Link>
					</li>
					<li>
						<Link href="/business/">Life Lessons</Link>
					</li>
					<li>
						<Link href="/business/">Business</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
})
