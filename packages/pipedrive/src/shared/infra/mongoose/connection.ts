import mongoose from 'mongoose';

export default async function getConnection(): Promise<void> {
  await mongoose.connect('mongodb://mongodb/pipedrive', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
