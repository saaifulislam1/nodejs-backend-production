import DotenvFlow from 'dotenv-flow'
import config from './config/config'

DotenvFlow.config()
console.log(config.SERVER_URL)
