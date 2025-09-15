// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock next/link
jest.mock('next/link', () => {
  const React = require('react');
  return ({ children, href }) => {
    return React.createElement('a', { href }, children);
  };
});

// Mock next/image
jest.mock('next/image', () => {
  const React = require('react');
  // eslint-disable-next-line @next/next/no-img-element
  return (props) => React.createElement('img', props);
});
