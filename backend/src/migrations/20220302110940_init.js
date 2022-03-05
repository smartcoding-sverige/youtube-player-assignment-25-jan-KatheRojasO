const { ForeignKeyViolationError } = require("objection");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('id', (table) => {
      table.string('videoId').notNullable();
      table.primary('videoId', {constraintName:'id_primary_key'});
      table.string('kind').notNullable();
      table.string('name').notNullable();
  }).createTable('video', (table) => {
      table.string('etag').notNullable();
      table.primary('etag', {constraintName:'video_primary_key'});
      table.string('videoId').notNullable();
      table.foreign('videoId').references('videoId').inTable('id');
      table.string('kind').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('id')
    .dropTableIfExists('video')
  
};

