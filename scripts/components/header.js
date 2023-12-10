const header = Vue.createApp({
    template: `
        <a href="index.html" class="logo">
            <img src="./assets/logos/full_logo.svg" alt="JDB Development logo" width="60%" height="auto">
        </a>
        <img id="menu-icon" src="./assets/menu_icon.svg" alt="menu" width="30px" height="auto">
        <nav>
            <ul class="menu">
                <li v-for="(href, pageName) in pages"><a :class="getClass(pageName)"
                        :onclick="handleNavClick">{{pageName}}</a>
                </li>
            </ul>
        </nav>
    `,
    data() {
        let data = {
            pages: {
                "home": "index.html",
                "about": "about.html",
                "portfolio": "portfolio.html",
                "resume": "resume.html",
                "contact": "contact.html"
            },
        };

        data["currentPage"] = this.getCurrentPage(data.pages);

        return data;
    },
    methods: {
        getClass: function (pageName) {
            return this.currentPage === pageName
                ? "current-page"
                : "";
        },
        getCurrentPage: function (pages) {
            var path = window.location.pathname;
            var file = path.split("/").pop();
            var pageName = Object.keys(pages).find(key => {
                return pages[key] === file
            });
            return pageName;
        },
        handleNavClick: function (event) {
            const newPage = event.target.innerText
            window.location.href = this.pages[newPage];
        }
    }
});

header.mount("#header");