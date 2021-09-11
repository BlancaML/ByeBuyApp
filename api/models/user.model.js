const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EMAIL_PATTERN = /\S+@\S+\.\S+/;
const PASSWORD_PATTERN = /^.{8,}$/;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    name: {
        type: String,
        required: 'Name is required'
    },

    email: {
        unique: true,
        type: String,
        required: 'A valid email is required',
        match: [EMAIL_PATTERN, 'Valid email is required']
    },

    password: {
        type: String,
        required: 'Password is required',
        match: [PASSWORD_PATTERN, 'Password needs at least 8 chars']
    },

    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dnhoxil9i/image/upload/v1630743450/default_avatar_cfiuz6.jpg"
    },

    description: {
        type: String,
    },

    social: {
        google: String,
    },

    // location: {
    //     type: {
    //         type: String,
    //         enum: ['Point'],
    //         default: 'Point'
    //      },
    //      coordinates: {
    //          type: [Number],
            
    //      }
    // },

    active: {
        type: Boolean,
        default: false,
    },


    owner: {
        type: Boolean,
        default: false,
    }


}, {
    timestamps: true,
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

userSchema.index({ location: '2dsphere' });

userSchema.virtual('feedbackGiven', {
    ref: 'Feedback',
    localField: '_id',
    foreignField: 'createdBy',
    justOne: false, 
})

userSchema.virtual('feedbackReceived', {
    ref: 'Feedback',
    localField: '_id',
    foreignField: 'sentTo',
    justOne: false, 
})



userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10).then((hash) => {
            this.password = hash;
            next();
        });
    } else {
        next();
    }
})
 
userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
