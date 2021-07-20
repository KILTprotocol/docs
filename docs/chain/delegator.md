# How to Start Delegator

[toc]

## How to Join

**Important: A candidate can only delegate `(join_delegators, delegate_another_candidate)` once per round!**

Anyone can delegate to a collator candidate by delegating at least 1.000 KILT and calling `join_delegators`.

![](https://i.imgur.com/rXSdGHe.png)

If the collator has a delegation pool reaching the maximum (25 at launch), a delegator candidate must stake more than the lowest delegator.

- That delegator will be replaced by the candidate immediately.
- The kicked delegators stake is prepared for unstaking as if revoking the delegation (*see [revoking](#Revoking)*).
- A delegator needs to wait 7 days to be able to unlock the stake.

**An account can only delegate to one collator!**

## Adjust Stake

A Delegator can increase and decrease the stake by calling either  `delegator_stake_more` or `delegator_stake_less`.

**The candidate can not increase or decrease stake if leaving!**

![](https://i.imgur.com/5IFJ2bz.png)

![](https://i.imgur.com/kfdIZra.png)

`Developer -> Extrinsics -> parachainStaking`

1. Using the selected account: Select the Delegator Account.
2. Submit the following extrinsic: parachainStaking -> delegator_stake_more or delegator_stake_less.
3. Selecting the Collator account: Choose the desired stake amount.

## Revoking

A delegator revokes the delegation by calling `revoke_delegation`, reducing the delegation by the full amount of the delegation.

![](https://i.imgur.com/nf5NgLs.png)

- The amount will be prepared for unstaking.
- Revoking a delegation does not count towards the limit of “1 delegation per round”.

## How to Exit

An account can revoke all delegations at once by calling `leave_delegators`.

![](https://i.imgur.com/xemN4fu.png)

Once the canditate exits, by delegation is removed and the amount is prepared for unstaking by calling `execute_leave_candidates`.

![](https://i.imgur.com/holdTKq.png)


A revoking delegation has to wait 7 days before collecting the staked amount back.
