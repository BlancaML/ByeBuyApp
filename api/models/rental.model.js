const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const rentalSchema = new mongoose.Schema({

    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },


    renter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },


    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },


    startDate: {
        type: Date,
        required: true,
    },

    endDate: {
        type: Date,
        required: true,
    },

    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Paid', 'Cancelled'],
        default: 'Pending'
    },


}, {
    timestamps: true,

    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret
        }

    },

    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret
        }
    }

})



const Rental = mongoose.model('Rental', rentalSchema);
module.exports = Rental;