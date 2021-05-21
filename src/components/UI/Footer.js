import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer className="row shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-sm-4"/>
            <button onClick={props.clickHandler} className="btn-success col-sm-4">{props.title}</button>
        </footer>
    );
}

export default Footer;
