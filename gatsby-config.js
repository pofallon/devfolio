module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://get2know.io`,
    // Your Name
    name: `Paul O'Fallon`,
    // Main Site Title
    title: `Paul O'Fallon | Lifelong Learner`,
    // Description that goes under your name in main bio
    description: `Passionate about technology and teaching it to others.`,
    // Optional: Twitter account handle
    author: `@paulofallon`,
    // Optional: Github account URL
    github: `https://github.com/pofallon`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/paulofallon/`,
    // Content of the About Me section
    about: `Paul has more than 28 years experience in the Information Technology industry spanning academic, start-up and enterprise environments. As Associate Vice President, Architecture at <a class="hover:underline hover:text-black"href="https://www.coxautoinc.com/">Cox Automotive</a>, he currently leads a team of architects providing strategic direction and implementation guidance to the organization. As a <a class="hover:underline hover:text-black" href="https://www.pluralsight.com">Pluralsight<a> course author, Paul has delivered training across a broad spectrum of technologies, including node.js, Apache Cassandra and Java API development.`,
    courses: [
      {
        name: 'Cassandra for Developers',
        description: `This course is designed to familiarize you with Cassandra's resilient, distributed architecture while equipping you with a thorough understanding of the Cassandra Query Language (CQL).`,
        link: 'https://www.pluralsight.com/courses/cassandra-developers',
        year: 2020
      },
      {
        name: 'Node.js: The Big Picture',
        description: 'Curious if Node.js is right for you? In this course we look at how Node is commonly used, examine its asynchronous development model, explore leveraging the npm module ecosystem, and assemble a set of tools to help get you started on your journey!',
        link: 'https://www.pluralsight.com/courses/nodejs-big-picture',
        year: 2019
      },
      {
        name: 'Building Command Line Applications in Node.js',
        description: 'Most of us use command line applications in our jobs every day. This course will introduce you to the basics of building a CLI in Node.js, including managing configuration, interacting with the user, and distributing your finished product.',
        link: 'https://www.pluralsight.com/courses/node-js-building-command-line-app',
        year: 2018
      },
      {
        name: 'Building Asynchronous RESTful Services With Jersey',
        description: 'In this course, we explore writing asynchronous services, as well as many other features found in Jersey. We also cover dependency injection, exception mapping, filters, Grizzly, Jackson, JerseyTest, and more.',
        link: 'https://www.pluralsight.com/courses/build-asynchronous-restful-services-jersey',
        year: 2014
      }
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'twttr',
        description:
          'A minimal Twitter API client',
        link: 'https://github.com/pofallon/twttr',
      },
      {
        name: 'cdk-twitter-activity',
        description:
          'An AWS CDK construct to publish Twitter activity to AWS EventBridge',
        link: 'https://github.com/pofallon/cdk-twitter-activity',
      },
      {
        name: 'gatsby-transformer-playlists',
        description:
          'A Gatsby plugin that leverages the YouTube API to add nodes for playlist and video information.',
        link: 'https://github.com/pofallon/gatsby-transformer-playlists',
      },
      {
        name: 'vscode-phantypist',
        description:
          'An extension for Visual Studio Code that will slowly paste text from the clipboard, as if someone is typing.',
        link: 'https://github.com/pofallon/vscode-phantypist'
      },
      {
        name: 'jersey2-akka-java',
        description:
          'An example asynchronous REST API written in Java using Jersey 2 and Akka',
        link: 'https://github.com/pofallon/jersey2-akka-java'
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    // experience: [
    //   {
    //     name: 'Acme Corp',
    //     description: 'Full-Stack Developer, February 2020 - Present',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Globex Corp',
    //     description: 'Full-Stack Developer, December 2017 - February 2020',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Hooli',
    //     description: 'Full-Stack Developer, May 2015 - December 2017',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],
    // Optional: List your skills, they must have `name` and `description`.
    // skills: [
    //   {
    //     name: 'Languages & Frameworks',
    //     description:
    //       'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
    //   },
    //   {
    //     name: 'Databases',
    //     description: 'MongoDB, PostreSQL, MySQL',
    //   },
    //   {
    //     name: 'Other',
    //     description:
    //       'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
    //   },
    // ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
