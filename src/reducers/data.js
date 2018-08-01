import schema from '../schemas/index';
import { fromJS } from 'immutable'; 
import { SEARCH_ENTITIES } from '../action-types/index';

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  friends: schema.result.friends,
  myPlaylists: schema.result.myPlaylists,
  search: '',
})

function data(state = initialState, action) {
  switch(action.type) {
    case SEARCH_ENTITIES: {
      return state.set('search', action.payload.query)
    }
    default:
      return state;
  }
}

export default data;