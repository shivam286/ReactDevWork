import ExpenseDate from './component1'

function DateComponent(props){
    return(
    <div>
        <h2>Let's get started!</h2>
        <ExpenseDate date={props.date[0].month}></ExpenseDate>
        <ExpenseDate date={props.date[1].month}></ExpenseDate>
        <ExpenseDate date={props.date[2].month}></ExpenseDate>
    </div>
    );
}

export default DateComponent;