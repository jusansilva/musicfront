export const getEnvOrThrow = <T extends Record<string, string>>(
  env: T,
): string => {
  const [envName, envValue] = Object.entries(env)[0]

  console.warn(envValue, `Missing environment variable ${envName}`)

  return envValue
}

export const getEnvOrDefault = <T extends Record<string, string | undefined>>(
  env: T,
  defaultValue: string,
): string => {
  const [, envValue] = Object.entries(env)[0]

  return envValue ?? defaultValue
}
