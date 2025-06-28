import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light text-center py-4 mt-5">
      <div className="container">
        <p>© {year} PSA Agrosciences Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
