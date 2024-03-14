const knex = require('knex'); // eslint-disable
const db = require('../../data/db-config');

async function getRecipeById(id) {
    const recipe = await db('Recipes')
    .join('Steps', 'Recipes.recipe_id', '=', 'Steps.recipe_id')
    .select('Recipes.*', 'Steps.*')
    .where('Recipes.recipe_id', id)

    return recipe;
}

module.exports = {
    getRecipeById
};