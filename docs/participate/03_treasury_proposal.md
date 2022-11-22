---
id: treasury-proposal
title: Open a Treasury Proposal
---

Complete these steps to create a well-formed Treasury proposal.

## Discuss

The first step in applying for a Treasury grant is either to join the community in the [Discord Treasury Channel](https://discord.gg/nUpqDfQ6kJ) to brainstorm the scope of your proposal intention or immediately open a discussion on [Polkassembly](https://kilt.polkassembly.network/discussions).
This will help you get valuable community feedback throughout the process.
It also gives Council members an open and transparent way to measure community sentiment.

## Deposit

A deposit of 5% of the amount requested is required in order to submit a proposal.
If the proposal is denied, you will lose this amount and it will go to the Treasury to fund other projects.
This is why it is essential to engage with the community and show how the proposed work adds value to the network.

## Proposal Document

To maximize your chances of success, create a full proposal document with as much information as possible to communicate the value of your work and what it will add to the network’s growth and success.
Check out our Treasury proposal template or Polkassembly’s [proposal document #6](https://docs.google.com/document/d/1NilDtFljCc6boyHkz2o2kGyFNhR6hVQSGzz7J0Xhwco/edit) as examples to help guide your process.

Once your proposal document is complete, upload it so that it’s accessible to the Council for review.
Don’t forget to link it when completing the Polkassembly information! 

## Submit Proposal

When you have feedback from the community and are satisfied with your proposal, head to [Polkadot.JS apps](https://polkadot.js.org/apps/?rpc=wss://spiritnet.api.onfinality.io/public-ws#/treasury)

Scroll to  the “+ Submit Proposal” button and click.
Complete the form:

* Submit with Account: this is the account that will make the 5% deposit 
* Beneficiary: this is the account that will receive Treasury funding if successful 
* Value: this is the full amount of KILT being requested
* Click submit to complete the proposal

## Polkassembly Details

Click the [Polkassembly](https://kilt.polkassembly.network/discussions) link to the right of the proposal on Polkadot.JS and connect with the account that you used to submit the proposal in order to be able to edit the proposal details.

Enter the following information:

* Title: a title for your project
* Purpose: what’s your motivation behind the effort
* Description: a short summary about you, the project and the need for what you are proposing
* Full Proposal: link to the full proposal
* Proposal Amount: the amount requested in USD
* KILT Rate: the current rate of exchange in USD
* Amount Requested: the total amount of KILT requested
* Beneficiary: the beneficiary address
* Period: intended date of delivery if applicable
* Contact: email or social handle (please specify social network)
* Engage
* Share your proposal in our channels to generate support from community and showcase your project (Discord, Telegram, Element, Twitter)

Click [here](https://www.kilt.io/treasury/overview/) to get an overview of the Treasury.
Or click [here](https://www.kilt.io/treasury/content-creation/) to see the guidelines for content creation.

## Illustration

The following diagram depicts the flow of a Treasury proposal from having an idea to receiving the funds in the beneficiary address.
While all nodes with yellow background represent <span style={{backgroundColor: "#FFF4BD", color: "black"}}>off-chain processes</span>, the remaining ones involve <span style={{backgroundColor: "#85D2D0", color: "black"}}>on-chain activity</span>.

<div class="kilt-mermaid">

```mermaid
flowchart TD
    %% nodes
    Proposer --> |"Share contribution idea"|Discuss("Polkassembly: \n kilt.polkassembly.network")
    Discuss --> |"Gather feedback"|Community
    Discuss --> |"Come to agreement about \n scope and financial objective"|Council
    Community --> |"Supports proposal"|Propose("Propose to chain")
    Council --> |"Approves pre-proposal"|Propose
    Propose --> |"reserve 5% of \n demanded amount \n"|Deposit
    Propose --> |"On Polkassembly, \n provide details in"|Document("Proposal document")
    Propose ----> |"Select address"|Beneficiary
    Document --> |"Start work"|Deliverables
    Deliverables --> |"Complete work"|Council_Review{"Council review"}
    Council_Review ----> Council_Approval("Council approval")
    Council_Review -...-> Council_Rejection("Council rejection")
    Council_Approval ----> |"Receive requested \n funds from Treasury"|Beneficiary
    Council_Approval ----> |Unreserve deposit|Deposit
    Council_Rejection -.-> |"Slash deposit \n to Treasury"|Deposit

    %% class mapping
    Proposer:::ofchain
    Discuss:::ofchain
    Community:::ofchain
    Council:::ofchain
    Propose:::onchain
    Document:::ofchain
    Deliverables:::ofchain
    Council_Review:::ofchain
    Council_Approval:::onchain
    Deposit:::onchain
    Council_Rejection:::onchain
    Beneficiary:::onchain

    %% styling classes
    classDef ofchain fill:#FFF4BD,stroke:black, stroke-width:1px;
    classDef onchain fill:#85D2D0,stroke:black, stroke-width:1px;
```

</div>