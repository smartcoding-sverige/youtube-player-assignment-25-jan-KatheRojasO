const { Model } = require('objection');
const  Id = require('./id');

class Video extends Model {
    static get tableName(){
        return 'video';
    }

    static relationMappings = {
        id: {
          relation: Model.BelongsToOneRelation,
          modelClass: Id,
          join: {
            from: 'video.videoId',
            to: 'id.videoId'
          }
        }
      };
}

module.exports = Video;