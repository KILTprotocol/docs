import React, { useState } from 'react'
import styled from 'styled-components'
import {
  getFilteredAccounts,
  linkDidWithAccount,
} from '../utilities/linking-helpers'
import { MenuItem, InputLabel, Select, TextField } from '@mui/material'

export const Btn = styled.button`
  display: flex;
  width: 300px;
  margin-top: 50px;
  color: #ef5a28;
  margin-bottom: 10px;
  letter-spacing: 0;
  margin-bottom: 80px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #79797975;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  background: white;
  line-height: 18px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  @media (max-width: 400px) {
    font-size: 16px;
  }
  :hover {
    border-color: #ef5a28;
  }
`

const LinkBtn = styled(Btn)`
  margin-top: 30px;
`
const MUISelect = styled(Select)`
  height: 35px;
  color: #373737;
  width: 300px;
`
const MUIInputLabel = styled(InputLabel)`
  margin-top: 20px;
`
const MUITextField = styled(TextField)`
  width: 300px;
  margin-bottom: 20px;
  font-size: 12px;
`
export default function AccountLinking() {
  const [accounts, setAccounts] = useState<any[]>([])
  const [did, setDid] = useState<string>()
  const [error, setError] = useState<string>('')
  const [filteredAccounts, setFilteredAccounts] = useState<any[]>([])
  const [selectedAccount, setSelectedAccount] = useState<string>()
  const [selectedFilteredAccount, setSelectedFilteredAccount] =
    useState<string>()

  const loadWallets = async () => {
    const { allAccounts, filteredAccounts } = await getFilteredAccounts()
    setAccounts(allAccounts)
    setFilteredAccounts(filteredAccounts)
  }
  const handleLinking = async () => {
    !did && setError('Did required')
    await linkDidWithAccount(selectedAccount, did, selectedFilteredAccount)
  }
  const handleChange = (e) => {
    setSelectedAccount(e.target.value)
  }
  const handlePayerChange = (e) => {
    setSelectedFilteredAccount(e.target.value)
  }

  return (
    <>
      <Btn onClick={() => loadWallets()}>Connect to wallet</Btn>
      <MUITextField
        id="outlined-basic"
        label="Enter DID"
        variant="outlined"
        size="small"
        onChange={(e) => setDid(e.target.value)}
        error={error.length !== 0}
      />

      <MUIInputLabel
        id="accounts-select-label"
        disabled={accounts.length === 0}
      >
        Choose linking account
      </MUIInputLabel>
      <MUISelect
        labelId="accounts-select-label"
        id="accounts-simple-select"
        label="Accounts"
        onChange={handleChange}
        disabled={accounts.length === 0}
        defaultValue=""
      >
        {accounts.map((account) => (
          <MenuItem key={account.meta.name} value={account.address}>
            {account.meta.name} ({account.meta.source})
          </MenuItem>
        ))}
      </MUISelect>
      <MUIInputLabel
        id="payer-accounts-select-label"
        disabled={filteredAccounts.length === 0}
      >
        Choose payer account
      </MUIInputLabel>
      <MUISelect
        labelId="payer-accounts-select-label"
        id="payer-accounts-simple-select"
        onChange={handlePayerChange}
        disabled={filteredAccounts.length === 0}
        defaultValue=""
      >
        {filteredAccounts.map((account) => (
          <MenuItem key={account.meta.name} value={account.address}>
            {account.meta.name} ({account.meta.source})
          </MenuItem>
        ))}
      </MUISelect>
      <LinkBtn onClick={() => handleLinking()}>Link Accounts</LinkBtn>
    </>
  )
}
