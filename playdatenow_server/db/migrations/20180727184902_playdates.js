
exports.up = function(knex, Promise) {
  return knex.schema.createTable('playdates', (table)=>{
    table.increments();
    table.string('title');
    table.string('description');
    table.string('category');
    table.integer('playdate_creator').references('id').inTable('users').onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playdates')
};
