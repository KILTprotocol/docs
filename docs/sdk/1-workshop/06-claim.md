---
id: claim
title: 💬 Claim
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/workshop/4_1_claim.js';
import Example2 from '!!raw-loader!../../../code-examples/workshop/4_2_claim.js';

In this section, you'll play the role of a <span class="label-role claimer">claimer</span>.

- You'll first make a claim about yourself in the form of a `Claim` object;
- But a claim in itself has no value.
  To become valid in the eyes of <span class="label-role verifier">verifiers</span>, it needs to be attested by an entity that <span class="label-role verifier">verifiers</span> trust: an <span class="label-role attester">attester</span>.
  So you'll create a `RequestForAttestation` object from your `Claim` object, sign it with the DID, so that an <span class="label-role attester">attester</span> can attest it.
- The claim will eventually be attested.

We'll look into the attestation in the next steps - for now, let's just focus on your claim.

> 💡 KILT is an open system.
> Anyone/anything can make a claim about themselves. But a claim only has value if the verifier trusts the attester.

## Create a file

Create a new file `claim.js`.
All of the code for this step needs to go into this file.

## Code: create a `Claim`

In the previous step, you've generated two mnemonics, DIDs and accounts.
You'll now need the first mnemonic you've created; it's referred to as `<claimerMnemonic>` in the code snippet below.

We'll create a claim using the provided CTYPE and the <span class="label-role claimer">claimer</span> account.  
Paste the following in `claim.js`.

<CodeBlock className="language-ts">
  {Example1}
</CodeBlock>

**Don't forget to add imports into the `index.js`**

## Code: create a `RequestForAttestation`

Once your claim will be built, you will want to sign it and prepare it for the <span class="label-role attester">attester</span>.
To do so, let's build a `RequestForAttestation` object from your `Claim`.

Now let's create a new file `requestForAttestaion.js` and paste the following code

<CodeBlock className="language-ts">
  {Example2}
</CodeBlock>

Add the following imports to your `main` function inside `index.js`:

## Run

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node index.js
```

This outputs all the previous code and now your `RequestForAttestation` object.

we'll need it in the next step to get it attested by an <span class="label-role attester">attester</span>.

:::info let others attest your claim

In a real-life setup, the different actors - claimer, attester and verifier - communicate with each other via a messaging system and can rely on the KILT SDK's messaging capabilities.

We don't need to do this here.

If you're following this tutorial on your own, you're playing all three KILT roles: claimer, attester and verifier. So you can simply copy the outputs of the different functions you're calling and use them as inputs for the other actors.

If you're following this as a workshop, you can simulate message exchange by exchanging your requests via chat, email, or simply by pasting requests for attestations or credentials in a shared document such as [this hackmd](https://hackmd.io/c6OBNgWWR8yWJhMj7WICUA?edit).

:::

OK, you've made a claim as a <span class="label-role claimer">claimer</span> and created a request for attestation.

Let's switch roles and get this attested!
