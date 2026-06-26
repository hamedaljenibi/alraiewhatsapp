// models/userSubscription.model.ts
import mongoose, { Schema, Document, Types } from "mongoose";

export type BillingCycle = "monthly" | "yearly"| "custom";
export type SubscriptionSource = "apple" | "google" | "admin" | "stripe";

export interface IUserSubscription extends Document {
  ownerId: Types.ObjectId;

  planKey: string;
  cycle?: BillingCycle;

  priceSnapshot?: {
    amount: number;
    currency: string;
    platform: SubscriptionSource;
  };

  startsAt: Date;             
  startedAt: Date;
  expiresAt: Date;

  isTrial: boolean;
  trialEndsAt?: Date;

  status: "scheduled" | "active" | "expired" | "cancelled"   | "past_due";

  source: SubscriptionSource;
  purchaseProof?: {
    receipt?: string;   
    purchaseToken?: string;  
    productId?: string;
  };

  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripePriceId?: string;
  
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<IUserSubscription>(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: "User", index: true },

    planKey: String,
    cycle: { type: String, enum: ["monthly", "yearly", "custom"] },
    
    priceSnapshot: {
      amount: Number,
      currency: String,
      platform: String,
    },
    startsAt: { type: Date, required: true, default: Date.now,  },   
    startedAt: Date,
    expiresAt: Date,

    isTrial: Boolean,
    trialEndsAt: Date,

    status: { type: String, enum: ["scheduled", "active", "expired", "cancelled",  "past_due",], default: "active",index: true, },

    source: { type: String, enum: ["apple", "google", "admin", "stripe"] },
    purchaseProof: {
      productId: String,
      receipt: String,
      purchaseToken: String,
    },
    stripeCustomerId: { type: String, index: true },
    stripeSubscriptionId: { type: String, index: true },
    stripePriceId: String,
  },
  { timestamps: true }
);

schema.index({ ownerId: 1, status: 1 });
schema.index(
  { stripeSubscriptionId: 1 },
  { unique: true, sparse: true }
);

export default mongoose.model<IUserSubscription>("UserSubscription", schema);
