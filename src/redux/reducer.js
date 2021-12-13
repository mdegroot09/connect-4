let initialState = {
    winner: false
}

export function updateWinner(winner){
    return {
        type: 'UPDATE_WINNER',
        payload: winner
    }
}

export default function reducer(state=initialState, action){
    const {type, payload} = action
    switch (type){
        case 'UPDATE_WINNER':
            return {
                ...state,
                winner: payload
            }
        default: 
            return {
                ...state
            }
    }
}