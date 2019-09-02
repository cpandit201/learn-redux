
export const signInReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            return state = true;
        default:
            return state;
    }
}
