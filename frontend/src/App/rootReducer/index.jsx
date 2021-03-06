/**
 * Created by soufiaane on 7/8/17.
 */

import { routerReducer }          from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { combineReducers }        from 'redux';

import { authUserReducer } from '../../Authentication';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  authUser: authUserReducer,
});

export default rootReducer;
