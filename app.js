import express from 'express'
const app = express()
const port = 3000

import { router as userRouter } from './routes/user.router.js'
import { router as settingsRouter } from './routes/settings.router.js'

app.use(express.json())

app.use('/user', userRouter)
app.use('/settings', settingsRouter)

app.listen(port, () => {
    console.log(`Server Started on port: ${port}!`)
})
