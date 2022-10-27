import { v4 as uuid } from "uuid";

/**
 * Меню над полем ввода значения для поиска
 * @param props - получает список элементов меню и обработчик события нажатия пункта меню
 * @returns {JSX.Element}
 * @constructor
 */

function SearchBarMenu(props) {
    const { menuItems, menuClick } = props;

    const menuClickHandler = (e) => {
        menuClick(e);
    }

    return (
        <div className={'search-bar-menu'}>
            <ul className={'search-bar-menu-list'}>
                {menuItems.map(item =>
                    <li key={uuid()} className={'search-bar-menu-item'}>
                        <a href={'/'} className={'search-bar-menu-link'} onClick={menuClickHandler}>
                            {item}
                        </a>
                    </li>
                )}
                <li key={uuid()} className={'search-bar-menu-item'}>
                    <a href={'/'} className={'search-bar-menu-link'}>
                        ещё
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SearchBarMenu;
