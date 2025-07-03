import React from 'react';
import { commitment, commitmentcards } from '../export';
import Image from 'next/image';
import CommitmentCard from '../cards/commitmentCard';

const Commitment: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 px-5 sm:px-10 lg:px-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
        Commitment To Quality
      </h2>

      <div className="flex flex-col gap-20 mt-12">
        {commitment.map((item, index) => (
          <div  key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}
          >
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-gray-700 text-base sm:text-2xl font-semibold">{item.about1}</p>
              <p className="text-gray-700 text-base sm:text-lg">{item.para1}</p>
              <p className="text-gray-700 text-base sm:text-lg">{item.para2}</p>
              <p className="text-gray-700 text-base sm:text-2xl font-semibold">{item.about2}</p>
              <p className="text-gray-700 text-base sm:text-lg">{item.para3}</p>
              <ul className="list-disc list-outside space-y-2 text-gray-700 text-base sm:text-lg">
                {item.points.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {item.image && (
              <div className="w-full md:w-1/2 flex justify-center">
                <Image src={item.image} alt={item.about1} width={600} height={400} className="rounded-xl object-contain max-h-[400px] w-full h-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-20"
      >
        {commitmentcards.map((item, index) => (
          <CommitmentCard key={index} description={item.para} />
        ))}
      </div>
    </section>
  );
};

export default Commitment;