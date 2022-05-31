import {MemoInput} from "../memo-input/MemoInput";

export function MemoEdit({memo, onSubmit, _MemoInput = MemoInput}) {
    console.log(memo)
    return <_MemoInput memo={memo} onSubmit={onSubmit}/>
}