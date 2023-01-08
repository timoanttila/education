import {component$} from '@builder.io/qwik'
import {Link} from '@builder.io/qwik-city'

export default component$(() => {
	const title = 'Information Highway'

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
						<Link href="/">Business</Link>
					</li>
					<li>
						<Link href="/life/">Life Lessons</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
})
