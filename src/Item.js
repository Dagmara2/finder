export default function Item(props) {
    return (
        <li className="items__element">
            <a className="items__link" href={props.url}>
                <img className="items__img" src={props.img.icon} alt={props.title} />
                <p className="items__title">{props.title}</p>
            </a>
        </li>
    )
}