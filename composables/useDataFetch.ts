export default async function (query: string, options = {}) {
	return await $fetch(`https://api.timoanttila.com/education.php?${query}`, options)
}
