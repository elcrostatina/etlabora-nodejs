const themeOptions = ['light', 'dark']

export class Settings {
    userId
    crossPlay = false
    audioSettings = 'SOUNDBAR'
    theme = 'light'
    fov = 90
    sound = 100
    language = 'en'
    resolution = '1080p'
    mapping = 'Default'
    motionBlur = false

    constructor(userId) {
        this.userId = userId
    }

    setCrossPlay(crossPlay) {
        if (typeof crossPlay !== 'boolean') {
            throw new Error('Crossplay must be a boolean value.')
        }

        this.crossPlay = crossPlay
    }
    getCrossPlay() {
        return this.crossPlay
    }

    setAudioSettings(audioSettings) {
        this.audioSettings = audioSettings
    }
    getAudioSettings() {
        return this.audioSettings
    }

    setTheme(theme) {
        if (!themeOptions.includes(theme)) {
            throw new Error('Theme must be light or dark.')
        }

        this.theme = theme
    }

    getTheme() {
        return this.theme
    }

    setFov(fov) {
        this.fov = fov
    }

    getFov() {
        return this.fov
    }

    setSound(sound) {
        this.sound = sound
    }

    getSound() {
        return this.sound
    }

    setLanguage(language) {
        this.language = language
    }

    getLanguage() {
        return this.language
    }

    setResolution(resolution) {
        this.resolution = resolution
    }

    getResolution() {
        return this.resolution
    }

    setMapping(mapping) {
        this.mapping = mapping
    }

    getMapping() {
        return this.mapping
    }

    setMotionBlur(motionBlur) {
        this.motionBlur = motionBlur
    }

    getMotionBlur() {
        return this.motionBlur
    }
}
