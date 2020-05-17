import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { basics, education, skills, work } from '../resume.json';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{basics.name}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{basics.summary}</p>
      </section>
      <section>
        <ul>
        {basics.profiles.map(profile => (
          <li>
            {`${profile.network} - ${profile.username}`}
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
  )
}