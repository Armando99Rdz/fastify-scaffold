
exports.up = function(knex) {
  return knex.schema.createTable('users_roles', function (table) {
    table.increments('id')
    table.integer('user_id').unsigned().references('id')
      .inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    table.integer('role_id').unsigned().references('id')
      .inTable('roles').onUpdate('CASCADE').onDelete('CASCADE')
    table.timestamps()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users_roles")
};
