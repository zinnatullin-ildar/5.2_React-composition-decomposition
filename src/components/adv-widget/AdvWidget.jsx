/**
 * Компонент представляет собой контейнер для рекламного контента
 * @param props - передаются нужные дочерние элементы
*/

function AdvWidget(props) {
    return (
        <div className={'adv-widget'}>
            {props.children}
        </div>
    )
}

export default AdvWidget;
