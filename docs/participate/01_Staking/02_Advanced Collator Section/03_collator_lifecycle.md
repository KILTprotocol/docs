---
id: lifecycle
title: Lifecycle of a collator
---

The following diagram visualizes the full lifecycle of a collator from owning free KILT to joining the collator candidate pool, initiating the exit, waiting for the stake to be unlockable and eventually unlocking their bond.
It summarizes the previous [exit](./02_exit.md) section.

<div className="kilt-mermaid">

```mermaid
flowchart TD
    A["Hold (at least) 10K KILT"] -->|join_candidates| B(Candidate)
    B --->|init_leave_candidates|I("Leaving Candidate\n(locked)")
    I ---> G{"2 Sessions (4h)\n passed?"}
    I -->|cancel_leave_candidates|B
    G -->|no|I
    G -->|yes|H("Leaving Candidate\n(unlocked)")
    H -->|execute_leave_candidates|J("Locked Balance")
    H -->|cancel_leave_candidates|B
    J --->K{"At least 7 days\npassed?"}
    K -->|yes|L("Balance with expired lock")
    K -->|no|J
    L -->|unlock_unstaked|A

    %% style assignement
    A:::unstakedFreeKilt
    B:::activeCollator
    I:::leavingLocked
    G:::leavingLocked
    H:::leavingUnlocked
    J:::leavingUnlocked
    K:::leavingUnlocked
    L:::stakedReleasableKilt

    %% style definition
    classDef leavingLocked fill:#FFF4BD,stroke:none;
    classDef leavingUnlocked fill:#F1C0B9, stroke:black, stroke-width:1px;;
    classDef unstakedFreeKilt fill:#85D2D0,stroke:black, stroke-width:1px;
    classDef activeCollator fill:#94C973,stroke:#333, stroke-width:2px;
    classDef stakedReleasableKilt fill:#F37970, stroke:black;
```

</div>