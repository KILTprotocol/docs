import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { LinkAccountsBtn } from './LinkAccountsBtn'
import { SelectPayerAccountDropdown } from './SelectPayerAccountDropdown'

interface Style {
  borderRadius?: boolean
  open?: boolean
}
interface Wallet {
  accounts: any[]
  filteredKiltAccounts: any[]
}

const SelectContainer = styled.div`
  display: flex;
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  letter-spacing: 0;
  max-width: 400px;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const Selection = styled.div`
  height: 38px;
  width: 90%;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const OptionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-width: 555px;
  background-color: white;
  margin-top: -10px;
  border-radius: 0 0 15px 15px;
`
const OptionsWrapper = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 2px;
  background-color: grey;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: green;
  }
`
const Options = styled.div`
  height: 58px;
  width: 90%;
  display: flex;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`

export const SelectAccountDropdown = (props: Wallet) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [selectedAccount, setSelectedAccount] = useState<any>()
  const [selectedText, setSelectedText] = useState<string>('Choose Account')

  const openOptionsMenu = async () => {
    if (!props.accounts.length) return
    if (showOptions) setShowOptions(false)
    else setShowOptions(true)
  }
  const selectOptions = (account: any) => {
    setSelectedAccount(account)
    setSelectedText(`${account.meta.name} (${account.meta.source})`)
    setShowOptions(false)
  }
  return (
    <>
      <Container>
        <SelectContainer onClick={() => openOptionsMenu()}>
          <Selection>{selectedText}</Selection>
        </SelectContainer>
        {showOptions && (
          <OptionBoxContainer>
            {props.accounts.map((account, index) => (
              <OptionsWrapper
                key={account.address}
                onClick={() => selectOptions(account)}
              >
                <Options>
                  {account.meta.name} ({account.meta.source})
                </Options>
              </OptionsWrapper>
            ))}
          </OptionBoxContainer>
        )}
      </Container>
      <SelectPayerAccountDropdown accounts={props.filteredKiltAccounts} />
    </>
  )
}
