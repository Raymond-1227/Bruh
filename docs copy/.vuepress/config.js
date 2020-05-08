module.exports = {
    title: "Raymond's Site",
    description: "Basically some informations about me (or related stuffs)",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "About Me", link: "/about/" },
            { text: "hackerman14", link: "https://hackerman14.tk" },
            { text: "GR8WP Design", link: "https://gr8wpdesign.com" },
        ],
        sidebar: {
            "/about/": [
                "",
                "bio",
                "hardware",
                "contacts",
                "donate",
                "links"
            ]
        }
    }
}
