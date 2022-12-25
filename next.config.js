const { withPlaiceholder } = require('@plaiceholder/next')

module.exports = withPlaiceholder({
    async redirects() {
        return [
            {
                source: '/meet',
                destination: process.env.NEXT_PUBLIC_MEET_URL,
                permanent: true,
            },
        ]
    }
})
