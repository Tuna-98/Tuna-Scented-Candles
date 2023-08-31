export default defineEventHandler(async (event) => {
    // handle query params
    const { name } = useQuery(event)

    // handle post data
    const { age } = await useBody(event)

    // api call with private key
    const { data } = await $fetch('')

    return {
        message: `Hello, ${name}! Your are ${age} years old.`
    }
})