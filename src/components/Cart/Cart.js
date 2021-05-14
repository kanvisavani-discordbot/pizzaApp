import './Cart.css';

const Cart = (props) => {
    return (
        <div className="cart">
            <div className="row">
                <label className="col-sm-6">Price</label>
                <p className="col-sm-6">{props.price}</p>
            </div>
            <div className="row">
                <label className="col-sm-6">Tax</label>
                <p className="col-sm-6">{props.tax}</p>
            </div>
            <div className="row">
                <label className="col-sm-6">Delivery Charge</label>
                <p className="col-sm-6">{props.deliveryCharge}</p>
            </div>
            <hr/>
            <div className="row">
                <label className="col-sm-6">Total</label>
                <p className="col-sm-6">{props.total}</p>
            </div>
            <div className="row">
                <button className="col-sm-12">Print Bills</button>
            </div>
        </div>
    );
}

export default Cart;
