function getRecipeById (id) {
    return Promise.resolve("Resolving thru model: " + id)
}

module.exports = {
    getRecipeById
};