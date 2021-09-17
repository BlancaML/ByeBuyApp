const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categories = require('../data/categories')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    cost: {
        type: Number,
        required: true,
    },

    categories: {
        type: [{
            type: String,
            enum: categories.map((c) => c)
        }],
        validate: {
            validator: function(categories) {
                return categories.length >= 1;
            },
            message: 'Choose at least one category'
          }
    },


    renter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },

    image: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: ['available', 'rented'],
        default: 'available',
    },

    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            
        }
    }
}, {
    timestamps: true,

    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            ret.items = doc.items || []
            ret.location = doc.location.coordinates.reverse()
            return ret
        }

    },  

    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            ret.items = doc.items || []
            return ret
        }
    }

})


itemSchema.index({ location: '2dsphere' });

itemSchema.virtual('rentals', {
    ref: 'Rental',
    localField: '_id',
    foreignField: 'item',
})



const Item = mongoose.model('Item', itemSchema);
module.exports = Item;