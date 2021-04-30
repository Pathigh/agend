import db from '../db/connection';
import{ DataTypes} from 'sequelize';

const Payment = db.define('Payment',{

   
    name: {
        type: DataTypes.STRING
    }
    


});

export default Payment;