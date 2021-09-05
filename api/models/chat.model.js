const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const chatSchema = new mongoose.Schema(
    {
       
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        message: {
            type: String,
        }

  },
    { 
     timestamps : true,
     toJson: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret
        }
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret
        }
    }
}
);

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;