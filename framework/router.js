class Router {
    constructor(routes) {
        this.routes = routes;
        window.addEventListener("hashchange", this.handleRouteChange.bind(this));
        this.handleRouteChange();
    }

    handleRouteChange() {
        const path = window.location.hash.slice(1) || "/";
        const view = this.routes[path] || this.routes["/"];
        document.getElementById("app").innerHTML = view();
    }
}

