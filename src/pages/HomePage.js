import React from 'react';
import Header from '../components/HomePage/Header';
import Banner from '../components/HomePage/Banner';
import FeaturedSection from '../components/HomePage/FeaturedSection';
import ContentSections from '../components/HomePage/ContentSections';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FeaturedSection />
      <ContentSections />
      <Footer />
    </div>
  );
};

export default HomePage;
