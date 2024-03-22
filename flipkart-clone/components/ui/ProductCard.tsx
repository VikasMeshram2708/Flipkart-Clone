/* eslint-disable import/prefer-default-export */

'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3dCard';

export function ThreeDCardDemo({
  imageSrc,
  price,
  title,
  description,
}: {
  imageSrc: string;
  price: number;
  title: string;
  description: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-4 border-green-300">
        <CardItem translateZ="50" className="line-clamp-1 text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="line-clamp-2 text-sm max-w-sm mt-2 text-white"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageSrc}
            height="1000"
            width="1000"
            className="h-80 w-full bg-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="border-2 border-green-300 px-4 font-bold py-2 rounded text-xs dark:text-white"
          >
            {`$ ${price}`}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="border-2 border-green-300 px-4 py-2 rounded bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Buy now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
