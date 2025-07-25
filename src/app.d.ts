declare global {
  interface Window {
    handleAccept: () => void;
    handleReject: () => void;
    silktideCookieBannerManager: {
      updateCookieBannerConfig: (config: any) => void;
      getConsent?: (id: string) => boolean;
    };
  }

  // Or declare it globally
  declare const silktideCookieBannerManager: {
    updateCookieBannerConfig: (config: any) => void;
    getConsent?: (id: string) => boolean;
  };
}

export {};
