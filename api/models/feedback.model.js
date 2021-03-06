const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const feedbackSchema = new mongoose.Schema(
    {
        stars: {
            type: Number,
            default: 0,
            required: true,
        },

        reviews: {
            type: Number,
            default: 1,
            required: true,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        sentTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        rental: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rental',
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

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;

