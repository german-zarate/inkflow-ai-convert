'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { fetchAllConvertedText } from '@/lib/actions/convertedText.action';

type FetchedText = {
  _id: string;
  addedText: string;
  imageUrl: string;
};

const ConvertedTextsPage = () => {
  const [allConvertedTexts, setAllConvertedTexts] = useState<FetchedText[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedTexts = await fetchAllConvertedText();
        console.log(fetchedTexts);

        setAllConvertedTexts(fetchedTexts);
      } catch (errors) {
        setError('Failed to fetch data.', errors);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="container mt-6 flex flex-col items-center">
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Added Text</th>
            <th className="px-4 py-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {allConvertedTexts.map((text) => (
            <tr key={text._id}>
              <td className="border px-4 py-2">{text._id}</td>
              <td className="border px-4 py-2">{text.addedText}</td>
              <td className="border px-4 py-2 dark:bg-white">
                <Image src={text.imageUrl} width={200} height={200} alt="img" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ConvertedTextsPage;
