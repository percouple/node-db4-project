/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema
    .createTable('Recipes', (table) => {
        table.increments('recipe_id').primary().notNullable();
        table.string('recipe_name').notNullable();
    })
    .createTable('Steps', (table) => {
        table.increments('steps_id').primary().notNullable();
        table.integer('step_number').notNullable();
        table.string('step_instructions').notNullable();
        table.integer('recipe_id').references('recipe_id').inTable('Recipes').notNullable();
    })
    .createTable('Ingredients', (table) => {
        table.increments('ingredient_id').primary().notNullable();
        table.string('ingredient_name').notNullable();
        table.float('quantity').nullable();
    })
    .createTable("Steps to Ingredient ID's", (table) => {
        table.increments('step_ingredient_id').notNullable();
        table.integer('ingredient_id').references('ingredient_id').inTable('Ingredients').notNullable();
        table.integer('steps_id').references('steps_id').inTable('Steps').notNullable();
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