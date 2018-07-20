export const requestArticles = () => {
  return {
    type: 'STRATEGY_REQUEST_ARTICLES',
  }
}

export const receiveArticles = (json) => {
  return {
    type: 'STRATEGY_RECEIVE_ARTICLES',
    articleData: json,
    receivedAt: Date.now()
  }
}

export const fetchArticlesIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchArticles(getState())) {
      return dispatch(fetchArticles())
    }
    else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

function shouldFetchArticles(state) {
  let shouldFetch = false
  if(state.application.isStrategyFetching === false && state.application.hasStrategyFetched === false)
    shouldFetch = true

  if(true === shouldFetch)
    return true
  else
    return false
}

function fetchArticles() {
  return dispatch => {
    dispatch(requestArticles())
    return fetch('/api/v1/strategy')
      .then(response => response.json())
      .then(json => dispatch(receiveArticles(json)))
  }
}
