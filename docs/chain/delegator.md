---
id: delegator
title: Become a delegator
---
## How to join

**Important: A candidate can only delegate `(join_delegators, delegate_another_candidate)` once per round!**

Anyone can delegate to a collator candidate by delegating at least 20 KILT and calling `join_delegators`.

![](https://i.imgur.com/rXSdGHe.png)

If the collator has a delegation pool reaching the maximum (30 at the time of writing), a delegator candidate must stake more than the lowest delegator.

- The kicked delegator will be replaced by the delegator with a higher delegation immediately.
- The kicked delegator's stake is prepared for unstaking as if they revoked the delegation (*see [revoking](#Revoking)*).
- A delegator needs to wait 7 days to be able to unlock the stake.

**An account can only delegate to one collator!**

## How to adjust your stake

A delegator can increase and decrease the stake by calling either  `delegator_stake_more` or `delegator_stake_less`.

**The candidate can not increase or decrease stake if leaving!**

![](https://i.imgur.com/5IFJ2bz.png)

![](https://i.imgur.com/kfdIZra.png)

`Developer -> Extrinsics -> parachainStaking`

1. Use the selected account: Select the Delegator Account.
2. Submit the following extrinsic: parachainStaking -> `delegator_stake_more` or `delegator_stake_less`.
3. Select the collator account: Choose the desired stake amount.

## How to revoke your stake

A delegator revokes their delegation by calling `revoke_delegation`, reducing the delegation by the full amount of the delegation.

![](https://i.imgur.com/nf5NgLs.png)

- The corresponding amount will be prepared for unstaking.
- Revoking a delegation does not count towards the limit of “1 delegation per round”.

## How to exit

An account can revoke all delegations at once by calling `leave_delegators`.

![](https://i.imgur.com/xemN4fu.png)

Once a collator candidate exits by calling `execute_leave_candidates`, all of their delegations are automatically removed and the corresponding amounts are prepared for unstaking.

## How to unlock unstaked tokens

![](https://i.imgur.com/holdTKq.png)

A revoking delegation has to wait 7 days before unlocking the staked amount back by executing `unlock_unstaked`.

## Lifecycle of a Delegator

The following diagram depicts the lifecycle of a delegator from owning free KILT to delegating, losing a delegation seat, re-delegating and finally unlocking their stake.

<Mermaid
chart={`flowchart TD
   A["Hold at least 20 KILT"] --> |chose candidate| B("Collator Candidate chosen")
   B --> |join_delegators| C{"Can delegate to target? \n Either \n 1. There are empty \n delegations or \n 2. You delegate more \n than another delegator"}
   C --> |yes| D("Delegating to a Collator Candidate")
   C --> |no| C2{"Balance locked?\n E.g. previously delegated \n without unlocking?"}
   C2 --> |no| A
   C2 --> |yes| G 
   D --> |"leave \n delegators"| E("Not delegating")
   D --> |"revoke \n delegation"| E
   D --> |"your collator \n candidate leaves"| E
   E --> F{"Delegate to \n another candidate?"}
   F --> |yes| B
   F --> |no| G("Locked tokens")
   G --> |want to unlock| H{"Waited 7 days?"}
   H --> |yes| I("Balance with expired lock")
   H --> |no| F
   I --> |unlock_unstaked| A

       %% Styles
    A:::unstakedFreeKilt
    B:::preDelegationCheck
    C:::preDelegationCheck
    C2:::notDelegating
    D:::activelyDelegating
    E:::notDelegating
    F:::notDelegating
    G:::preUnlockStaked
    H:::preUnlockStaked
    I:::preUnlockStaked
    
    %% StyleDef
    classDef preDelegationCheck fill:#FFF4BD,stroke:none;
    classDef notDelegating fill:#F1C0B9, stroke:black, stroke-width:1px;;
    classDef unstakedFreeKilt fill:#85D2D0,stroke:black, stroke-width:1px;
    classDef activelyDelegating fill:#94C973,stroke:#333, stroke-width:2px;
    classDef preUnlockStaked fill:#F37970, stroke:black;
  }
>