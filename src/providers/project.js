import axios from 'axios';
import React, { useContext, useReducer, useCallback } from 'react';
import urls from '../common/urls';
import { useAuth } from './auth';

export const SEARCH_REQUESTED = 'SEARCH_REQUESTED';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const SEARCH_SET_PARAMS = 'SET_SERACH_PARAMS';
export const SEARCH_MAKE_BASE_PRODUCT_QUEUE = 'SEARCH_MAKE_BASE_PRODUCT_QUEUE';
export const SET_ACTIVE_PRODUCT_INDEX = 'SET_ACTIVE_PRODUCT_INDEX';

export const BASE_PRODUCT_REQUESTED = 'BASE_PRODUCT_REQUESTED';
export const BASE_PRODUCT_SUCCESS = 'BASE_PRODUCT_SUCCESS';
export const BASE_PRODUCT_ERROR = 'BASE_PRODUCT_ERROR';

export const SUGGESTION_SEARCH_REQUESTED = 'SUGGESTION_SEARCH_REQUESTED';
export const SUGGESTION_SEARCH_SUCCESS = 'SUGGESTION_SEARCH_SUCCESS';
export const SUGGESTION_SEARCH_ERROR = 'SUGGESTION_SEARCH_ERROR';
export const SUGGESTION_SEARCH_SET_PARAMS = 'SUGGESTION_SEARCH_SET_PARAMS';

const initialState = {
  count: 0,
  products: [],
  suggestionSearchParams: {
    query: '',
    category_list: '',
    price__gt: 0,
    price__lt: 0,
    sort: '-date',
    page_size: 20,
  },
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUGGESTION_SEARCH_ERROR:
      return {
        ...state,
        suggestionSearchResults: [],
        suggestionSearchCount: 0,
        suggestionSearchError: action.payload.error,
        isSuggestionSearchLoading: false,
      };

    default:
      return state;
  }
};

const context = React.createContext();

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const { user } = useAuth();


  return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>;
};

const useProjectReducer = () => useContext(context);

export { ProjectProvider, useProjectReducer };
