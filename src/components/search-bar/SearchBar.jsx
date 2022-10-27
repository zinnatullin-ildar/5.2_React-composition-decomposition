import SearchBarHelp from './elements/SearchBarHelp';
import SearchBarMenu from './elements/SearchBarMenu';
import SearchBarInput from './elements/SearchBarInput';

/**
 * Компонент для осуществления поиска
 * @param props - получает данные для отрисовки пунктов меню и подсказки
 * @returns {JSX.Element}
 * @constructor
 */

function SearchBar(props) {
    const { data } = props;

    const menuClick = (e) => {
        console.log(e.target, 'clicked')
    }
    const searchSubmit = (request) => {
        console.log(request);
    }

    return (
        <div className={'search-bar'}>
            <SearchBarMenu menuItems={data.menuItems} menuClick={menuClick} />
            <SearchBarInput onFormSubmit={searchSubmit} />
            <SearchBarHelp>
                <span className={'search-bar-help-title'}>
                    {data.helpTitle}
                </span>
                <a href="#" className={'search-bar-help-example'}>
                    {data.helpExample}
                </a>
            </SearchBarHelp>
            <div className={'search-bar-logo'} />
        </div>
    )
}

export default SearchBar;
