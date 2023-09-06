'use server';

import axios from 'axios';

import updateData from '../cloudinary';
import ConvertedText from '../models/convertedText.model';
import connectToDB from '../mongodb';

interface AddConvertedTextParams {
  extractedText: string;
  imageUrl: string;
}

export const addConvertedText = async ({
  extractedText,
  imageUrl,
}: AddConvertedTextParams) => {
  try {
    connectToDB();
    const newConvertedText = new ConvertedText({
      addedText: extractedText,
      imageUrl,
    });
    await newConvertedText.save();
  } catch (error) {
    const errorMessage = (error as Error).message;
    throw new Error(`Failed to add converted text: ${errorMessage}`);
  }
};

export const fetchAllConvertedText = async () => {
  try {
    connectToDB();
    const allConvertedTexts = await ConvertedText.find();
    return allConvertedTexts;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
};

export const convertText = async (dataUrl: string) => {
  const updatedImageUrl = await updateData(dataUrl);

  if (updatedImageUrl) {
    const options = {
      method: 'POST',
      url: 'https://api.edenai.run/v2/ocr/ocr',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${process.env.EDENA_AI_API_KEY}`,
      },
      data: {
        response_as_dict: true,
        attributes_as_list: false,
        show_original_response: false,
        language: 'en',
        providers: 'google',
        file_url: updatedImageUrl,
      },
    };
    try {
      const response = await axios.request(options);
      return { data: response.data, imageUrl: updatedImageUrl };
    } catch (error) {
      return 0;
    }
  }
  return 0;
};
