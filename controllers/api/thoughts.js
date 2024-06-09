const router = require("express").Router();
const { Thought } = require("../../models/thoughtModel");

//gets all thought data
router.get("/", async (req, res) => {

});
//adds a new thought
router.post('/', async (req, res) => {

});
//gets a single thoughts data
router.get("/:thoughtId", async (req, res) => {

});
//updates a single thoughts data
router.put('/:thoughtId', async (req, res) =>{

});
//deletes a single thoughts data
router.delete('/:thoughtId', async (req, res) => {

});
//adds a reaction to a single thought
router.post('/:thoughtId/reactions', async (req, res) => {

});
//deletes a friend from a single user
router.delete('/:thoughtId/reactions', async (req, res) => {

});

module.exports = router;