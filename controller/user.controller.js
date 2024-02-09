import {
    changeUserFirstName,
    createUser,
    deleteUser,
    getUserById,
    getUsersByFirstName
} from '../services/user/user.service.js'

/**
 * Il controller è responsabile di gestire le richieste HTTP e di restituire una risposta.
 */
export const createUserController = async (req, res) => {
    const user = await createUser(req.body.firstName, req.body.lastName)

    res.send({ user })
}

export const getUserByIdController = async (req, res) => {
    const user = await getUserById(Number(req.params.userId))

    res.send({ user })
}

export const getUsersByFirstNameController = async (req, res) =>
    res.send({ users: await getUsersByFirstName(req.params.firstName) })

export const changeUserFirstNameController = async (req, res) => {
    await changeUserFirstName(Number(req.params.userId), req.body.newFirstName)

    res.send({ message: 'First name changed' })
}

export const deleteUserController = async (req, res) => {
    await deleteUser(Number(req.params.userId))

    res.send({ message: 'User deleted' })
}
