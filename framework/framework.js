class MyFramework {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.state = {};
        this.events = {};
    }

    createElement(tag, attrs = {}, children = []) {
        return { tag, attrs, children };
    }

    render(vdom, parent = this.root) {
        parent.innerHTML = "";
        const mount = (node, parentNode) => {
            const el = document.createElement(node.tag);
            for (let attr in node.attrs) {
                el.setAttribute(attr, node.attrs[attr]);
            }
            node.children.forEach(child => {
                if (typeof child === "string") {
                    el.appendChild(document.createTextNode(child));
                } else {
                    mount(child, el);
                }
            });
            parentNode.appendChild(el);
        };
        mount(vdom, parent);
    }
}

