import { Model } from 'objection';
import User from './user';

class Video extends Model {

    videoId!: String;
    name!: String;
    

    static get tableName(){
        return 'video';
    }

    static relationMappings = {
        owner: {
          relation: Model.BelongsToOneRelation,
          modelClass: User,
          join: {
            from: 'video.videoId',
            to: 'user.id'
            }
        }
    }
}

module.exports = Video;