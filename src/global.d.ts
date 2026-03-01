type AppConfig = {
    APP_PROFILE: 'default' | 'develop';
    APP_VERSION?: string;
    APP_HIDE_FEATURES?: boolean;
};

declare global {
    interface Window {
        _APP_CONFIG_: AppConfig;
    }
}

export {};
