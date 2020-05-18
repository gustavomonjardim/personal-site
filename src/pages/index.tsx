import Head from 'next/head';
import React from 'react';

import Layout from '../components/layout';
import { basics, education, work } from '../resume.json';
import utilStyles from '../styles/utils.module.css';

const Home: React.FC = () => {
  return (
    <Layout home>
      <Head>
        <title>{basics.name}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{basics.summary}</p>
        <a href="/resume.pdf" download>
          Download
        </a>
      </section>
      <section>
        <ul>
          {basics.profiles.map((profile) => (
            <li key={profile.network}>
              <a href={profile.url}>{`${profile.network} - ${profile.username}`}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Work Experience</h2>
        <ul className={utilStyles.list}>
          {work.map((job) => (
            <li className={utilStyles.listItem} key={job.company}>
              <h3 className={utilStyles.headingMd}>{job.company}</h3>
              <p>{job.summary}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Education</h2>
        <ul className={utilStyles.list}>
          {education.map((school) => (
            <li className={utilStyles.listItem} key={school.institution}>
              <h3 className={utilStyles.headingMd}>{school.area}</h3>
              <p>{school.institution}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
