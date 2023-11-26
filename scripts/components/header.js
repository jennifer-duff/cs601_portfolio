const header = Vue.createApp({
    el: "#header",
    template: `
        <a href="index.html" class="logo">
            <img src="./assets/logos/full_logo.svg" alt="JDB Development logo">
        </a>
        <img id="menu-icon" src="./assets/menu_icon.svg" alt="menu">
        <nav>
            <ul class="menu">
                <li v-for="(href, pageName) in pages"><a :class="findCurrentPage(pageName)"
                        :href="href">{{pageName}}</a>
                </li>
            </ul>
        </nav>
    `,
    data() {
        return {
            currentPage: "home",
            pages: {
                "home": "index.html",
                "about": "about.html",
                "portfolio": "portfolio.html",
                "resume": "resume.html",
                "contact": "contact.html"
            }
        }
    },
    methods: {
        findCurrentPage: function (pageName) {
            return this.currentPage === pageName
                ? "current-page"
                : "";
        },
        isCurrentPage: function (pageName) {
            return this.currentPage === pageName;
        }
    }
});

header.mount("#header");