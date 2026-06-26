// models/order.model.ts
import mongoose, { Schema, Document, Types } from "mongoose";

export type OrderStatus =
  | "pending"      // created, not yet paid
  | "paid"         // payment succeeded
  | "processing"   // preparing shipment
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export type PaymentStatus =
  | "pending"
  | "succeeded"
  | "failed"
  | "refunded";

export type PaymentMethod =
  | "card"
  | "applePay";

export interface IOrderItem {
  _id?: Types.ObjectId;
  productId: Types.ObjectId;
  productName: string;
  productImage?: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
  currency: string;
}

export interface IShippingAddressSnapshot {
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  country: string;
  postalCode?: string;
}

export interface IOrderStatusHistory {
  _id?: Types.ObjectId;
  fromStatus: OrderStatus;
  toStatus: OrderStatus;
  changedAt: Date;
  changedBy?: Types.ObjectId | null;
}

export interface IShipmentInfo {
  carrierName: string;
  trackingId: string;
  trackingUrl?: string;
  shippedAt: Date;
  expectedDeliveryDate?: Date;
  comments?: string;
}

export interface IOrder extends Document {
  userId: Types.ObjectId;
  items: IOrderItem[];
  subtotal: number;
  shippingFee: number;
  taxAmount: number;
  total: number;
  currency: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  reservedUntil: Date,
  stockReleased: Boolean,
  hasRefundRequest: Boolean,
  replacementFor?: Types.ObjectId | null;
  paymentMethod: PaymentMethod;
  paymentReference?: string | null;
  shippingAddress: IShippingAddressSnapshot;
  payment: {
    provider: "stripe" ,
    intentId?: string,
    chargeId?: string,
    customerId?: string,
    lastEventId?: string,  
  };
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy:Types.ObjectId;
  statusHistory: IOrderStatusHistory[];
  statusUpdatedAt?: Date;
  shipment?: IShipmentInfo;
}

const orderItemSchema = new Schema<IOrderItem>(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    productName: { type: String, required: true },
    productImage: { type: String },
    unitPrice: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 1 },
    lineTotal: { type: Number, required: true, min: 0 },
    currency: { type: String, required: true },
  },
  { _id: true }
);

const shippingAddressSchema = new Schema<IShippingAddressSnapshot>(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    line1: { type: String, required: true },
    line2: { type: String },
    city: { type: String, required: true },
    state: { type: String },
    country: { type: String, required: true },
    postalCode: { type: String },
  },
  { _id: false }
);

const orderStatusHistorySchema = new Schema<IOrderStatusHistory>(
  {
    fromStatus: {
      type: String,
      enum: ["pending", "paid", "processing", "shipped", "delivered", "cancelled", "refunded"],
      required: true,
    },
    toStatus: {
      type: String,
      enum: ["pending", "paid", "processing", "shipped", "delivered", "cancelled", "refunded"],
      required: true,
    },
    changedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    changedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { _id: true }
);

const shipmentSchema = new Schema<IShipmentInfo>(
  {
    carrierName: {
      type: String,
      trim: true,
    },

    trackingId: {
      type: String,
      trim: true,
    },

    trackingUrl: {
      type: String,
      trim: true,
    },

    shippedAt: {
      type: Date,
    },

    expectedDeliveryDate: {
      type: Date,
    },

    comments: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);

const orderSchema = new Schema<IOrder>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    createdBy:{
      type:Schema.Types.ObjectId,
      ref:"User"
    },
    items: { type: [orderItemSchema], required: true },
    subtotal: { type: Number, required: true, min: 0 },
    shippingFee: { type: Number, required: true, min: 0 },
    taxAmount: { type: Number, required: true, min: 0 },
    total: { type: Number, required: true, min: 0 },
    currency: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "processing", "shipped", "delivered", "cancelled", "refunded"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "succeeded", "failed", "refunded"],
      default: "pending",
    },
    statusHistory: {
      type: [orderStatusHistorySchema],
      default: [],
    },
    
    statusUpdatedAt: {
      type: Date,
      default: Date.now,
    },
    shipment: {
      type: shipmentSchema,
      default: null,
    },
    reservedUntil: { type: Date, index: true },
    stockReleased: { type: Boolean, default: false },
    hasRefundRequest: { type: Boolean, default: false },
    replacementFor: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      default: null,
      index: true,
    },
    paymentMethod: {
      type: String,
      enum: ["card", "applePay"],
      required: true,
    },
    paymentReference: { type: String, default: null },
    shippingAddress: { type: shippingAddressSchema, required: true },
    notes: { type: String },
    payment: {
      provider: { type: String, enum: ["stripe"], default: "stripe", },
      intentId: { type: String },
      chargeId: { type: String },
      customerId: { type: String },
      lastEventId: { type: String }, // webhook idempotency
    }
  },
  { timestamps: true }
);

orderSchema.index({ userId: 1, createdAt: -1 });
orderSchema.index({ status: 1, createdAt: -1 });
orderSchema.index({ userId: 1, status: 1 });
orderSchema.index({ "items.productId": 1 });
orderSchema.index(
  { "shipment.trackingId": 1 },
  {
    unique: true,
    sparse: true
  }
);
export default mongoose.model<IOrder>("Order", orderSchema);
