---
id: treasury-tip
title: Treasury Tips
---

Similar to [opening a Treasury proposal](./03_treasury_proposal.md), anyone can start a tipping process.
Of course, success of such can only be expected if it is based on a meaningful contribution.
The variety of potential contributions is vast, please see our [Contribution guide](../develop/06_contribute.md) for more details.
There, you will also find a high level description of tips and the differences to Treasury proposals.

In the following, we will lead you through the necessary steps from requesting a tip to finally receiving it.

## Lifecycle of a Tipping Process

Since anyone can propose a tip, you can certainly do that for someone else, the **<span style={{background: '#7cd27c', color: 'black'}}>Beneficiary</span>**.
In that case, you, the <span style={{background: '#fff4bd', color: 'black'}}>**Finder**</span>, will need to put down a **minor deposit**, which depends on how long the "reason of the tip message" is, meaning how many characters form the reason why the tipping is being proposed.
Overall, you should expect to provide **between 0.05 to 0.2 KILT** as a deposit.
For example, if you provide a URL that includes 60 characters, the deposit would be around 0.07 KILT.

After a tip proposal is made, the set of tippers, which is elected by the KILT Council, come to consensus on how much should be paid.
Every member of this stakeholder group, the <span style={{background: '#c7fff9', color: 'black'}}>**Tippers**</span>, can submit an appropriate amount.
Eventually, the median of all tips is taken as the final amount.

Once at least half of the Tippers have declared their tip, the ending phase starts.
After 24 hours have passed, the tip is automatically closed and paid from the Treasury.
However, other Tippers can still submit their suitable amount and thus influence the final amount of the tip.
After payout, the original deposit is returned to the Finder.
The proposal will not be approved and paid out until at least half the tippers have voted with `Aye`. At any point before it is approved, the Finder can cancel the tip proposal and get back their deposit.

:::note No Finder's fees
While tipping allows a configurable percentage of the final tip to go to the original Finder, the current KILT configuration has set this fee to 0, meaning that the Finder's will thus not get rewarded for successful tips.
:::

<div className="kilt-mermaid">

```mermaid
flowchart TD
    %% Alice
    Alice(("Alice \n (Finder or Tipper)")):::Finder --> Alice_Finder{Is Finder?}:::Finder 
    Alice_Finder -.-> |Yes| Alice_Finder_Deposit(reserve deposit):::Finder
    Alice ----> |"Provide tipping reason  (URL/Polkassembly) and set target"|Beneficiary(("Bob \n (Beneficiary)")):::Beneficiary

    %% Tipping Start
    Beneficiary --> Tip_1_Start("Wait for tips"):::process
    Tip_1_Start --> Tip_2_Threshold{"More than 50% \n of Tippers tipped?"}:::process
    Tip_2_Threshold:::process  --> |No| Tip_1_Start

    %% Tipping End
    Tip_2_Threshold --> |Yes| Tip_3_End{{Start of Ending phase}}
    Tip_3_End:::processEnd --> Tip_4_Wait(Wait for blocks to pass)
    Tip_4_Wait:::processEnd --> Tip_5_Blocks{"TipCountdown: \n Sufficient number \n of blocks passed?"}
    Tip_5_Blocks:::processEnd --> |No| Tip_4_Wait

    %% Tipping close
    Tip_5_Blocks --> |Yes| Tip_6_Close(Trigger closing of tipping process):::Payment
    Tip_6_Close -.-> |"Unreserve Deposit \n (only if Finder)"| Alice_Finder_Deposit
    Tip_6_Close --> Payout_1("Final tip amount = median of received tips"):::Payment

    %% Treasury
    Payout_1 --> Payout_2{Is there a Finder's fee?}:::Payment
    Payout_2 --> |Yes| Payout_3(Reduce final tip amount by Finder's fee):::Payment
    Payout_2 --> |No| Payout_4[("💰 Treasury")]:::Payment
    Payout_3 --> Payout_4{{"Ready to pay out"}}
    Payout_4 --> Treasury[("💰 Wait for Spending Period \n of Treasury to end")]:::Payment
    Treasury ==> |"Receive tip"| Beneficiary
    Treasury -.-> |"Pay out Finder's fee"| Alice

    %% classes
    classDef Finder fill:#fff4bd,stroke:none;
    classDef process fill:#c7fff9,stroke:black;
    classDef processEnd fill:#6be6d8,stroke:black;
    classDef Beneficiary fill:#7cd27c,stroke:#333,stroke-width:0px;
    classDef Payment fill:#ff9393,stroke:black;
```

</div>

## Report Awesome

Proposing a tip much is simpler than opening a Treasury proposal.

<!-- TODO: Replace with images from Spiritnet, once it is live -->

![](@site/static/img/chain/tipping-navigation.png)

All you need to do is navigate to `Governance > Treasury > Tips` and hit the `+ Propose tip` button.

![](@site/static/img/chain/tipping-extrinsic.png)

1. Select your corresponding account as the extrinsic submitter (the *submit with account* field)
2. Provide the address you consider worthy of receiving a tip: (the *beneficiary* field)
3. Provide a reason (the *tip reason* field). This can either be some **descriptive words or a URL**. The latter should point to the contribution(s), e.g., the GitHub pull request, blog posts, translations or videos among other things. Please note that the tipping process is expected to fail if the reason is not recognizable.
4. Sign and submit the extrinsic (the *Propose tip* button)

## Example

Since tipping is a default Substrate feature which exists on Kusama and Polkadot among others, please have a look at the [Polkadot Wiki](https://wiki.polkadot.network/docs/learn-treasury#tipping) for a thorough example.
