export {}
const { Model } = require('objection');

class Id extends Model {
    static get tableName(){
        return 'id';
    }
}

module.exports = Id;