

export const ON_LOGIN = 'memos/ON_LOGIN';
export const ON_MEMO_ADD = 'memos/ON_MEMO_ADD';
export const ON_MEMO_DELETE = 'memos/ON_MEMO_DELETE';
export const ON_MEMO_SELECT = 'memos/ON_MEMO_SELECT';
export const ON_MEMO_EDIT = 'memos/ON_MEMO_EDIT';

const initState = {
    isLoggedIn: false,
    memoList: [],
    selectedMemo: null
}

export function reducer(state = initState, action) {
    switch (action.type) {
        case ON_LOGIN:
            return {
                ...state,
                isLoggedIn: action.creds.username === 'admin'
                    && action.creds.password === 'pass'
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