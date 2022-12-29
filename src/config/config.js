import defaultConfig from './default-config.json'
import customConfig from './custom-config.json'

export default class Config {
    constructor() {
        this.defaultConfig = defaultConfig;
        this.customConfig = customConfig;
    }

    tabbarParamsFromConfig(param){
        if (customConfig.TABBAR[param]){
            return customConfig.TABBAR[param]
        }
            // eslint-disable-next-line no-console
            console.warn(`Provide custom TABBAR ${  param}`)
        
        return this.defaultConfig.TABBAR[param];
    }

    headerParamsFromConfig(param){
        if (customConfig.HEADER[param]){
            return customConfig.HEADER[param]
        }
            // eslint-disable-next-line no-console
            console.warn(`Provide custom HEADER ${  param}`)
        
        return this.defaultConfig.HEADER[param]
    }

    splashParamsFromConfig(){
        if (customConfig.SPLASH){
            const config = { ...this.customConfig.SPLASH };

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
        
        return this.defaultConfig.SPLASH
    }

    get showAddressBlock() {
        if (customConfig.DEFAULT_ADDRESS_BLOCK){
            return customConfig.DEFAULT_ADDRESS_BLOCK
        }
            // eslint-disable-next-line no-console
            console.warn('Provide DEFAULT_ADDRESS_BLOCK!')
        
        return this.defaultConfig.DEFAULT_ADDRESS_BLOCK
    }
}
