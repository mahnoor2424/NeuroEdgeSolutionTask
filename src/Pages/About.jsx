import React from 'react';
import Abouthero from '../Components/Abouthero';
import FounderProfile from '../Components/FounderProfile';
import CoreValues from '../Components/CoreValues';
import FeatureSection from '../Components/FeatureSection';
import Footertop  from '../Components/Footertop';

const About = () => {
  return (
    <div>
      <Abouthero />
      <FounderProfile/>
      <CoreValues/>
      <FeatureSection/>
      <Footertop/>
    </div>
  );
};

export default About;
