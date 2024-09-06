
import React from 'react';

import './certification.scss';
import CertificationCards from './CertificationCards';



const certifications = [

  
  { src: '0-1certificate.png' , link: 'https://app.100xdevs.com/certificate/verify/RER2RZEI' }

  
];

const Skills = () => {
  return (
    <div className="certi">
   
      <CertificationCards data={certifications}></CertificationCards>
      
    </div>
  );
};

export default Skills;
