import React from 'react';
import PropTypes from 'prop-types';

const DefaultLayout = props => [

  <header key="header" />,
  <div key="body" className="main">{props.children}</div>,
  <footer key="footer" />,

];

DefaultLayout.propTypes = {
  children: PropTypes.any,
};

export default DefaultLayout;
