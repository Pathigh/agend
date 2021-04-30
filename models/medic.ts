import db from '../db/connection';
import{ DataTypes} from 'sequelize';

const Medic = db.define('Medic',{

    no: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    day_of_birth: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    is_active: {
        type: DataTypes.TINYINT
    },
    created_at: {
        type: DataTypes.DATE
    },
    category_id: {
        type: DataTypes.INTEGER
    },


});

export default Medic;