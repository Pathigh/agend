
import{ DataTypes} from 'sequelize';
import db from '../db/connection';

const User = db.define('User',{

     username: {
        type: DataTypes.STRING
    }, 
    name: {
        type: DataTypes.STRING
    },
     lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
        
    },
    is_active: {
        type: DataTypes.TINYINT,
        defaultValue:false
        
    },
    is_admin: {
        type: DataTypes.TINYINT,
        defaultValue:false
    },
    created_at: {
        type: DataTypes.DATE
    }
 
    

});

export default User;