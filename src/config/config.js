import defaultConfig from './default-config.json'
import customConfig from './custom-config.json'

export class Config {
    // eslint-disable-next-line class-methods-use-this
    tabbarParamsFromConfig(param){
        if (customConfig.TABBAR[param]){
            return customConfig.TABBAR[param]
        }
            // eslint-disable-next-line no-console
            console.warn(`Provide custom TABBAR ${  param}`)
        
        return defaultConfig.TABBAR[param]
    }

    // eslint-disable-next-line class-methods-use-this
    headerParamsFromConfig(param){
        if (customConfig.HEADER[param]){
            return customConfig.HEADER[param]
        }
            // eslint-disable-next-line no-console
            console.warn(`Provide custom HEADER ${  param}`)
        
        return defaultConfig.HEADER[param]
    }

    // eslint-disable-next-line class-methods-use-this
    splashParamsFromConfig(){
        if (customConfig.SPLASH){
            const config = { ...customConfig.SPLASH };

            if (config.background) {
                // eslint-disable-next-line import/no-dynamic-require
                config.background = require(`../assets/img/splash/${config.background}`);
            }

            if (config.logo) {
                // eslint-disable-next-line import/no-dynamic-require
                config.logo = require(`../assets/img/splash/${config.logo}`);
            }

            return config;
        }
            // eslint-disable-next-line no-console
            console.warn('Provide param "SPLASH" to custom config');
        
        return defaultConfig.SPLASH
    }

    // eslint-disable-next-line class-methods-use-this
    get showAddressBlock() {
        if (customConfig.DEFAULT_ADDRESS_BLOCK){
            return customConfig.DEFAULT_ADDRESS_BLOCK
        }
            // eslint-disable-next-line no-console
            console.warn('Provide DEFAULT_ADDRESS_BLOCK!')
        
        return defaultConfig.DEFAULT_ADDRESS_BLOCK
    }
}
