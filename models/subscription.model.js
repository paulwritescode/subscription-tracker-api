import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Subscription Name is required'],
            trim: true,
            minLength: 2,
            maxLength: 50
        },
        price: {
            type: Number,
            required: [true, 'Subscription Price is required'],
            min: [0, 'Price must be greater than 0'],
        },
        currency: {
            type: String,
            trim: true,
            enum: ['USD', 'EUR', 'GBP', 'INR'],
            default: 'USD',
        },
        frequency: {
            type: String,
            enum: ['daily', 'weekly', 'monthly', 'yearly']
        },
        category: {
            type: String,
            enum: ['sports', 'entertainment', 'education', 'health', 'technology', 'lifestyle', 'news', 'gaming', 'other'],
            required: [true, 'Subscription Category is required']
        },
        paymentMethod: {
            type: String,
            trim: true,
            required: [true, 'Payment Method is required']
        },
        status: {
            type: String,
            enum: ['active', 'expired', 'cancelled'],
            default: 'active',
        },
        startDate: {
            type: Date,
            required: true,
            validate: {
                validator: function (value) {
                    return value <= new Date();
                },
                message: 'Start date cannot be in the future'
            }
        },
        renewalDate: {
            type: Date,
            validate: {
                validator: function (value) {
                    return value > this.startDate;
                },
                message: 'Renewal Date must be after start date'
            }
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        }
    },
    {
        timestamps: true,
    }
);

subscriptionSchema.pre('save', function (next) {
    if (this.isNew) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    if (this.renewalDate < new Date()) {
        this.status = 'expired';

    }
    next();
})

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;