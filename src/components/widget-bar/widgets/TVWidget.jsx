import { v4 as uuid } from "uuid";
import BasicWidget from '../BasicWidget';

/**
 * Виджет "Телепрограмма"
 * @param props - получает соответствующие данные, в BasicWidget передаёт функцию "конструктор"
 * @returns {JSX.Element}
 * @constructor
 */

function TVWidget(props) {
    return (
        <BasicWidget data={props.data}>
            {(data) =>
                <div className={'tv-content'}>
                    <ul className={'widget-list'}>
                        {data.items.map(item =>
                            <li key={uuid()} className={'widget-list-item'}>
                                <span>{item.time}</span>
                                <span>{item.title}</span>
                                <span>{item.channel}</span>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </BasicWidget>
    )
}

export default TVWidget;
