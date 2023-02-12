<script setup>
const {data: page, pending: pendingPage} = useAsyncData('page-business', () =>
	useDataFetch('page=business')
)
const {data: list, pending: pendingList} = useAsyncData(
	'category-business',
	() => useDataFetch('category=business'),
	{
		server: false,
		lazy: true
	}
)

useHead({
	title: page.title,
	meta: [
		{
			hid: `page-${page.id}`,
			name: 'description',
			property: 'og:description',
			content: page.description
		},
		{
			property: 'og:title',
			name: 'twitter:title',
			content: page.title
		},
		{
			content: `/image/${page.slug}.webp`,
			name: 'twitter:image',
			property: 'og:image'
		}
	]
})
</script>

<template>
	<Loading v-if="pendingPage" />
	<div v-else>
		<h1>{{ page.title }}</h1>
		<div v-html="page.content" id="categoryList" class="content" />

		<Loading v-if="pendingList" />
		<ul v-else id="categoryList" class="content grid list">
			<li v-for="e in list" :key="e.id" class="listItem">
				<div class="linkText">
					<div class="linkTitle grid">
						<h2 class="grid">
							<span class="self-center">{{ e.title }}</span>
						</h2>
						<router-link class="grid" :to="`/show/${e.slug}/`">
							<ButtonSquare icon="material-symbols:arrow-right-rounded" title="Read more" />
						</router-link>
					</div>
					<div class="lastUpdated">
						<time itemProp="dateModified" :dateTime="e.updated">{{ e.showDate }}</time>
					</div>

					<div class="linkDesc">{{ e.description }}</div>
				</div>

				<ul class="social">
					<li v-for="link in e.links">
						<a :href="link.url" :title="`${link.platformName}: ${e.title}`">
							<img :src="`/icons/${link.platformIcon}.svg`" height="30" />
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
