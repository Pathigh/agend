import { Sequelize } from 'sequelize';

const db = new Sequelize('schedule','root', 'Pato2021.',{
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,


});
export default db;