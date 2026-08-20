import { config as baseConfig } from './wdio.conf.js'
export const config = {
    ...baseConfig,
   
    capabilities: [{
          browserName: 'firefox',
          'moz:firefoxOptions': {
       args: ['-headless', '--width=1366', '--height=768']
    },
    }
    ]}