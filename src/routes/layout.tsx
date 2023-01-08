import {component$, Slot} from '@builder.io/qwik'
import Header from '../components/header'

export default component$(() => {
	return (
		<>
			<Header />
			<main class="container">
				<Slot />
			</main>
			<footer>
				<a href="https://timoanttila.com/" target="_blank">
					Timo Anttila
				</a>
			</footer>
		</>
	)
})
