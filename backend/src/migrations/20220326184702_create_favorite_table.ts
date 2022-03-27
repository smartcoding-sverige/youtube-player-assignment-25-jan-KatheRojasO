import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('favorite', (table) => {
        table.increments('favoriteId');
        table.integer('user_id');
        table.foreign('user_id').references('id').inTable('user');

        table.string('video_id');
        table.foreign('video_id').references('videoId').inTable('video');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('favorite')
}
