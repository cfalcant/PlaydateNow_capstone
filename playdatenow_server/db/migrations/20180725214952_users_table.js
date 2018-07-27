
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table)=>{
    table.increments().notNullable();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.integer('zipcode').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
