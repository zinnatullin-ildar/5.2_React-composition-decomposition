/**
 * Компонент отображающий дату
 */

function DateComponent(props) {
    let option = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
    };

    return (
        <div className={'date-component'}>
            {new Date().toLocaleString("ru", option)}
        </div>
    )
}

export default DateComponent;
