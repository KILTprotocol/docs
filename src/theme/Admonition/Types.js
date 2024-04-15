import React from 'react'
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types'
import {nodeVersions} from '@site/src/versions'

function VersionLabel(props) {
  console.log(props.title)
  return (


    <div style={{ padding: 10, marginBottom: 10 }} class="alert alert--warning">
    <h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>
    <div>{props.children}</div>
  </div>
  )
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'version-label': VersionLabel,
}
export default AdmonitionTypes
