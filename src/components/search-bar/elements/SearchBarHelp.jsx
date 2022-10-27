/**
 * Компонент для отображения подсказки под строкой поиска
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

function SearchBarHelp(props) {
    const { children } = props;

    return (
        <div className={'search-bar-help'}>
            {children}
        </div>
    )
}

export default SearchBarHelp;
