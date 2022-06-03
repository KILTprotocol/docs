/* eslint-disable @typescript-eslint/no-unused-vars */

export async function main(): Promise<void> {
  const MAX_ACCEPTED_AGE = 60_000 // ms -> 1 minute
  const MIN_ACCEPTED_AGE = -1_000 // allow for some imprecision in system time
  const submissions = new Map<string, number>()
}
