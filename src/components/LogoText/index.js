import React, { useEffect } from 'react'
import clsx from 'clsx'
import styles from './custom.module.css'
import ThemedImage from '@theme/ThemedImage'

const LogoText = ({ children, link_to, logo_light, logo_dark }) => {
  return (
    <div className={clsx(styles.sideImage)}>
      <div className={clsx(styles.sideImageL)}>
        <a href={link_to}>
          <ThemedImage
            width="150"
            alt="Web3Name Logo"
            sources={{
              light: logo_light,
              dark: logo_dark,
            }}
          />
        </a>
      </div>
      <div className={clsx(styles.sideImageR)}>{children}</div>
    </div>
  )
}

export default LogoText
