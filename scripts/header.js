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
    }
});

header.mount("#header");