export async function main(credential) {
  const isCredentialValid = await credential.verify()
  console.log(`Is John Doe's credential valid? ${isCredentialValid}`)
  return isCredentialValid
}
