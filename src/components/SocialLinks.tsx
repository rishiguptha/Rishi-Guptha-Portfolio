// src/components/SocialLinks.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4">
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        <FaGithub size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/in/yourprofile" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
