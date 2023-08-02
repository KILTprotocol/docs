import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import ThemedImage from '@theme/ThemedImage'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const quickLinkRow = [
  [
    {
      title: 'What is KILT?',
      imageUrl: 'img/expert_light.svg',
      imageUrlDark: 'img/expert_dark.svg',
      link: 'docs/concepts/what-is-kilt',
      description: (
        <>
          Learn about KILT identity components and why they matter. Read on KILT
          credentials and what they provide.
        </>
      ),
    },
    {
      title: 'Quickstart',
      imageUrl: 'img/tools.svg',
      imageUrlDark: 'img/tools.svg',
      link: 'docs/develop/sdk/quickstart',
      description: (
        <>
          Start building with KILT. Issue and verify your first credential or
          set up an app.
        </>
      ),
    },
    {
      title: 'Built on KILT',
      imageUrl: 'img/apps-light.svg',
      imageUrlDark: 'img/apps-dark.svg',
      link: 'docs/develop/builtonkilt',
      description: (
        <>
          Explore the KILT ecosystem. Sign documents with DIDsign or receive
          credentials with SocialKYC.
        </>
      ),
    },
  ],
]

const useCases = [
  {
    title: 'Your Friendly Name for the Web',
    imageUrl: 'img/expert_light.svg',
    imageUrlDark: 'img/expert_dark.svg',
    link: 'https://w3n.id',
    description: (
      <>
        Claim your web3name! A unique, human readable name that can be used as an alias for your DID.
      </>
    ),
  },
  {
    title: 'Send Funds to Your DID',
    imageUrl: 'img/tools.svg',
    imageUrlDark: 'img/tools.svg',
    link: 'docs/develop/sdk/quickstart',
    description: (
      <>
        No need to remember long cryptic account addresses.
        Add a service endpoint to your DID that specifies where asset should be send to.
      </>
    ),
  },
  {
    title: 'Prove Your Public Identity',
    imageUrl: 'img/apps-light.svg',
    imageUrlDark: 'img/apps-dark.svg',
    link: 'docs/develop/builtonkilt',
    description: (
      <>
        Make sure that others know who you are when you comment on polkassembly or are a public figure in the polkadot ecosystem.
      </>
    ),
  },
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

function UseCaseImage({ title, imgUrl, imgUrlDark }) {

  return (<div className="text--center">
    <ThemedImage
      alt={title}
      className={styles.featureImage}
      sources={{
        light: imgUrl,
        dark: imgUrlDark,
      }}
    />
  </div>)
}

function UseCaseText({ title, description, link }) {

  return (<div className="text--center">
    <a href={useBaseUrl(link)} className={styles.featureLink}>
      <h3>{title}</h3>
    </a>
    <p>{description}</p>
  </div>)
}

function UseCase({ imageUrl, imageUrlDark, title, description, link, index }) {
  const imgUrl = useBaseUrl(imageUrl)
  const imgUrlDark = useBaseUrl(imageUrlDark)

  let text = (
    <div className={clsx('col col--8')}>
      {UseCaseText({ title, description, link })}
    </div>
  )

  let img = (
    <div className={clsx('col col--4')}>
      {imgUrl && (
        UseCaseImage({ title, imgUrl, imgUrlDark })
      )}
    </div>
  )

  return (<div className={clsx('row')}>
    {index % 2 == 0 && [text, img]}
    {index % 2 == 1 && [img, text]}
  </div>)
}


export default function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title="Docs"
      description="KILT Protocol documentation to learn about KILT concepts, how to build on KILT and how to participate in the KILT ecosystem."
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {quickLinkRow && quickLinkRow.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              {quickLinkRow.map((features, row_idx) => (
                <div className="row" key={row_idx}>
                  {features.map((props, idx) => (
                    <Feature key={`${row_idx}-${idx}`} {...props} />
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}
        {useCases && useCases.length > 0 && (
          <section className={styles.use_case}>
            <div className="container">
              <h1>Use Cases</h1>
              {useCases.map((useCaseProps, index) => (
                <UseCase key={index} index={index} {...useCaseProps} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}
