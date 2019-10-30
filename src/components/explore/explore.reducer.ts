import { Dispatch } from 'redux';
import { IAction } from '../../shared/reducers';

export const ACTION_TYPES = {
  COMPLETED: 'explore/COMPLETED',
  INCREASE_TYPE: 'explore/INCREASE_TYPE',
  STOP_ANIMATE: 'explore/STOP_ANIMATE',
  START_ANIMATE: 'explore/START_ANIMATE',
  RESET: 'explore/RESET'
};

export interface IExploreState {
  completed: boolean;
  isAnimating: boolean;
  typeCount: number;
}

const initialState: IExploreState = {
  completed: false,
  isAnimating: false,
  typeCount: 0
};

// Reducer
export default (state: IExploreState = initialState, action: IAction): IExploreState => {
  switch (action.type) {
    case ACTION_TYPES.COMPLETED:
      return {
        ...state,
        completed: true // action.payload.data
      };
    case ACTION_TYPES.START_ANIMATE:
      return {
        ...state,
        isAnimating: true // action.payload.data
      };
    case ACTION_TYPES.INCREASE_TYPE:
      return {
        ...state,
        typeCount: state.typeCount + 1
      };
    case ACTION_TYPES.STOP_ANIMATE:
      return {
        ...state,
        isAnimating: false
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

// Actions

export const completed = () => async (dispatch: Dispatch): Promise<IAction> => {
  const result = await dispatch({
    type: ACTION_TYPES.COMPLETED
  });

  return result;
};

export const startAnimate = () => async (dispatch: Dispatch): Promise<IAction> => {
  const result = await dispatch({
    type: ACTION_TYPES.START_ANIMATE
  });

  return result;
};

export const increaseType = () => async (dispatch: Dispatch): Promise<IAction> => {
  const result = await dispatch({
    type: ACTION_TYPES.INCREASE_TYPE
  });

  return result;
};

export const stopAnimate = () => async (dispatch: Dispatch): Promise<IAction> => {
  const result = await dispatch({
    type: ACTION_TYPES.STOP_ANIMATE
  });

  return result;
};

export const reset = (): IAction => ({
  type: ACTION_TYPES.RESET
});
