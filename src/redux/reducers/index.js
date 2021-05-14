import createAndGetDict from './createAndGetDict';
import deleteDict from './deleteDict';
import editDict from './editDict';
import enablesDict from './enableDict';
import visibiltiesDict from './visibiltiesDict';
import initialState from '../initial-state';


const reducer = (state = initialState, action) => {
    const bigDictionary = {
        ...createAndGetDict,
        ...deleteDict,
        ...editDict,
        ...enablesDict,
        ...visibiltiesDict
    }

    const updateStore = bigDictionary[action.type];
    if (!updateStore) return state;
    return updateStore(state, action);
}

export default reducer;