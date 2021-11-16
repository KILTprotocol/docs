---
id: verification-authenticity
title: 🥸 Verify the authenticity
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/workshop/7_1_verification-with-nonce.ts';
import Example2 from '!!raw-loader!../../../code-examples/workshop/7_2_verification-with-nonce.ts';

Did you notice anything wrong with our verification in the previous step?

Nothing? Let's see:

- You've checked that the `Credential` data is valid and you've verified that the corresponding attestation is on chain and not revoked. All good.

- But: are you sure that the entity/person that sent you the `Credential` owns it?
  What if a malicious actor stole this `Credential` and is now presenting it to you as theirs? We'll see how to mitigate this.

## Understand credential theft mitigation

To mitigate credential theft, a <span class="label-role verifier">verifier</span> can initiate a **cryptographic challenge** with a <span class="label-role claimer">claimer</span>.

The underlying idea is simple: to prove their DID, the <span class="label-role claimer">claimer</span> signs **on-the-fly** - that's important - a piece of data under the same DID as the DID associated with their `Credential`. By checking this signature's validity, the <span class="label-role verifier">verifier</span> makes sure that the `Credential` is owned by the person who just sent it.

What piece of data should be signed? It doesn't really matter; it can be an arbitrary number picked by the <span class="label-role verifier">verifier</span>. What matters is that this number should be used only once. Otherwise, the cryptographic challenge is worthless.

:::info Nonce

In a cryptographic communication, an arbitrary number that can be used just once is called a **nonce**.

:::

Here's how it works:

1. The <span class="label-role verifier">verifier</span> sends a nonce to the <span class="label-role claimer">claimer</span> as a challenge.
2. The <span class="label-role claimer">claimer</span> sends back a presentation of the credential with the nonce signed with their **encryption** key.
3. The <span class="label-role verifier">verifier</span> checks the following:
   - Does the signature on the nonce match the public key contained in the `Credential`? If so: the entity/person who just sent the `Credential` plus the signed nonce is also the owner of this `Credential`. If not: the `Credential` might be stolen.
   - Is the data valid? Is the attestation on-chain and not revoked? See the simple [Verification](verification) for more information about the validation logic.

OK, let's see this in action.

## As the <span class="label-role verifier">verifier</span>: create a nonce

To generate a random, unique piece of data, we'll use the Kilt SDK to generate secure nonces starting from a randomly generated [UUID].
The most important properties of nonces are **randomness** and **uniqueness**.

Create a new file `nonce.js`, and paste the following code into it:

```javascript
const Kilt = require('@kiltprotocol/sdk-js')

const nonce = Kilt.Utils.UUID.generate()
console.log('Nonce: ', nonce)
```

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node nonce.js
```

You should see in your logs the resulting HEX string that will be used as a nonce; it should look something like this: `0x942ab89b01671faeec84a76f4a8eae9b57ec12bf06157f8a87315cd29a5e0d25`.

Copy it, you'll need it in the next step.

## As the <span class="label-role claimer">claimer</span>: create the presentation, which will sign with the challenge and prepare the data

Let's put together the data you would send back to the <span class="label-role verifier">verifier</span>, as the <span class="label-role claimer">claimer</span>.

Create a new file `create-presentation.js`.

Paste the following code into it (make sure to replace `<nonce>` and `<credentialJSONString>` with the data you copied earlier):

<CodeBlock className="language-ts">
  {Example1}
</CodeBlock>

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node create-presentation.js
```

You should see in your logs the `dataToVerifyJSONString`, which is a string representation of the data to verify.

Copy it, you'll need it in the next step.

## As the <span class="label-role verifier">verifier</span>: verify the `presentation` and `credential`

Create a new file `verification-of-presentation.js`.

Paste the following code into it (make sure to replace `<dataToVerifyJSONString>` and `<nonce>` with the values obtained in the previous steps):

<CodeBlock className="language-ts">
  {Example2}
</CodeBlock>

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node verification-of-presentation.js
```

You should see in your logs that `isSenderOwner` is `true`: this means that the claimer presenting the `credential` is the same that owns it, so it has not been stolen or compromised.

Looking good!

You can also see what would happen when a malicious actor presents a stolen `credential` to a <span class="label-role verifier">verifier</span>. Try this out:

- Create another account and light DID, let's refer to it as Mallory (= malicious);
- Sign the presentation above with Mallory's light DID, hence creating a new `presentation`;
- Create a new `invalidDataToVerify` object with this new `presentation` and with Alice's `credential` we've been using so far;
- As a <span class="label-role verifier">verifier</span>, verify the `presentation` in `invalidDataToVerify` via `Kilt.Credential.verify`;
- You'll see that this verification will return `false`: the <span class="label-role verifier">verifier</span> will know that this credential is not owned by Mallory.

[uuid]: https://www.npmjs.com/package/uuid
