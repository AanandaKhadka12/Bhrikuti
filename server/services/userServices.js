const UserModel = require("../models/userModel");
 
exports.getAllUsers = async () => {
  return await UserModel.find();
};
 
exports.createUser = async (user) => {
  return await UserModel.create(user);
};