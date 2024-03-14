/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("Steps to Ingredient ID's").del()
  await knex('Ingredients').del()
  await knex('Steps').del()
  await knex('Recipes').del()
  await knex('Recipes').insert([
    {recipe_id: 1, recipe_name: 'Sliced Bread'},
    {recipe_id: 2, recipe_name: 'Brown Rice'},
    {recipe_id: 3, recipe_name: 'A tomato'}
  ]);
  await knex('Steps').insert([
    {steps_id: 1, step_number: 1, step_instructions: "Grab bread and knife", recipe_id: 1},
    {steps_id: 2, step_number: 2, step_instructions: "Cut the bread with the knife", recipe_id: 1},
    {steps_id: 3, step_number: 1, step_instructions: "Pick a tomato", recipe_id: 3},
    {steps_id: 4, step_number: 1, step_instructions: "Dump water and rice into pot", recipe_id: 2},
    {steps_id: 5, step_number: 2, step_instructions: "Boil for 40 min", recipe_id: 2},
    {steps_id: 6, step_number: 3, step_instructions: "Season to your preference", recipe_id: 2},
  ])
  await knex('Ingredients').insert([
    {ingredient_id: 1, ingredient_name: "Bread", quantity: 1},
    {ingredient_id: 2, ingredient_name: "Tomato", quantity: 4},
    {ingredient_id: 3, ingredient_name: "Rice", quantity: 5},
    {ingredient_id: 4, ingredient_name: "Water", quantity: 7},
  ])
  await knex("Steps to Ingredient ID's").insert([
    {ingredient_id: 1, steps_id: 1 },
    {ingredient_id: 2, steps_id: 3 },
    {ingredient_id: 3, steps_id: 4 },
    {ingredient_id: 4, steps_id: 4 }
  ])
};
