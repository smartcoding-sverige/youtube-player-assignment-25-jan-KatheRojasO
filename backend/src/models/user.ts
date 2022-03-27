import { Model } from 'objection';

class User extends Model {

    user!: String;
    password!: String;
    

    static get tableName(){
        return 'user';
    }
}

module.exports = User;
export default User;