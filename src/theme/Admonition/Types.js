import React from 'react'
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types'
import { nodeVersions } from '@site/src/versions'

function VersionLabel(props) {
  const supportMatrix = {}
  const feature = props.title
  for (const [key, value] of Object.entries(nodeVersions)) {
    let version = key
    let featureArray = Object.values(value['features'])
    for (const [key, value] of Object.entries(featureArray)) {
      if (feature in value) {
        supportMatrix[version] = value
      }
    }
  }

  return (
    <div style={{ padding: 10, marginBottom: 10 }} class="alert alert--warning">
      <div className="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module">
        {props.title} feature support
      </div>
      <div>
        {Object.entries(supportMatrix).map(([version, network]) => (
          <li>
            {version} {network[feature]}
          </li>
        ))}
      </div>
    </div>
  )
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'version-label': VersionLabel,
}
export default AdmonitionTypes
