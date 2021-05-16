import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCourses = ({ courses }) => {
  if (!courses.length) return null;

  return (
    <Section title="Pluralsight Courses">
      {courses.map((course) => (
        <SummaryItem
          key={course.name}
          name={course.name}
          description={course.description}
          link={course.link}
          year={course.year}
        />
      ))}
    </Section>
  );
};

export default SectionCourses;