import React from 'react';

import Section from '../section';

const getAboutHtml = function(about) {
  return {__html: about};
};

const SectionAbout = ({ about }) => {
  return (
    <Section title="About">
      <div className="mb-6">
        <p dangerouslySetInnerHTML={getAboutHtml(about)}></p>
      </div>
    </Section>
  );
};

export default SectionAbout;
