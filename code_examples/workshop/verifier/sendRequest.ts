const session = await getSession(apiWindow.kilt.sporran, 'sporran') // using sporran extension
const { sessionId } = session
//  listen for message from extension. Send message to backend and receive
//  credential and verification status.
await session.listen(async (message) => {
  try {
    const { credential, isAttested } = await verifyCredential(
      { message },
      sessionId
    )
  } catch (error) {
    console.error(error)
  }
})

// asking for requested credential from extension
const message = await requestCredential({ cType: requestedCType }, sessionId)

await session.send(message)
