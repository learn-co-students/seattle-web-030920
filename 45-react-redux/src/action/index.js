export const increaseVote = (id) => {
    return {
        type: "INCREASE_VOTE",
        payload: {
            id
        }

    }

}

export const decreaseVote = (id) => {
    return {
        type: "DECREASE_VOTE",
        payload: {
            id
        }

    }

}