import User from "../models/User.js";

const getAllUsers = async () => {
  return await User.find();
};

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser };
