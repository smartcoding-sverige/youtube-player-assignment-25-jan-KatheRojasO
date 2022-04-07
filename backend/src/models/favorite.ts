import { Model } from 'objection';

class Favorite extends Model {

    video_id!: String;
    user_id!: String;
    

    static get tableName(){
        return 'favorite';
    }

    static get idColumn() {
        return 'favoriteId';
      }
}

module.exports = Favorite;