export async function main(credential) {
  const verifiedCrdential = await credential.verify()

  console.log(`Is John Doe's credential valid: ${verifiedCrdential}`)
}
