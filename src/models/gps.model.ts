import mongoose, { Schema, Document, Types } from "mongoose";

export interface IGpsDevice extends Document {
  serialNumber: string;
  ownerId: Types.ObjectId;
  animalId?: Types.ObjectId | null;
  createdBy: Types.ObjectId;
  isLinked: boolean;
  linkedAt?: Date| null;

  acknowledged: boolean;
  acknowledgedAt?: Date | null;
  acknowledgedBy?: Types.ObjectId | null;
  acknowledgeUntil?: Date | null;

  lastCredsUpdatedAt?: Date | null;
  lastFetchAt: Date | null;
  reportIntervalSec: number | null;
  lastKnownLatitude?: number;
  lastKnownLongitude?: number;
  lastTrackedAt?: Date | null;
  lastLasSyncAt?: Date | null;
  weather?: {
    temperatureC: { type: Number, default: null },
    humidityPercent: { type: Number, default: null },
    pressureMb: { type: Number, default: null },
    weatherMain: { type: String, default: null },
    weatherDescription: { type: String, default: null },
    uvIndex: { type: Number, default: null },
    uvCategory: { type: String, default: null },
    fetchedAt: { type: Date, default: null },
  };
  lastWeatherAiCheckAt?: Date | null;
  lastWeatherRiskStatus?: "safe" | "risk";
  lastWeatherRiskReason?: string | null;
  lastWeatherRiskRecommendation?: string | null;
  lastWeatherRiskReason_ar?: string | null;
  lastWeatherRiskRecommendation_ar?: string | null;
  lastWeatherRiskSeverity?: string | null;

  dataHash?: Record<string, any>;

  createdAt: Date;
  updatedAt: Date;
}

const gpsSchema = new Schema<IGpsDevice>(
  {
    serialNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    animalId: {
      type: Schema.Types.ObjectId,
      ref: "Animal",
      default: null,
      index: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isLinked: {
      type: Boolean,
      default: false,
    },
    linkedAt: { type: Date },

    acknowledged: { type: Boolean, default: false, index: true },
    acknowledgedAt: { type: Date, default: null },
    acknowledgedBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
    acknowledgeUntil: { type: Date, default: null, index: true },

    lastCredsUpdatedAt: { type: Date, default: null },

    lastKnownLatitude: { type: Number },
    lastKnownLongitude: { type: Number },
    weather: {
      temperatureC: Number,
      humidityPercent: Number,
      pressureMb: Number,
      weatherMain: String,
      weatherDescription: String,
      uvIndex: Number,
      uvCategory: String,
      fetchedAt: Date,
    },
    lastWeatherAiCheckAt: { type: Date, default: null },
    lastWeatherRiskStatus: { type: String, enum: ["safe", "risk"], default: "safe" },
    lastWeatherRiskReason: {type: String, default: null},
    lastWeatherRiskRecommendation: {type: String, default: null},
    lastWeatherRiskReason_ar: {type: String, default: null},
    lastWeatherRiskRecommendation_ar: {type: String, default: null},
    lastWeatherRiskSeverity: {type:String, default: null},

    dataHash: { type: Schema.Types.Mixed, default: {} },
    lastFetchAt: { type: Date, default: null },
    lastTrackedAt: {
      type: Date,
      default: null,
      index: true,
    },
    
    lastLasSyncAt: {
      type: Date,
      default: null,
    },
    reportIntervalSec: { type: Number, default: 7200 },
  },
  { timestamps: true }
);

gpsSchema.index({ serialNumber: 1 }, { unique: true });
gpsSchema.index({ ownerId: 1, isLinked: 1 });
gpsSchema.index({ lastKnownLatitude: 1, lastKnownLongitude: 1 });

export default mongoose.model<IGpsDevice>("GpsDevice", gpsSchema);
