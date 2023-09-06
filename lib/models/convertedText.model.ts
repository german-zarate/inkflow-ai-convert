import mongoose from 'mongoose';

const convertedTextSchema = new mongoose.Schema({
  addedText: {
    type: String,
    unique: true,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const ConvertedText =
  mongoose.models.ConvertedText ||
  mongoose.model('ConvertedText', convertedTextSchema);

export default ConvertedText;
