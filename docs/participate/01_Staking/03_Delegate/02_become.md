---
id: join
title: Become a Delegator
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import StakingTxDisclaimer from '../_disclaimer_staking_tx.md';

In contrast to the rather difficult [path to become a collator candidate](../01_become_a_collator/01_overview.md), joining the delegator pool is rather simple.
Anyone can delegate to a collator candidate by staking at least 20 KILT and calling `parachainStaking -> joinDelegators`.

<StakingTxDisclaimer />

![](/img/chain/parachainStaking-joinDelegators.png)

1. Select the delegator's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the appropriate extrinsic: `parachainStaking -> revokeDelegation`
3. Select the `Id` option (the *MultiAddress (LookupSource) field*)
4. Select the collator account (the *Id: AccountId* field)
5. Choose the desired stake amount.
6. Sign and submit the extrinsic (the *Submit Transaction* button)

:::info
A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.
In the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing `0`s.
So, for instance, 1 KILT needs to be written as `1,000,000,000,000,000`, while 10,000 KILT would be written as `10,000,000,000,000,000,000`.
:::


## Happy path
If your chosen collator candidate has at least one empty slot in their delegation pool (out of 35 maximum slots at the time of writing), your delegation is successful and you immediately start receiving rewards each time the collator you delegated will produce a block.

<div className="kilt-mermaid">

```mermaid
flowchart TD
   A["Hold at least 20 KILT"] --> |"decide on candidate"| B("Collator Candidate chosen");
   B --> |"call extrinsic joinDelegators"| C{"Can delegate to target? \n Either \n 1. There are empty \n delegations or \n 2. You delegate more \n than another delegator"};
   C --> |yes| D("Delegating to a Collator Candidate")
   D --> |"Collator produces block"| E("Receive rewards")
    %% Styles
    A:::unstakedFreeKilt
    B:::preDelegationCheck
    C:::preDelegationCheck
    D:::activelyDelegating
    E:::activelyDelegating
    
    %% StyleDef
    classDef preDelegationCheck fill:#FFF4BD,stroke:none;
    classDef notDelegating fill:#F1C0B9, stroke:black, stroke-width:1px;;
    classDef unstakedFreeKilt fill:#85D2D0,stroke:black, stroke-width:1px;
    classDef activelyDelegating fill:#94C973,stroke:#333, stroke-width:2px;
    classDef preUnlockStaked fill:#F37970, stroke:black;
```
</div>

:::info
If your chosen collator fails to produce blocks, neither the collator itself nor their delegators receive rewards.
This can happen if they have connectivity issues or are not building blocks fast enough. 
:::

## Unhappy path 

If your collator candidate has a maxed out delegation pool, an upcoming delegator candidate must stake more than the current lowest delegator of that pool.
When that happens,

- The kicked delegator will be replaced by the delegator with a higher delegation immediately
- The kicked delegator's stake is prepared for unstaking as if they revoked the delegation (*see [revoking](#Revoking)*)
- A delegator needs to wait 7 days (in block time) to be able to unlock the stake.
Please note that it can take longer in real time as the block times assumes a constant block time of 12s which is not guaranteed.

<div className="kilt-mermaid">

```mermaid
flowchart TD
   A["Hold at least 20 KILT"] --> |"decide on candidate"| B("Collator Candidate chosen");
   B --> |"call extrinsic joinDelegators"| C{"Can delegate to target? \n Either \n 1. There are empty \n delegations or \n 2. You delegate more \n than another delegator"};
   C --> |no| C2{"Balance locked?\n e.g., previously delegated \n without unlocking?"}
   C2 --> |no| A

    %% Styles
    A:::unstakedFreeKilt
    B:::preDelegationCheck
    C:::preDelegationCheck
    C2:::notDelegating
    
    %% StyleDef
    classDef preDelegationCheck fill:#FFF4BD,stroke:none;
    classDef notDelegating fill:#F1C0B9, stroke:black, stroke-width:1px;
    classDef unstakedFreeKilt fill:#85D2D0,stroke:black, stroke-width:1px
```
</div>

<!-- TODO: Link round to Glossary -->
:::info
For now, an account can only delegate to one collator at any time!
Moreover, you can only (re-) delegate once per staking round, e.g., call `parachainStaking -> {joinDelegators, delegateAnotherCandidate}`.
:::
