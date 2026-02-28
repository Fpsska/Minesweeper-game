type AppConfig = {
    APP_HIDE_FEATURES: boolean;
};

declare global {
    interface Window {
        _APP_CONFIG_: AppConfig;
    }
}

export {};
