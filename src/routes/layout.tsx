import {component$, Slot} from '@builder.io/qwik'

export default component$(() => {
	return (
		<div id="page">
			<main class="container">
				<Slot />
			</main>
			<footer>
				<div class="container">
					Creator{' '}
					<a href="https://timoanttila.com/" target="_blank" rel="author">
						Timo Anttila
					</a>
					, powered by{' '}
					<a href="https://qwik.builder.io/" rel="noopener nofollow" target="_blank">
						Qwik
					</a>
				</div>
			</footer>
		</div>
	)
})
