const initialState = {
    name: 'Vitalii',
    balance: 2500
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_BALANCE': {
            const { balance } = action.payload;

            return {
                ...state,
                balance
            }
        }
            default:
                return state;
    }
}

export { user };

