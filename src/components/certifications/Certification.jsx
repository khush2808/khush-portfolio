
import React from 'react';

import './certification.scss';
import CertificationCards from './CertificationCards';



const certifications = [

  
  { src: '0-1certificate.png' , link: 'https://www.udemy.com/certificate/UC-cb27a48e-11b9-4a31-b4fd-70ecd6668da2/' }

  
];

const Skills = () => {
  return (
    <div className="certi">
   
      <CertificationCards data={certifications}></CertificationCards>
      
    </div>
  );
};

export default Skills;
