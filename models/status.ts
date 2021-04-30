import db from '../db/connection';
import{ DataTypes} from 'sequelize';

const Status = db.define('Status',{

   
    name: {
        type: DataTypes.STRING
    }
    


});

export default Status;