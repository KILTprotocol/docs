---
id: lifecycle
title: Lifecycle of a Delegator
---

The following diagram depicts the full lifecycle of a delegator from owning free KILT to delegating, losing a delegation seat, re-delegating and finally unlocking their stake.

It provides a summary of the detailed information provided in the preceding sections.

<div className="kilt-mermaid">

```mermaid
flowchart TD
   A["Hold at least 20 KILT"] --> |Choose candidate| B("Collator candidate chosen");
   B --> |"Call \n joinDelegators"| C{"Can delegate to target? \n Either \n 1. There are empty \n delegations or \n 2. You delegate more \n than another Delegator"};
   C --> |yes| D("Delegating to a collator candidate")
   C --> |no| C2{"Balance locked?\n e.g., previously delegated \n without unlocking?"}
   C2 --> |No| A
   C2 --> |Yes| G
   D --> |"Leave \n Delegators"| E("Not delegating")
   D --> |"Revoke \n delegation"| E
   D --> |"Your collator \n candidate leaves"| E
   E --> F{"Delegate to \n another candidate?"}
   F --> |Yes| B
   F --> |No| G("Locked tokens")
   G --> |Want to unlock| H{"Waited 7 days?"}
   H --> |yes| I("Balance with expired lock")
   H --> |no| F
   I --> |"Call \n unlockUnstaked"| A

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
    classDef preDelegationCheck fill:#FFF4BD, color:black, stroke:none;
    classDef notDelegating fill:#F1C0B9, color:black, stroke:black, stroke-width:1px;;
    classDef unstakedFreeKilt fill:#85D2D0, color:black, stroke:black, stroke-width:1px;
    classDef activelyDelegating fill:#94C973, color:black, stroke:#333, stroke-width:2px;
    classDef preUnlockStaked fill:#F37970, color:black, stroke:black;
```

</div>

