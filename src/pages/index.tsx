import Head from 'next/head';
import React from 'react';

import { basics, education, work } from '../resume.json';
import { formatDate } from '../services/dateService';

interface Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
  };
  profiles: {
    network: string;
    username: string;
    url: string;
  }[];
}

interface Work {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
}

interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
}

const SectionTitle: React.FC<{ title: string; id: string }> = ({ title, id }) => {
  return (
    <>
      <h2 id={id} className="mb-12 text-2xl font-bold">
        {title}
      </h2>
    </>
  );
};

const WorkItem: React.FC<{ job: Work }> = ({ job }) => {
  return (
    <li className="mb-10">
      <h3 className="font-semibold text-md">{job.position}</h3>
      <div className="flex flex-row justify-between">
        <span className="text-sm text-gray-600">{job.company}</span>
        <span className="text-sm text-gray-600">{`${formatDate(job.startDate)} - ${
          formatDate(job.endDate) ?? 'Today'
        }`}</span>
      </div>
      <p className="my-4 text-justify">{job.summary}</p>
    </li>
  );
};

const EducationItem: React.FC<{ school: Education }> = ({ school }) => {
  return (
    <li className="mb-10">
      <h3 className="font-semibold text-md">{`${school.studyType} in ${school.area}`}</h3>
      <div className="flex flex-row justify-between">
        <span>{school.institution}</span>
        <span className="text-sm text-gray-600">{`${formatDate(school.startDate)} - ${
          formatDate(school.endDate) ?? 'Today'
        }`}</span>
      </div>
    </li>
  );
};

const Home: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Head>
        <title>{basics.name}</title>
      </Head>
      <header className="mt-32">
        <div className="flex flex-row justify-between items-top">
          <img
            src="/images/profile.jpeg"
            className="w-32 h-32 mb-8 rounded-full"
            alt={basics.name}
          />
          <nav>
            <ul className="flex flex-row">
              <a href="#work-experience">
                <li className="mr-8 font-semibold">Work Experience</li>
              </a>
              <li className="mr-8 font-semibold">
                <a href="#education">Education</a>
              </li>
            </ul>
          </nav>
        </div>
        <h1 className="text-4xl font-semibold">{basics.name}</h1>
        <p className="text-4xl font-semibold">{basics.label}</p>
      </header>
      <section className="my-12">
        <p>{basics.summary}</p>
        <a href="/resume.pdf" download>
          Download
        </a>
      </section>
      {/* <section>
        <ul>
          {basics.profiles.map((profile) => (
            <li key={profile.network}>
              <a href={profile.url}>{`${profile.network} - ${profile.username}`}</a>
            </li>
          ))}
        </ul>
      </section> */}

      <section className="">
        <SectionTitle id="work-experience" title="Work Experience" />
        <ul className="">
          {work.map((job) => (
            <WorkItem key={job.company} job={job} />
          ))}
        </ul>
      </section>
      <section className="">
        <SectionTitle id="education" title="Education" />
        <ul className="">
          {education.map((school) => (
            <EducationItem school={school} key={school.area} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
