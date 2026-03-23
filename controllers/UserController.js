import UserService from "../services/UserService.js";

// V1 Controllers
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    const transformedUsers = users.map((user) => ({
      //I used transformedUsers to transform the output to remove the underscore in _id and to match the response format.
      id: user._id,
      username: user.username,
      emailAddress: user.emailAddress,
    }));
    res.status(200).json(transformedUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    const transformedUsers = users.map((user) => ({
      //I used transformedUsers to transform the output to remove the underscore in _id and to match the response format.
      id: user._id,
      username: user.username,
      emailAddress: user.emailAddress,
    }));
    res.status(200).json(transformedUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const transformedUser = {
      id: user._id,
      username: user.username,
    };
    res.status(200).json(transformedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// V2 Controllers, I added the v2 controllers here to keep all controllers in one file since it can be imported to different files.
export const getAllUsersV2 = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    const transformedUsers = users.map((user) => ({
      //I used transformedUsers to transform the output to remove the underscore in _id and replace emailAddress with email to match the response format.
      id: user._id,
      username: user.username,
      email: user.emailAddress,
    }));
    res.status(200).json(transformedUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUserV2 = async (req, res) => {
  try {
    const { username, email } = req.body;
    const userData = {
      username,
      emailAddress: email, //transform email to emailAddress for V2
    };
    const user = await UserService.createUser(userData);
    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.emailAddress,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserByIdV2 = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.emailAddress,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllUsersV2,
  createUserV2,
  getUserByIdV2,
};
