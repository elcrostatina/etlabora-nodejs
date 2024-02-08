import express from 'express'
import {createUserSettingsController, getUserSettingsController} from "../controller/settings.controller.js";
const router = express.Router()

router.post('/create', createUserSettingsController)
router.get('/:userId', getUserSettingsController)

export { router }
