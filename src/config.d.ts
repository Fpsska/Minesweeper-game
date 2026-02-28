type AppConfig = {
    HIDE_FEATURES: boolean;
};

declare global {
    interface Window {
        _APP_CONFIG_: AppConfig;
    }
}

export {};
