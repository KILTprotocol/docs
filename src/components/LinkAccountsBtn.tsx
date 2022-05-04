import React from 'react'
import { Btn } from './AccountLinking'
import { linkDidWithAccount } from '../utilities/linking-helpers'

interface Linking {
  account: any
}
export const LinkAccountsBtn = (props: Linking) => {
  const handleLinking = () => {
    linkDidWithAccount(
      props.account,
      'did:kilt:4qsQ5sRVhbti5k9QU1Z1Wg932MwFboCmAdbSyR6GpavMkrr3',
      props.account
    )
  }

  return <Btn onClick={() => handleLinking()}>Link Accounts</Btn>
}
