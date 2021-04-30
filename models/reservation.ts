import db from '../db/connection';
import{ DataTypes} from 'sequelize';

const Reservation = db.define('Reservation',{

    title: {
        type: DataTypes.STRING
    },
    note: {
        type: DataTypes.TEXT
    },
    message: {
        type: DataTypes.TEXT
    },
    date_at: {
        type: DataTypes.STRING
    },
    time_at: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE
    },
    pacient_id: {
        type: DataTypes.INTEGER
    },
    symtoms: {
        type: DataTypes.TEXT
    },
    sick: {
        type: DataTypes.TEXT
    },
    medicaments: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    medic_id: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.DOUBLE
    },
    is_web: {
        type: DataTypes.TINYINT
    }
    

});

export default Reservation;