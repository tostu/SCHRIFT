<svelte:head>
    <link
        rel="stylesheet"
        id="silktide-consent-manager-css"
        href="/silktide-consent-manager.css"
    />
    <script src="/silktide-consent-manager.js"></script>
    <script>
        window.addEventListener("load", function () {
            if (typeof silktideCookieBannerManager !== "undefined") {
                silktideCookieBannerManager.updateCookieBannerConfig({
                    background: {
                        showBackground: false,
                    },
                    cookieIcon: {
                        position: "bottomLeft",
                    },
                    cookieTypes: [
                        {
                            id: "google-fonts",
                            name: "Google Fonts",
                            description:
                                "<p>These cookies are necessary for the website to function properly</p>",
                            required: false,
                        },
                    ],
                    text: {
                        banner: {
                            description:
                                '<p>Google Fonts are used for key functions on this website. <a href="https://your-website.com/cookie-policy" target="_blank">Cookie Policy.</a></p>',
                            acceptAllButtonText: "Accept",
                            acceptAllButtonAccessibleLabel: "Accept",
                            rejectNonEssentialButtonText: "Reject",
                            rejectNonEssentialButtonAccessibleLabel: "Reject ",
                            preferencesButtonText: "Preferences",
                            preferencesButtonAccessibleLabel:
                                "Toggle preferences",
                        },
                        preferences: {
                            title: "Customize your cookie preferences",
                            description:
                                "<p>We respect your right to privacy. You can choose not to allow anything but the website won't work properly without it</p>",
                            creditLinkText: "Get this banner for free",
                            creditLinkAccessibleLabel:
                                "Get this banner for free",
                        },
                    },
                    position: {
                        banner: "center",
                    },
                });
                console.log("Cookie banner initialized successfully");
            } else {
                console.error("silktideCookieBannerManager not found");
            }
        });
    </script>
</svelte:head>
