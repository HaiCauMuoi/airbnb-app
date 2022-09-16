import React from 'react';
import Image from 'next/image';

interface MediumCardProps {
  img: string;
  title: string;
}

function MediumCards({ img, title }: MediumCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>{' '}
      <h3 className="text-2xl mt-3 text-black z-30">{title}</h3>
    </div>
  );
}

export default MediumCards;
