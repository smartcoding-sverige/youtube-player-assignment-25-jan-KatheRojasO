import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('video', (table) => {
        table.string('videoId').notNullable();
        table.primary(['videoId'], {constraintName:'id_primary_key'});
        table.string('name').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('video')
}
