import {render, screen} from "@testing-library/react";
import {Memo} from "./Memo";
import userEvent from "@testing-library/user-event";

test(
    'should show title, desc, date, finished',
    () => {
        const memoData = {
            title: 'title',
            desc: 'desc',
            date: new Date('2022-12-02'),
            finished: true
        }

        render(<Memo memo={memoData}/>)
        expect(screen.getByText(memoData.title)).toBeInTheDocument()
        expect(screen.getByText(memoData.desc)).toBeInTheDocument()

        expect(
            screen.getByText(
                memoData.date.toString().substring(0, 15)
            )
        ).toBeInTheDocument()

        expect(screen.getByText('Finished')).toBeInTheDocument()
    }
)

test(
    'should show "Pending" when memo finished is false',
    () => {
        const memoData = {
            finished: false
        }
        render(<Memo memo={memoData}/>)
        expect(screen.getByText('Pending')).toBeInTheDocument()
    }
)

test(
    'should a button with the text "Edit"',
    () => {
        render(<Memo memo={{}}/>)
        const button = screen.getByText("Edit")
        expect(button.tagName).toBe("BUTTON")
    }
)

test(
    'should run onEditSelect prop when "Edit" button is clicked',
    () => {

        const memoData = {
            title: 'title',
            desc: 'desc',
            date: new Date('2022-12-02'),
            finished: true
        }

        const _onEditSelect = jest.fn();
        render(<Memo memo={memoData} onEditSelect={_onEditSelect}/>)
        const button = screen.getByText("Edit")
        userEvent.click(button);

        expect(_onEditSelect).toHaveBeenCalledWith(memoData)
    }
)

test(
    'should a button with the text "Delete"',
    () => {
        render(<Memo memo={{}}/>)
        const button = screen.getByText("Delete")
        expect(button.tagName).toBe("BUTTON")
    }
)

test(
    'should run onMemoDelete prop when "Delete" button is clicked',
    () => {

        const memoData = {
            title: 'title',
            desc: 'desc',
            date: new Date('2022-12-02'),
            finished: true
        }

        const _onMemoDelete = jest.fn();
        render(<Memo memo={memoData} onMemoDelete={_onMemoDelete}/>)
        const button = screen.getByText("Delete")
        userEvent.click(button);

        expect(_onMemoDelete).toHaveBeenCalledWith(memoData)
    }
)