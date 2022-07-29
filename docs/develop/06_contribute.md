---
id: contribute
title: Contribution Guidelines
---

As a decentralized network, KILT depends on the support of its community.
There are many ways to contribute to KILT Protocol and the products and services built on it. 
The following guide is to **help builders and contributors** find the resources needed to take action and work under the guidance of the core developers.

If you are interested in contributing but unsure how to begin, start in our [Clan KILT Discord](https://discord.gg/7uyfMXh6AT) channel.
The developers active there, which include the team that originally developed KILT, and the wider KILT community can:

- Provide feedback on proposals or ideas
- Discuss possible use cases and feature requests
- Make suggestions for non-technical contributions, including events, writing, or business models
- Answer questions about the protocol, services and products


## Feature Requests 

A feature request may be used to change the KILT Protocol and its services by adding new features or changing/removing existing ones.


A feature request is a meaningful way for anyone to contribute following the guidelines below:

 - Begin a discussion with the community to ensure most see the proposed feature adding real and meaningful value to KILT  Protocol, supporting its goals 
 - Open an Issue on the corresponding repository
 - Give your Pull Request a clear title
 - Provide a written outline of the feature request for discussion

After discussion, if the community agrees that the change should be implemented, the proposer may also submit a Treasury proposal to support the work.
The guidelines of how to do that are presented in the next section.

## Treasury Proposals

A Treasury proposal is a request to receive funds from the Treasury pool. 
The proposal should begin with a clear title, a written outline of the idea, and a discussion about implementation or deliverables as outlined above for feature requests. 
The proposal should be for something that changes or adds value to KILT in a meaningful way.

:::info
In general, a Treasury proposal spent occurs after completing all outlined deliverables and not before.
Thus, it is recommended to rather open multiple subsequent milestone-based proposals instead of a large one to fund contributions.
:::

In addition you should:

- Explain any milestones that have already been achieved
- Outline what needs to be done for the proposal to be completed

The proposal should then be discussed with the community (including, for example, the KILT Technical Committee, governance, or relevant project team) using community channels such as [Discord](https://discord.gg/7uyfMXh6AT) or [Polkassembly](https://kilt.polkassembly.network/discussions).
If the community is not in agreement with the proposal, it is unlikely that it would be approved by governance.
See the [guide to creating a proposal](../participate/03_treasury_proposal.md) for additional details.

## Tips

A more agile and lightweight process to receive rewards for contributing to the KILT Protocol are tips.
Even though the funds also come from the Treasury, the procedure is more hands-down.
The major difference compared to Treasury proposals is that for tips, determining the bounty amount is part of the course of tipping.
In other words, the final tip amount is not clear beforehand and the group of pre-determined stakeholders comes to consensus on how much should be paid.
Eventually, the median of proposed tips will be awarded from the Treasury.
Currently, the tippers include all Council members and other core code contributors.

Both proposals and tips are similar in the sense that there must be someone (called _Finder_) to open the tipping process by providing a reason in form of a URL or an explanation on [Polkassembly](https://kilt.polkassembly.network/).
In contrast to proposals, tips do not require an extensive document for that, e.g., a URL to the pull request or the blog post suffices.
In case the Finder is part of the group which decides about the bounty award, no deposit needs to be made.
Moreover, the beneficiary will receive the entire tip without any reductions.
Otherwise, a small deposit, which depends on the length of the message explaining the reason, is required to be reserved.
It will be made available after the tipping process has finished.
Additionally, the Finder also receives a minor Finder's fee of 20% which is subtracted from the final tip amount.

Therefore, **even if you are not a contributor, you can open a tipping process for someone else and receive a smaller portion of their potential reward**.
Of course, you can also suggest contributions to the council which would then tip if it is deemed worthy.

## Bug Reports

We try our best, but bugs are an everyday reality with all software and are bound to happen.
We can't fix bugs we don't notice, so your potential findings give us the best possibility to keep the project running smoothly and securely.

If you are unsure that a bug is a bug, it is best to open an issue and report it anyway.
The active developers will evaluate it and help to figure out the issue.

It is helpful to check if a report has already been filed in the related project.
Search the issues board for possible phrases that match the description of the bug.
It's possible you may not find an issue, but it's better to file a duplicated bug than not report one.

Once you begin reporting the bug, write a descriptive title so that if others find the same issue they can either add to your findings or know that the bug has already been reported.
A bug report should be as detailed as possible, including steps to reproduce, screenshots, error reports, or code snippets.
The more details you provide, the easier it is to fix the issue.

## Pull Requests

Pull Requests (PR) are an integral part of contributions to evolve KILT.
GitHub itself has some [excellent documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests) on using the Pull Request feature.
KILT uses the "[fork and pull](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)" model, where contributors push changes to their personal fork and create Pull Requests to bring those changes into the original source repository.

Before starting a PR, it’s best to contact other active developers and discuss the proposed changes.
Open an issue or directly contact some of the developers on [Discord](https://discord.gg/7uyfMXh6AT) to kick off the discussion and present the proposal.
Once approved, contributors can open a PR for review.
The PR will be reviewed and, if accepted, merged into the corresponding repository.

The following section is inspired by the Rust Programming Language [Bug Report](https://rustc-dev-guide.rust-lang.org/contributing.html) contribution guide.
