const initialState = [];

const orders = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER': {
            const { order } = action.payload;

            return {
                ...state,
                order
            }
        }
            default:
                return state;
    }
}

export { orders };

