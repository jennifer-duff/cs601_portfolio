const header = Vue.createApp({
    el: "#header",
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