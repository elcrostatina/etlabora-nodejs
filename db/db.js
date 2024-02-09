import { DataTypes, Sequelize } from 'sequelize'

export const sequelize = new Sequelize('etlabora', 'etlabora', 'R4ndomS3cure', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
});

export const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await User.sync({ force: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

