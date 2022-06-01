import {MemoInput} from "../memo-input/MemoInput";
import {useDispatch} from "react-redux";
import {ON_MEMO_ADD} from "../../modules/memos";

export function MemoAdd({_MemoInput = MemoInput}) {
    const dispatch = useDispatch()
    function onSubmit(memo) {
        dispatch({
            type: ON_MEMO_ADD,
            memo
        })
    }

    return <_MemoInput onSubmit={onSubmit}/>
}