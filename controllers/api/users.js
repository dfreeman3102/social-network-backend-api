const router = require("express").Router();
const { User } = require("../../models");
//gets all the user data
router.get("/", async (req, res) => {

});
//adds a new user
router.post('/', async (req, res) => {

});
//gets a single users data
router.get("/:userId", async (req, res) => {

});
//updates a single users data
router.put('/:userId', async (req, res) =>{

});
//deletes a single users data
router.delete('/:userId', async (req, res) => {

});
//adds a friend to a single user
router.post('/:userId/friends/:friendId', async (req, res) => {

});
//deletes a friend from a single user
router.delete('/:userId/friends/:friendId', async (req, res) => {

});

module.exports = router;