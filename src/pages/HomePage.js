import React from 'react';
import Header from './components/HomePage/Header';
import Banner from './components/HomePage/Banner';
import FeaturedSection from './components/HomePage/FeaturedSection';
import ContentSections from './components/HomePage/ContentSections';
import Sidebar from './components/HomePage/Sidebar';
import Footer from './components/HomePage/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FeaturedSection />
      <ContentSections />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default HomePage;
