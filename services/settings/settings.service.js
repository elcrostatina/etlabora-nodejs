import { Settings } from '../../classes/settings.class.js'

const usersSettings = []

/**
 *
 * @param {string} userId
 * @returns {Settings}
 */
export const createUserSettings = (userId) => {
    const userSettings = new Settings(userId)

    usersSettings.push(userSettings)

    return userSettings
}

/**
 *
 * @param {number} userId
 * @returns {Settings}
 */
export const getUserSettings = userId => usersSettings.find((settings) => settings.userId === userId)



