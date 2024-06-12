import React from 'react'
import clsx from 'clsx'
import styles from './custom.module.css'
import ThemedImage from '@theme/ThemedImage'

const LogoText = ({ children, width, linkTo, alt, srcLight, srcDark }) => {

  return (
    <div className={clsx(styles.sideImage)}>
      <div className={clsx(styles.sideImageL)}>
        <a href={linkTo}>
          <ThemedImage
            width={width}
            alt={alt}
            sources={{
              light: srcLight,
              dark: srcDark,
            }}
          />
        </a>
      </div>
      <div className={clsx(styles.sideImageR)}>{children.props.children}</div>
    </div>
  )
}

export default LogoText
