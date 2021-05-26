import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer className="row shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-sm-4"/>
            <Link to={props.componentName} onClick={props.clickHandler} className="btn-success col-sm-4 text-center">{props.title}</Link>
        </footer>
    );
}

export default Footer;
