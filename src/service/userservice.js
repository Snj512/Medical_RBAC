const AppDataSource = require("../config/dbconnect");
const User = require("../models/users");

const AppDataSource2 = require("../config/dbconnect");


const createUser = async (data) => {
const repo = AppDataSource2.getRepository(User);
const user = repo.create(data);
return await repo.save(user);
};


const findUserByUsername = async (username) => {
const repo = AppDataSource2.getRepository(User);
return await repo.findOne({ where: { username } });
};


const findUserByEmail = async (email) => {
const repo = AppDataSource2.getRepository(User);
return await repo.findOne({ where: { email } });
};


const listUsers = async () => {
const repo = AppDataSource2.getRepository(User);
return await repo.find();
};


module.exports = { createUser, findUserByUsername, findUserByEmail, listUsers };
