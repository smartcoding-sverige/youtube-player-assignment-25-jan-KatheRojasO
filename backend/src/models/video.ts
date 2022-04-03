import { Model } from 'objection';
import User from './user';

class Video extends Model {

    id!: number;
    videoId!: String;
    name!: String;
    

    static get tableName(){
        return 'video';
    }

    static get idColumn() {
        return 'videoId';
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