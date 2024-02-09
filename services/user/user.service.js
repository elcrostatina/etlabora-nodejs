import { User } from "../../db/db.js";

/**
 * Il service è responsabile di gestire la logica di business e di interagire con il database attraverso l'orm.
 */
export const createUser = async (firstName, lastName) => User.create({ firstName, lastName })

export const getUserById = async (id) => User.findOne({ where: { id } })

export const getUsersByFirstName = async (firstName) => User.findAll({ where: { firstName } })

export const changeUserFirstName = async (id, newFirstName) => {
    await User.update({ firstName: newFirstName }, {
        where: { id }
    });

    // Questo è un altro modo per fare l'update di un record nel database
    // const user = await User.findOne({ where: { id } });
    // user.firstName = newFirstName;
    // await user.save();
}

export const deleteUser = async (id) => User.destroy({ where: { id } });
