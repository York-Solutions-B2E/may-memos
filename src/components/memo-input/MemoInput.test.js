import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoInput} from "./MemoInput";

test('should show a input with type text with placeholder "Title"', () => {
    render(<MemoInput/>)

    const input = screen.getByPlaceholderText('Title');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
})

test('should show a input with type text with placeholder "Description"', () => {
    render(<MemoInput/>)

    const input = screen.getByPlaceholderText('Description');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
})

test('should show a input with type date with placeholder "Date"', () => {
    render(<MemoInput/>)

    const input = screen.getByPlaceholderText('Date');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'date');
})

test('should show label with text "Finished"', () => {
    render(<MemoInput/>)
    const label = screen.getByText("Finished:");
    expect(label).toBeInTheDocument()
})

test('should show a input with type checkbox', () => {
    render(<MemoInput/>)
    const input = screen.getByRole('checkbox');
    expect(input.tagName).toBe('INPUT');
})

test('should set the finished checkbox check property to the correct value (true)', () => {
    render(<MemoInput memo={{finished: true}}/>)
    const input = screen.getByRole('checkbox');
    expect(input).toHaveProperty('checked', true)
})

test('should set the finished checkbox check property to the correct value (false)', () => {
    render(<MemoInput memo={{finished: false}}/>)
    const input = screen.getByRole('checkbox');
    expect(input).toHaveProperty('checked', false)
})

test('should show a button with text "Submit"', () => {
    render(<MemoInput/>)
    const button = screen.getByText("Submit");
    expect(button.tagName).toBe("BUTTON");
})

test('should run onSubmit prop when "Submit" button is clicked passing the user input', () => {
    const _onSubmit = jest.fn()
    render(<MemoInput onSubmit={_onSubmit}/>)

    const userInput = {
        title: 'my title',
        desc: 'my desc',
        date: '2022-02-02',
        finished: true
    }

    const title = screen.getByPlaceholderText('Title');
    const desc = screen.getByPlaceholderText('Description');
    const date = screen.getByPlaceholderText('Date');
    const finished = screen.getByRole('checkbox');
    const button = screen.getByText("Submit");

    userEvent.type(title, userInput.title)
    userEvent.type(desc, userInput.desc)
    userEvent.type(date, userInput.date)
    userEvent.click(finished)
    userEvent.click(button)

    expect(_onSubmit).toHaveBeenCalledWith({
        ...userInput,
        date: new Date(userInput.date)
    })
})