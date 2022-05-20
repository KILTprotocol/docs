import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import ThemedImage from '@theme/ThemedImage'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const featureRows = [
  [
    {
      title: 'Get Started',
      imageUrl: 'img/tools.svg',
      imageUrlDark: 'img/tools.svg',
      link: 'docs/develop/sdk/introduction',
      description: (
        <>Start building with the KILT Protocol. Verify your first credential, issue a credential or setup an app.</>
      ),
    },
    {
      title: 'What is KILT?',
      imageUrl: 'img/expert_light.svg',
      imageUrlDark: 'img/expert_dark.svg',
      link: 'docs/what-is-kilt',
      description: (
        <>Learn about decentralized identifiers and why they matter. Get to know attestations and what they provide.</>
      ),
    },
    {
      title: 'KILT in Action',
      imageUrl: 'img/apps-light.svg',
      imageUrlDark: 'img/apps-dark.svg',
      link: 'docs/develop/chain/deployments',
      description: <>Explore the KILT ecosystem. Sign documents with DIDsign or receive attestations with SocialKYC.</>,
    },
  ],
]

function Feature({ imageUrl, imageUrlDark, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl)
  const imgUrlDark = useBaseUrl(imageUrlDark)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <a href={useBaseUrl(link)} className={styles.featureLink}>
        {imgUrl && (
          <div className="text--center">
            <ThemedImage
              alt={title}
              className={styles.featureImage}
              sources={{
                light: imgUrl,
                dark: imgUrlDark,
              }}
            />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  )
}

export default function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={siteConfig.title} description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {featureRows && featureRows.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              {featureRows.map((features, row_idx) => (
                <div className="row" key={row_idx}>
                  {features.map((props, idx) => (
                    <Feature key={`${row_idx}-${idx}`} {...props} />
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}
