import WeatherWidget from './widgets/WeatherWidget';
import TVWidget from './widgets/TVWidget';
import VisitWidget from './widgets/VisitWidget';
import GermanyWidget from './widgets/GermanyWidget';
import BroadcastWidget from './widgets/BroadcastWidget';

/**
 * Контейнер для виджетов: погода, тв-программ и т.п.
 * @props - в data передаётся объект с данными для виджетов
 * @returns {JSX.Element}
 */

function WidgetBar(props) {
    const { data } = props;
    const { weather, visit, germany, broadcast, tv } = data;
    return (
        <div className={'widget-bar'}>
            <WeatherWidget data={weather} />
            <VisitWidget data={visit} />
            <GermanyWidget data={germany} />
            <TVWidget data={tv} />
            <BroadcastWidget data={broadcast} />
        </div>
    )
}

export default WidgetBar;
