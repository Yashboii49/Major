import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import ProductPhotos from './ProductPhotos';
import USPCarousel from './USPCarousel';
import PreBookButton from './PreBookButton';

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <ProductPhotos />
      <USPCarousel />
      <PreBookButton />
      <Footer />
    </div>
  );
}

export default Home;
