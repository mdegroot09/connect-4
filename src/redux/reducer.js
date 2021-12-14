let initialState = {
    turnRed: true,
    winner: false
}

export function updateTurnRed(turnRed){
    return {
        type: 'UPDATE_TURNRED',
        payload: turnRed
    }
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
        case 'UPDATE_TURNRED':
            return {
                ...state,
                turnRed: payload
            }
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