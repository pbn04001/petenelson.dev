export const isProd = (): boolean => (process.env || {}).REACT_APP_ENVIRONMENT === 'PROD'
export const isDev = (): boolean => process.env === undefined || (process.env || {}).REACT_APP_ENVIRONMENT === 'DEV'
