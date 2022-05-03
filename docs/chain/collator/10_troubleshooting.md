## Troubleshooting

There are a few things that can be checked to make sure everything is set up correctly.

If, from any network explorer, e.g., the one offered by PolkadotJS Apps, the collator's account is shown next to some of the blocks, then the collator is correctly producing blocks and getting rewarded for it.
If the logs print the message that starts with a :gift: emoji, it indicates that the collator setup is correct but that the blocks produced are not included by the relaychain.
This typically signals some issues about the node hardware or connectivity.
If not, it might be that the node does not produce and send blocks fast enough.
This can be caused by slow hardware or a slow internet connection.
Also, note that a high bandwidth connection can still be slow if it has a high ping!
Bandwidth and latency do not necessarily come hand in hand.
In this case, it is better to rule out other options before thinking to upgrade the collator's hardware.

1. Check that the session keys are associated with the validatorId (aka AccountId). There should be a 32 Byte long public key stored in `session > nextKeys(your AccountId)`.
2. Check that the node has the corresponding private key for the public session key. Connect to the node and query `author > hasKey(<pubKey from 1.>, aura)` to see if it returns `true`.
3. Check that the node is fully synced with the relaychain & parachain (best and finalised block number is equal to the one shown in the PolkadotJS Apps ([wss://spiritnet.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fspiritnet.kilt.io#/explorer), [wss://peregrine.kilt.io/parachain-public-ws](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer)) and on Subscan ([Spiritnet](https://spiritnet.subscan.io/), [Peregrine](https://kilt-testnet.subscan.io/)).
4. Check that the collator is among the selected candidates. Its address should included in the list returned by querying `parachainStaking > topCandidates()`.
5. Check that the `parachainStaking` pallet has registered the collator's address among the authorised authors in the `session`. Its address should be listed when querying `session > validators()`.