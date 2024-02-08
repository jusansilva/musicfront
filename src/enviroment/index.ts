import { getEnvOrDefault } from '../utils/envs'

const {
  REACT_APP_API_URL: ENV_API_URL,
  REACT_APP_AWS_SECRET_KEY: AWS_SECRET_KEY,
  REACT_APP_AWS_ACCESS_KEY,
  REACT_APP_AWS_BUCKET,
} = process.env

export const API_URL = getEnvOrDefault({ ENV_API_URL }, '')

export const AWS_ACCESS_KEY = getEnvOrDefault({ REACT_APP_AWS_ACCESS_KEY }, '')
export const AWS_ACCESS_SECRET_KEY = getEnvOrDefault({ AWS_SECRET_KEY }, '')
export const AWS_BUCKET = getEnvOrDefault({ REACT_APP_AWS_BUCKET }, '')
