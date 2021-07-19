import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const featureRows = [
  [
    {
      title: 'Become a Collator',
      imageUrl: 'img/community.svg',
      link: 'docs/chain/collator',
      description: (
        <>
          Become a collator in for our Peregrine Testnet and later help
          decentralizing the KILT Blockchain.
        </>
      ),
    },
    {
      title: 'Workshop',
      imageUrl: 'img/expert.svg',
      link: 'docs/sdk/workshop/welcome',
      description: (
        <>
          Go through our workshop and explore the most fundamental features of
          the KILTprotocol.
        </>
      ),
    },
    {
      title: 'SDK Reference',
      imageUrl: 'img/tools.svg',
      link: 'docs/sdk/reference/identity',
      description: (
        <>
          Learn more about the SDK in detail.
        </>
      ),
    },
  ],
  [
    {
      title: 'Demo Client',
      imageUrl: 'img/catbox.svg',
      link: 'https://demo.kilt.io/',
      description: (
        <>
          Explore the KILTprotocol with our demo application. Claim attributes
          and verify your attestations.
        </>
      ),
    },
    {},
    {
      title: 'Whitepaper',
      imageUrl: 'img/whitepaper.svg',
      link: 'https://www.kilt.io/wp-content/uploads/2020/01/KILT-White-Paper-v2020-Jan-15.pdf',
      description: (
        <>
          Read up on the theoretical concepts and motivations behind the
          KILTprotocol.
        </>
      ),
    },
  ],
]

function Feature({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link to={useBaseUrl(link)}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  )
}

export default function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/about-kilt')}
            >
              About KILT
            </Link>
          </div>
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
