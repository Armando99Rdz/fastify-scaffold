
exports.up = function(knex) {
  return knex.schema.createTable('roles', function (table) {
    table.increments('id')
    table.string('key').notNullable().unique()
    table.string('title').notNullable().unique()
    table.integer('level').default(0) // 0 = nothing permission
    table.timestamps()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("roles")
};
