<script setup lang="ts">
import {Icon} from '@iconify/vue'
defineProps({
	icon: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	}
})
</script>

<template>
	<button
		:class="`align-middle bg-transparent border-0 h-10 inline-block p-0 w-10`"
		:aria-label="title"
	>
		<Icon :class="`${icon} self-center text-4xl text-white`" :icon="`${icon}`" />
	</button>
</template>
