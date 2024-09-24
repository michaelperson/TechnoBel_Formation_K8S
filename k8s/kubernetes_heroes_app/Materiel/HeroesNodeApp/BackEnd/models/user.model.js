import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    role: { type: String, required: true }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        // permet de supprimer ces proprités de la sérialization
        delete ret._id;
        delete ret.passwordHash;
    }
});

export default mongoose.model('User', schema);