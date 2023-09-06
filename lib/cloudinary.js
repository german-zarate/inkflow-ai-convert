'use server';

import cloudinary from 'cloudinary';

const { uploader } = cloudinary.v2;

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const cloudinaryUpload = (file) =>
  uploader.upload(file, {
    overwrite: true,
    invalidate: true,
  });

const updateData = async (imageData) => {
  const uploadResult = await cloudinaryUpload(imageData);
  return uploadResult.url;
};

export default updateData;
