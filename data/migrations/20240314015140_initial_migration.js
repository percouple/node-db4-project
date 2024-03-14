/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema
    .createTable('Recipes', (table) => {
        table.increments('id').primary().notNullable();
        table.string('recipe_name').notNullable();
    })
    .createTable('Steps', (table) => {
        table.increments('id').primary().notNullable();
        table.integer('step_number').notNullable();
        table.string('step_instructions').notNullable();
        table.integer('recipe_id').notNullable();
    })
    .createTable('Ingredients', (table) => {
        table.integer('ingredient_id').primary().notNullable();
        table.string('ingredient_name').notNullable();
        table.float('quantity').nullable();
    })
    .createTable("Steps to Ingredient ID's", (table) => {
        table.integer('ingredient_id').notNullable();
        table.integer('steps_id').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("Steps to Ingredient ID's")
        .dropTableIfExists('Ingredients')
        .dropTableIfExists('Steps')
        .dropTableIfExists('Recipes')
};