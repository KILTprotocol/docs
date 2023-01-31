import * as Kilt from '@kiltprotocol/sdk-js'
import {
  blake2AsU8a,
  keyExtractPath,
  keyFromPath,
  mnemonicGenerate,
  mnemonicToMiniSecret,
  naclBoxPairFromSecret,
  sr25519PairFromSeed,
} from '@polkadot/util-crypto';
import { Keypair } from '@polkadot/util-crypto/types';
import { generateAccount } from './generateAccount';

export function generateKeypairs(mnemonic = mnemonicGenerate()) {
  const { account } = generateAccount(mnemonic);
  // Authenticate presentations
  const authentication = {
    ...account.derive('//did//0'),
    type: 'sr25519',
  } as Kilt.KiltKeyringPair;

  // Key used to attest transacations
  const assertionMethod = {
    ...account.derive('//did//assertion//0'),
    type: 'sr25519',
  } as Kilt.KiltKeyringPair;
  // Key used for authority delgation
  const capabilityDelegation = {
    ...account.derive('//did//delegation//0'),
    type: 'sr25519',
  } as Kilt.KiltKeyringPair;

  // Used to encrypt and decrypt messages
  const keyAgreement: Kilt.NewDidEncryptionKey & Keypair = (function () {
    const secretKeyPair = sr25519PairFromSeed(mnemonicToMiniSecret(mnemonic));
    const { path } = keyExtractPath('//did//keyAgreement//0');
    const { secretKey } = keyFromPath(secretKeyPair, path, 'sr25519');
    return {
      ...naclBoxPairFromSecret(blake2AsU8a(secretKey)),
      type: 'x25519',
    };
  })();

  return {
    authentication: authentication,
    keyAgreement: keyAgreement,
    assertionMethod: assertionMethod,
    capabilityDelegation: capabilityDelegation,
  };
}
