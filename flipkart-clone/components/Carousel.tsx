/* eslint-disable react/jsx-props-no-spreading */

'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function Carousel() {
  const productsData = [
    {
      id: 1,
      url: 'https://rb.gy/ib7q1d',
    },
    {
      id: 2,
      url: 'https://rb.gy/25c2fs',
    },
    {
      id: 2,
      url: 'https://rb.gy/os03og',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <section>
      <Slider {...settings}>
        {productsData.map((product) => (
          <div key={product.id} className="px-4 h-[27rem] rounded relative">
            <Image
              src={product.url}
              className="w-full rounded"
              fill
              alt="products"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
