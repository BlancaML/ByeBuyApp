const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const chatSchema = new mongoose.Schema(
    {
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId, //<--virtual
                ref: 'Message'
            }
        ]
  },
    { 
     timestamps : true,
     virtuals: true,
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

chatSchema.virtual('messageCreator', {
    ref: 'Message',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
})

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;