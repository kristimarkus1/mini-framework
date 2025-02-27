class Router {
    constructor(routes) {
        this.routes = routes;
        window.addEventListener("hashchange", () => this.loadRoute());
        this.loadRoute();
    }

    loadRoute() {
        const path = window.location.hash.replace("#", "") || "/";
        const view = this.routes[path] || this.routes["/404"];
        document.getElementById("app").innerHTML = view();
    }
}
