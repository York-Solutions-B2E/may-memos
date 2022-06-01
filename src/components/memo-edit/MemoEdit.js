import {MemoInput} from "../memo-input/MemoInput";
import {useDispatch, useSelector} from "react-redux";
import {ON_MEMO_EDIT} from "../../modules/memos";

export function MemoEdit({_MemoInput = MemoInput}) {

    const memo = useSelector(state => state.selectedMemo)

    const dispatch = useDispatch();
    return <_MemoInput memo={memo} onSubmit={memo =>
        dispatch({type: ON_MEMO_EDIT, memo})
    }/>
}