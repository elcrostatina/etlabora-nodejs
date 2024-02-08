import {createUserSettings, getUserSettings} from "../services/settings/settings.service.js";

export const createUserSettingsController = (req, res) => {
    const userSettings = createUserSettings(req.body.userId)

    res.send({
        message: 'User settings created',
        userSettings
    })
}

export const getUserSettingsController = (req, res) => {
    const userSettings = getUserSettings(Number(req.params.userId))

    res.send({ userSettings })
}

