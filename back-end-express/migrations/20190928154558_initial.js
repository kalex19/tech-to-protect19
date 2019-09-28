
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('username')
      table.string('token')
      table.string('role')
      table.string('password_digest')
      table.timestamps(true, true)
    }),
    knex.schema.createTable('houses', table => {
      table.increments('id').primary()
      table.string('address')
      table.integer('user_id').unsigned()
      table.foreign('user_id')
        .references('users.id')
      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('houses')
  ])
};