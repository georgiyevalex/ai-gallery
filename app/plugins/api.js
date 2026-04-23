export default defineNuxtPlugin(({ $config }) => {
  const api = $fetch.create({
    baseURL: import.meta.env.BASE_API_URL,
  })

  return {
    provide: {
      api: api
    }
  }
})