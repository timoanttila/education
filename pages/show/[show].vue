<script setup>
const route = useRoute()
const slug = route.params.show

const {data, pending} = useAsyncData(`page-${slug}`, () => useDataFetch(`show=${slug}`))
</script>

<template>
	<div id="show">
		<Loading v-if="pending" />
		<template v-else>
			<div id="showNavLinks" class="grid mx-auto">
				<div>
					<router-link
						v-if="data.prev"
						:to="`/show/${data.prev.slug}`"
						class="grid"
						rel="prev"
						:title="data.prev.title"
					>
						<ButtonSquare icon="material-symbols:arrow-left-rounded" title="data.prev.title" />
					</router-link>
				</div>

				<router-link to="/" rel="home" class="grid">
					<ButtonSquare icon="ic:baseline-list-alt" title="Home" />
				</router-link>

				<div>
					<router-link
						v-if="data.next"
						:to="`/show/${data.next.slug}`"
						class="grid"
						rel="next"
						:title="data.next.title"
					>
						<ButtonSquare icon="material-symbols:arrow-right-rounded" :title="data.next.title" />
					</router-link>
				</div>
			</div>

			<article itemScope itemType="http://schema.org/Article">
				<h1>{{ data.title }}</h1>
				<div class="lastUpdated">
					Last update:
					<time itemProp="dateModified" :dateTime="data.updated">
						{{ data.showDate }}
					</time>
				</div>

				<div v-html="data.content ?? data.description" id="showContent" class="content" />

				<ul v-if="Array.isArray(data.links)" class="social">
					<li v-for="link in data.links">
						<a :href="link.url" :title="`${link.platformName}: ${data.title}`">
							<img :src="`/icons/${link.platformIcon}.svg`" height="30" />
						</a>
					</li>
				</ul>

				<section v-if="data.videoId" id="youtube">
					<h2>Latest video on YouTube: {{ data.videoName }}</h2>
					<div class="video">
						<iframe
							:src="`https://www.youtube-nocookie.com/embed/${data.videoId}`"
							:title="data.videoName"
						></iframe>
					</div>
				</section>
			</article>
		</template>
	</div>
</template>
