import { NavigationActions } from 'react-navigation';
import Navigator from '../../../routeConfig/routeConfig';

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export default function reducers(state=initialState, action) {
    const nextState = Navigator.router.getStateForAction(action, state);
    return nextState || state
};
