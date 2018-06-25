import Actions from './Actions';

const getInitialState = () => ({
        selection: ''
});

const setState = (previousState, property, newValue) => Object.assign({}, previousState, {
        [property]: newValue
});

export default (state = getInitialState(), action) => {
    switch(action.type) {
        case Actions.requests.setTypeOfRequest:
            return setState(state, 'selection', action.data);
        default:
            return state;
    }
};