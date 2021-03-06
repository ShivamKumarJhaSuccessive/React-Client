import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from '..';

const AuthLayout = (props) => {
  const { children } = props;
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
