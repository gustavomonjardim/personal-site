import Head from 'next/head';
import React from 'react';

import Button from '../components/button';
import { basics, education, work, skills } from '../resume.json';
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
  location: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  skills?: string[];
}

interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
}

type Skills = {
  name: string;
  level: string;
  keywords: string[];
}[];

// const Badge: React.FC<{ skill: string }> = ({ skill }) => {
//   return (
//     <span className="inline-block px-4 py-2 text-sm text-white bg-blue-400 rounded-md">
//       {skill}
//     </span>
//   );
// };

const SectionTitle: React.FC<{ title: string; id: string }> = ({ title, id }) => {
  return (
    <>
      <h2 id={id} className="mt-12 mb-8 font-sans text-2xl font-semibold uppercase">
        {title}
      </h2>
    </>
  );
};

const WorkItem: React.FC<{ job: Work }> = ({ job }) => {
  return (
    <li className="mb-10">
      <span className="text-sm text-gray-600">{`${formatDate(job.startDate)} - ${
        formatDate(job.endDate) ?? 'Today'
      }`}</span>
      <h3 className="font-semibold text-md">{job.position}</h3>
      <div className="flex flex-row justify-between">
        <span className="text-sm text-gray-600">{job.company}</span>
        <span className="text-sm text-gray-600">{job.location}</span>
      </div>
      <p className="my-4">{job.summary}</p>
      {/* <div className="">
        {job?.skills?.map((skill) => (
          <Badge key={skill} skill={skill}></Badge>
        ))}
      </div> */}
    </li>
  );
};

const EducationItem: React.FC<{ school: Education }> = ({ school }) => {
  return (
    <li className="mb-10">
      <span className="text-sm text-gray-600">{`${formatDate(school.startDate)} - ${
        formatDate(school.endDate) ?? 'Today'
      }`}</span>
      <h3 className="font-semibold text-md">{`${school.studyType} in ${school.area}`}</h3>
      <div className="flex flex-row justify-between">
        <span className="text-sm text-gray-600">{school.institution}</span>
      </div>
    </li>
  );
};

const Home: React.FC = () => {
  return (
    <div className="w-full px-4 mt-12 md:max-w-4xl md:mx-auto">
      <Head>
        <title>{basics.name}</title>
        <script src="https://kit.fontawesome.com/b0e3781bbe.js" crossOrigin="anonymous"></script>
      </Head>
      <div className="grid grid-cols-5 gap-12">
        <aside className="flex-shrink-0 col-span-2">
          <div className="relative w-full bg-black" style={{ paddingTop: '100%' }}>
            <img
              src="/images/profile.jpeg"
              className="absolute w-40 h-40 mb-8 border-4 border-white rounded-full "
              alt={basics.name}
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </div>
          <div className="w-full mt-12">
            <Button onClick="/resume.pdf">Download</Button>
          </div>
          <section>
            <SectionTitle id="contact" title="Contact" />
            <ul>
              {basics.profiles.map((profile) => (
                <li key={profile.network}>
                  <a href={profile.url}>
                    <i className="w-12 fab fa-linkedin"></i>
                    <span>{profile.username}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <SectionTitle id="skills" title="Skills" />
            {skills.map((skill) => (
              <span key={skill.name}>{skill.name}</span>
            ))}
          </section>
        </aside>
        <main className="col-span-3">
          <h1 className="text-3xl font-bold uppercase">{basics.name}</h1>
          <p className="mt-2 text-xl uppercase">{basics.label}</p>
          <div className="w-32 h-1 mt-2 bg-black"></div>
          <section className="my-12">
            <p>{basics.summary}</p>
          </section>

          <section>
            <SectionTitle id="work-experience" title="Work Experience" />
            <ul>
              {work.map((job) => (
                <WorkItem key={job.company} job={job} />
              ))}
            </ul>
          </section>
          <section>
            <SectionTitle id="education" title="Education" />
            <ul>
              {education.map((school) => (
                <EducationItem school={school} key={school.area} />
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
