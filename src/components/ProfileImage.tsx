
import React, { useState } from 'react';

const ProfileImage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-60 h-60 md:w-80 md:h-80 mx-auto">
      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 animate-pulse-subtle ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} />
      <div className={`absolute inset-0 bg-secondary animate-shimmer bg-[length:400%_100%] ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} style={{ backgroundImage: 'linear-gradient(to right, transparent 0%, #f0f0f0 50%, transparent 100%)' }} />
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
        <img
          src="/placeholder.svg"
          alt="Profile"
          className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
