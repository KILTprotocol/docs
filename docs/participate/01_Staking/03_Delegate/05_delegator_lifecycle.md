---
id: lifecycle
title: Lifecycle of Delegator
---

The following diagram depicts the full lifecycle of a delegator from owning free KILT to delegating, losing a delegation seat, re-delegating and finally unlocking their stake.

It summarizes all previous sections.
Thus, in case you are looking for more detailed information, please head back.

<div className="kilt-mermaid">

```mermaid
flowchart TD
   A["Hold at least 20 KILT"] --> |chose candidate| B("Collator Candidate chosen");
   B --> |"call \n joinDelegators"| C{"Can delegate to target? \n Either \n 1. There are empty \n delegations or \n 2. You delegate more \n than another delegator"};
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
   I --> |"call \n unlockUnstaked"| A

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
```

</div>

