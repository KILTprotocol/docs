---
id: propose-tip
title: Propose a tip
---

Similar to [opening a Treasury proposal](./03_treasury_proposal.md), anyone can start a tipping process.
Of course, success of such can only be expected if it is based on a meaningful contribution.
The variety of potential contributions is vast, please see our [Contribution guide](../develop/06_contribute.md) for more details.
There, you will also find a high level description of tips and the differences to Treasury proposals.

In the following, we will lead you through the necessary steps from requesting a tip to finally receiving it.

## Lifecycle of a tipping process

Since anyone propose as tip, you can certainly do that for someone else, the **<span style={{background: '#7cd27c', color: 'black'}}>Beneficiary</span>**, as well.
In that case, you, the <span style={{background: '#fff4bd', color: 'black'}}>**Finder**</span>, will receive a **share of 20% of the final tip** if it is successful.
However, you also need to make a **minor deposit** which is dependent of the number of characters you provide for the reason.
Overall, you should expect between 0.05 to 0.2 KILT as deposit.
E.g., if you provide a URL which includes 60 characters, the deposit is expected to be around 0.07 KILT.

After proposing a tip, the KILT Council and a few other core contributors come to consensus on how much should be paid.
Every member of this stakeholder group, the <span style={{background: '#c7fff9', color: 'black'}}>**Tippers**</span>, can submit an appropriate amount.
Eventually, the median of all tips is taken as the final amount.

Once at least half of the Tippers have declared their tip, the ending phase starts.
After 24 hours in blocktime have passed, the tip is automatically closed and paid from the Treasury.
However, other Tippers can still submit their suitable amount and thus influence the final amount of the tip.
During payout, 20% of the tip is given to the Finder, as well as returning the deposit.
Albeit if the Finder is a member of the Tippers, the entire tip goes to the Beneficiary.

<div className="kilt-mermaid">

```mermaid
flowchart TD
    %% Alice
    Alice(("Alice \n (Finder or Tipper)")):::Finder --> Alice_Finder{Is Finder?}:::Finder 
    Alice_Finder -.-> |yes| Alice_Finder_Deposit(reserve deposit):::Finder
    Alice ----> |"provide tipping reason  (URL/Polkassembly) and set target"|Beneficiary(("Bob \n (Beneficiary)")):::Beneficiary

    %% Tipping Start
    Beneficiary --> Tip_1_Start("Wait for tips"):::process
    Tip_1_Start --> Tip_2_Threshold{"More than 50% \n of Tippers tipped?"}:::process
    Tip_2_Threshold:::process  --> |no| Tip_1_Start

    %% Tipping End
    Tip_2_Threshold --> |yes| Tip_3_End{{Start of Ending phase}}
    Tip_3_End:::processEnd --> Tip_4_Wait(Wait for blocks to pass)
    Tip_4_Wait:::processEnd --> Tip_5_Blocks{"TipCountdown: \n Sufficient number \n of blocks passed?"}
    Tip_5_Blocks:::processEnd --> |no| Tip_4_Wait

    %% Tipping close
    Tip_5_Blocks --> |yes| Tip_6_Close(Trigger closing of tipping process):::Payment
    Tip_6_Close -.-> |"unreserve Deposit \n (only if Finder)"| Alice_Finder_Deposit
    Tip_6_Close --> Payout_1("Final tip amount = median of received tips"):::Payment

    %% Treasury
    Payout_1 --> Payout_2{Is there a Finder's fee?}:::Payment
    Payout_2 --> |yes| Payout_3(Reduce final tip amount by Finder's fee):::Payment
    Payout_2 --> |no| Payout_4[("💰 Treasury")]:::Payment
    Payout_3 --> Payout_4{{"Ready to pay out"}}
    Payout_4 --> Treasury[("💰 Wait for Spending Period \n of Treasury to end")]:::Payment
    Treasury ==> |"receive tip"| Beneficiary
    Treasury -.-> |"pay out Finder's fee"| Alice

    %% classes
    classDef Finder fill:#fff4bd,stroke:none;
    classDef process fill:#c7fff9,stroke:black;
    classDef processEnd fill:#6be6d8,stroke:black;
    classDef Beneficiary fill:#7cd27c,stroke:#333,stroke-width:0px;
    classDef Payment fill:#ff9393,stroke:black;
```

</div>

## Report awesome

Proposing a tip much is simpler than opening a Treasury proposal.

<!-- TODO: Replace with images from Spiritnet, once it is live -->

![](/img/chain/tipping-navigation.png)

All you need to do is navigate to `Governance > Treasury > Tips` and hit the `+ Propose tip` button.

![](/img/chain/tipping-extrinsic.png)

1. Select your corresponding account as the extrinsic submitter (the *submit with account* field)
2. Provide the address you consider worthy of receiving a tip: (the *beneficiary* field)
3. Provide a reason (the *tip reason* field). This can either be some **descriptive words or a URL**. The latter should point to the contribution(s), e.g., the github pull request, blog posts, translations or videos among other things. Please note that the tipping process is expected to fail if the reason is not recognizable.
4. Sign and submit the extrinsic (the *Propose tip* button)

## Example

Since tipping is a default Substrate feature which exists on Kusama and Polkadot among others, please have a look at the [Polkadot Wiki](https://wiki.polkadot.network/docs/learn-treasury#tipping) for a thorough example.
