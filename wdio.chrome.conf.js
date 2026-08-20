import { config as baseConfig } from './wdio.conf.js'
export const config = {
    ...baseConfig,

    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
   
    capabilities: [{
          browserName: 'chrome',
    'goog:chromeOptions': {
        args: ['--headless', '--window-size=1366,768']
    },
    }
]}
