import Config from "../config/config.js"
import mongoose from 'mongoose';
import User from "../models/user.model.js";
import RefreshToken from "../models/refreshToken.model.js"

const configuration =  Config("local");
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(configuration.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

const db  ={
    User: User,
    RefreshToken: RefreshToken,
    isValidId
};

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}

export default db;