export class SortingError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "SortingError"; // (2)
    }
}