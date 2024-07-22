import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId}}).select("-password"); // find all user except the current one
    // const filteredUsers = await User.find({ _id: { $ne: loggedInUserId}}).select("-password").select("-gender"); It emits more than one property using select

    res.status(200).json(filteredUsers);

  } catch (error) {
    console.log("Error in GET USERS for sidebar controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
