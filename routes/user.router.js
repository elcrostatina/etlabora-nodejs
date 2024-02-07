import express from 'express'
const router = express.Router()
import { createUser } from "../controller/user.controller.js";


router.get('/', (req, res) => {
    res.send('Im here :D')
})

router.post('/add-user', (req, res) => {
    const user = req.body.user

    createUser(user)

    res.send({ message: 'User Created' })
})

export { router }
