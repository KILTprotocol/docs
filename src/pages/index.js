import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import ThemedImage from '@theme/ThemedImage'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const featureRows = [
  [
    {
      title: 'Become a Collator',
      imageUrl: 'img/community_light.svg',
      imageUrlDark: 'img/community_dark.svg',
      link: 'docs/chain/collator',
      description: (
        <>Become a collator and help decentralizing the KILT Blockchain.</>
      ),
    },
    {
      title: 'Workshop',
      imageUrl: 'img/expert_light.svg',
      imageUrlDark: 'img/expert_dark.svg',
      link: 'docs/sdk/workshop/welcome',
      description: <>Claim, Attest and verify in our SDK workshop.</>,
    },
    {
      title: 'Whitepaper 2020',
      imageUrl: 'img/whitepaper_light.svg',
      imageUrlDark: 'img/whitepaper_dark.svg',
      link: 'https://www.kilt.io/wp-content/uploads/2020/01/KILT-White-Paper-v2020-Jan-15.pdf',
      description: (
        <>
          Read the original whitepaper. KILT evolved a lot since then, but the ideas and values are still part of our
          identity even though the technical details are outdated.
        </>
      ),
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
