import { v4 as uuid } from "uuid";
import NewsMenuItem from './NewsMenuItem';

/**
 * Компонент меню новостей
 * @param props - получает данные для ссылки меню и обработчик нажатия пункта меню
 * @returns {JSX.Element}
 * @constructor
 */

function NewsMenu(props) {
    const { menuItems, onClick } = props;

    return (
        <div className={'news-menu'}>
            <ul className={'news-menu-list'}>
                {menuItems.map(item =>
                    <li key={uuid()} className={'news-menu-item'}>
                        <NewsMenuItem title={item.title} onClick={onClick} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default NewsMenu;
