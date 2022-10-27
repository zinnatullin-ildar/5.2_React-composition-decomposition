import NewsMenu from './elements/NewsMenu';
import NewsList from './elements/NewsList';
import DateComponent from './elements/DateComponent';

/**
 * Новостной блок с меню и ссылками на новости
 * @param props - получает данные для пунктов меню и данные ссылок на новости
 * @returns {JSX.Element}
 * @constructor
 */

function NewsBlock(props) {
    const { menuItems, newsItems } = props;

    const onClick = (e) => {
        console.log(e.target, ' ', 'clicked');
    }

    return (
        <div className={'news-block'}>
            <NewsMenu menuItems={menuItems} onClick={onClick} />
            <NewsList newsItems={newsItems} />
            <DateComponent />
        </div>
    )
}

export default NewsBlock;
