export function increment(a) {
    return {
        type: "inc",
        payload: a
    }
}

export function decrement(a) {
    return {
        type: "dec",
        payload: a
    }
}