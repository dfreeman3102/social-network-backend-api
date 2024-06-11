const router = require("express").Router();
const User = require("../../models/userModel");
console.log(User);
//gets all the user data
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//adds a new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//gets a single users data
router.get("/:_id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params._id });
    if (!user) {
      return res.status(404).json({ message: "No User with this Id" });
    }
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//updates a single users data
router.put("/:_id", async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//deletes a single users data
router.delete("/:_id", async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params._id });
    res.status(200).json({ message: `Deleted UserId: ${deletedUser._id}` });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//adds a friend to a single user
router.post("/:_id/friends/:friendId", async (req, res) => {});
//deletes a friend from a single user
router.delete("/:_id/friends/:friendId", async (req, res) => {});

module.exports = router;
