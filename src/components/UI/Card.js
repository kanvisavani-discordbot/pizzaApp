import './Card.css';

const Card = (props) => {
    const classes = 'card m-2 ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;
