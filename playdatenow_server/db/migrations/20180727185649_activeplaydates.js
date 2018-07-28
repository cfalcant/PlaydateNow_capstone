
exports.up = function(knex, Promise) {
  return knex.schema.createTable('activeplaydates', (table)=>{
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('cascade');
    table.integer('playdate_id').references('id').inTable('playdates').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activeplaydates')
};
