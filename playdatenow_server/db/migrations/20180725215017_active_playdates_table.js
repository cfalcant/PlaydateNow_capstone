
exports.up = function(knex, Promise) {
    return knex.schema.createTable('active_playdates', (table)=>{
        table.increments().notNullable();
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.integer('playdate_id').notNullable().references('id').inTable('playdates').onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('active_playdates');
};
