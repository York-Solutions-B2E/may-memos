import {screen, render} from "@testing-library/react";
import {MemoEdit} from "./MemoEdit";

test('should render memo input comp passing onSubmit and memo data', () => {
    const _memo = 1
    const _onSubmit = 2

    let memoProp;
    let onSubmitProp;
    const _MemoInput = ({memo, onSubmit}) => {
        memoProp = memo;
        onSubmitProp = onSubmit;
        return <div>MOCK</div>
    }

    render(<MemoEdit memo={_memo} onSubmit={_onSubmit} _MemoInput={_MemoInput}/>)

    expect(screen.getByText("MOCK")).toBeInTheDocument()
    expect(memoProp).toBe(_memo);
    expect(onSubmitProp).toBe(_onSubmit)
})