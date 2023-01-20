/* eslint-disable @typescript-eslint/no-unused-vars */

export function main(
  submissions: Map<string, number>,
  MAX_ACCEPTED_AGE: number
) {
  setInterval(() => {
    const outdatedTimestamp = Date.now() - MAX_ACCEPTED_AGE
    submissions.forEach((timestamp, hash) => {
      if (timestamp < outdatedTimestamp) submissions.delete(hash)
    })
  }, 1000)
}
