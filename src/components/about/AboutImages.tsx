import React from 'react';
import { motion } from 'framer-motion';
import { useAbout } from '../../hooks/useAbout';
import LoadingSpinner from '../ui/LoadingSpinner';

const AboutImages = () => {
  const { images, loading, error } = useAbout();

  console.log('About Images:', { images, loading, error }); // Debug log

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        {error}
      </div>
    );
  }

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600">
        No images available
      </div>
    );
  }

  return (
    <div className="relative h-[800px]">
      {images.map((image, index) => (
        <motion.img 
          key={image.id}
          src={image.image_url}
          alt={`Studio Image ${index + 1}`}
          className={`absolute w-[500px] h-[400px] object-cover rounded-lg ${
            index % 2 === 0 
              ? 'top-0 right-0' 
              : 'bottom-0 left-0 w-[600px] h-[500px]'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        />
      ))}
    </div>
  );
};

export default AboutImages;