import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
// Components
import Button from './Button';
// Styles
import { StyledSubscribe } from './styles/StyledSubscribe';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await addToMailchimp(email);

    if (data.result === 'error') setEmail('Not a valid email.');
    if (data.result === 'success') setEmail('Thank you!');
  };

  return (
    <StyledSubscribe>
      <div className='container'>
        <form className='email-form' onSubmit={handleSubmit}>
          <input
            className='email'
            type='text'
            name='email'
            placeholder='Want news and discounts? No spam!'
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <Button type='submit' color='dark' text='Subscribe' />
        </form>
      </div>
    </StyledSubscribe>
  );
};

export default Subscribe;
