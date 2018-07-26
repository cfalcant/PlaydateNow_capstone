
exports.up = function(knex, Promise) {
    return knex.schema.createTable('playdates', (table)=>{
        table.increments().notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('category').notNullable();
        table.integer('playdate_creator').notNullable().references('id').inTable('users').onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('playdates');
};
