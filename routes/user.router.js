import express from 'express'
const router = express.Router()
import {
    changeUserFirstNameController,
    createUserController, deleteUserController,
    getUserByIdController,
    getUsersByFirstNameController
} from "../controller/user.controller.js";

/**
 * Il router è responsabile di gestire le richieste HTTP controllando  il path e il metodo http e di chiamare il controller corretto.
 */
router.post('/add-user', createUserController)
router.get('/:userId', getUserByIdController)
router.get('/firstname/:firstName', getUsersByFirstNameController)
router.patch('/:userId', changeUserFirstNameController)
router.delete('/:userId', deleteUserController)

export { router }
