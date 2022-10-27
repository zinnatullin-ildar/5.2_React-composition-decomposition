import { v4 as uuid } from "uuid";
import NewsListItem from './NewsListItem';

/**
 * Компонент - список новостей
 * @param props - получает данные о ссылках на новости
 * @returns {JSX.Element}
 * @constructor
 */

function NewsList(props) {
    const { newsItems } = props;

    return (
        <div className={'news-list'}>
            <ul className={'news-list-items'}>
                {newsItems.map(item =>
                    <li className={'news-list-item'} key={uuid()}
                        style={{ listStyleImage: `url(${item.icon})` }}>
                        <NewsListItem {...item} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default NewsList;
