import React from 'react';

const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-inner">
        {children}
      </div>
    </section>
  );
};

export default Section;
