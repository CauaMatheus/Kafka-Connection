import { Schema, model } from 'mongoose';

type WonDealType = {
  id: number;
  name: string;
  date: Date;
};

const WonDealSchema = new Schema({
  id: Number,
  name: String,
  date: Date,
});

const WonDealModel = model<WonDealType>('WonDeal', WonDealSchema);

export { WonDealModel };
