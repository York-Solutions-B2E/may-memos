

// export const ON_LOGIN = 'memos/ON_LOGIN';
export const ON_LOGIN_REQUEST = 'memos/ON_LOGIN_REQUEST';
export const ON_LOGIN_PASSED = 'memos/ON_LOGIN_PASSED';
export const ON_LOGIN_FAILED = 'memos/ON_LOGIN_FAILED';
export const ON_MEMO_ADD = 'memos/ON_MEMO_ADD';
export const ON_MEMO_DELETE = 'memos/ON_MEMO_DELETE';
export const ON_MEMO_SELECT = 'memos/ON_MEMO_SELECT';
export const ON_MEMO_EDIT = 'memos/ON_MEMO_EDIT';

const initState = {
    isLoggedIn: false,
    memoList: [],
    selectedMemo: null,
    loginPending: false,
    loginFailed: false
}

export function reducer(state = initState, action) {
    switch (action.type) {
        case ON_LOGIN_REQUEST:
            return {
                ...state,
                loginPending: true
            }

        case ON_LOGIN_PASSED:
            return {
                ...state,
                isLoggedIn: true,
                loginPending: false,
                loginFailed: false
            }

        case ON_LOGIN_FAILED:
            return {
                ...state,
                loginPending: false,
                loginFailed: true
            }

        case ON_MEMO_ADD:
            return {
                ...state,
                memoList: [
                    ...state.memoList,
                    action.memo
                ]
            }
        case ON_MEMO_DELETE:
            return {
                ...state,
                memoList: state.memoList.filter(cMemo => cMemo.id !== action.memo.id)
            }
        case ON_MEMO_SELECT:
            return {
                ...state,
                selectedMemo: action.memo
            }
        case ON_MEMO_EDIT:
            return {
                ...state,
                selectedMemo: null,
                memoList: state.memoList.map((memo) => {
                    if (action.memo.id === memo.id) {
                        return action.memo
                    }

                    return memo
                })
            }
        default:
            return {
                ...state
            }
    }
}

// side effects - asynchronous actions
export function initiateLogin(creds) {
    return async function sideEffect(dispatch) {
        dispatch({type: ON_LOGIN_REQUEST}) // notify the fe code that we are waiting to see if our creds were correct

        const controller = new AbortController()

        // 5 second timeout:
        const timeoutId = setTimeout(() => controller.abort(), 5000)

        const response = await fetch(`http://localhost:8080/login?username=${creds.username}&password=${creds.password}`, { signal: controller.signal })

        if (response.ok)
            dispatch({type: ON_LOGIN_PASSED})
        else
            dispatch({type: ON_LOGIN_FAILED})
    }
}