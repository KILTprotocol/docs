import React from 'react'
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types'

function VersionLabel(props) {
  return (
    <span style={{ border: 'solid black', padding: 10 }}>{props.children}</span>
  )
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'version-label': VersionLabel,
}
export default AdmonitionTypes
