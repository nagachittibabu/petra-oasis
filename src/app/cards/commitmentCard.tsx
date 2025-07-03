import React from 'react';

interface CoreValueCardProps {
  description: string;
}

const CommitmentCard: React.FC<CoreValueCardProps> = ({ description }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 sm:p-8 transition-transform duration-300 ">
      <p className="text-center text-lg text-gray-600 mb-4">{description}</p>
    </div>
  );
};

export default CommitmentCard;