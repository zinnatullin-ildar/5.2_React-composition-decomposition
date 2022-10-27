import { v4 as uuid } from "uuid";
import BasicWidget from '../BasicWidget';

/**
 * Виджет "Эфир"
 * @param props - получает соответствующие данные, в BasicWidget передаёт функцию "конструктор"
 * @returns {JSX.Element}
 * @constructor
 */

function BroadcastWidget(props) {
    return (
        <BasicWidget data={props.data}>
            {(data) =>
                <div className={'visit-content'}>
                    <ul className={'widget-list'}>
                        {data.items.map(item =>
                            <li key={uuid()} className={'widget-list-item'}>
                                <img src={item.image} alt={''} />
                                <a href={item.link} className={'widget-link'}>
                                    {item.title}
                                </a>
                                <span>
                                    {item.description}
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </BasicWidget>
    )
}

export default BroadcastWidget;
