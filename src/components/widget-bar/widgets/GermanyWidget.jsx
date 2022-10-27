import { v4 as uuid } from "uuid";
import BasicWidget from '../BasicWidget';

/**
 * Виджет "Карта Германии"
 * @param props - получает соответствующие данные, в BasicWidget передаёт функцию "конструктор"
 * @returns {JSX.Element}
 * @constructor
 */

function GermanyWidget(props) {
    return (
        <BasicWidget data={props.data}>
            {(data) =>
                <div className={'germany-content'}>
                    <ul className={'widget-list'}>
                        {data.items.map(item =>
                            <li key={uuid()} className={'widget-list-item'}>
                                <a href={item.link}>
                                    {item.title}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </BasicWidget>
    )
}

export default GermanyWidget;
