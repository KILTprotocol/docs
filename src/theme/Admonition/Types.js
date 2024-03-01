import React from 'react'
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types'

function VersionLabel(props) {
  return (
    <div style={{ padding: 10, marginBottom: 10 }} class="alert alert--warning">{props.children}</div>
  )
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'version-label': VersionLabel,
}
export default AdmonitionTypes
