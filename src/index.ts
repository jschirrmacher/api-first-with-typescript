import Server from './Server'

const port = process.env.PORT || 8080
Server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
