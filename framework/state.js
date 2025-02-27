class StateManager {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.listeners.forEach(callback => callback(this.state));
    }

    subscribe(callback) {
        this.listeners.push(callback);
    }
}
