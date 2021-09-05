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



})



const Rental = mongoose.model('Rental', rentalSchema);
module.exports = Rental;