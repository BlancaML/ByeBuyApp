const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new mongoose.Schema(
    {
        text : {
            type: String,
            required: true
        },
        
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
            
        },

        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat'
        }
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

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;