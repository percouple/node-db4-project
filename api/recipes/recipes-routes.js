const express = require('express');
const router = express.Router();
const { getRecipeById } = require('./recipes-model')

router.get('/:recipe_id', async (req, res) => {
    const id = req.params.recipe_id;
    await getRecipeById(id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
});

module.exports = router;