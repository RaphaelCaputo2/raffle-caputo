import React, { useEffect, useState } from 'react';
import { raffleService } from '../services/raffleService';

interface Photo {
  id: number;
  url: string;
}

const PhotoView: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await raffleService.getPhotos();
      setPhotos(response.data);
    } catch (error) {
      console.error('Failed to fetch photos', error);
    }
  };

  return (
    <div id="photoView">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt="Raffle" />
        </div>
      ))}
    </div>
  );
};

export default PhotoView;