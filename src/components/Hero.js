/* eslint-disable react/no-danger */
import React from 'react';

// Custom Hook
import { useHeroContent } from '../hooks/useHeroContent';

// Styled Component
import { StyledHero } from './styles/StyledHero';

import Image from './Image';
import Button from './Button';

const Hero = () => {
  const { html, cta1, cta2, cta1Link, cta2Link, image } = useHeroContent();

  return (
    <StyledHero className="container">
      <div className="row">
        <div className="text-wrapper col-md-6">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div className="buttons-wrapper">
            <Button color="dark" text={cta1} />
            <Button text={cta2} />
          </div>
        </div>
        <div className="col-md-6 hero-image-wrapper">
          <Image alt="hero-image" filename={image} />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
