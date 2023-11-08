import classNames from "classnames/bind";

import styles from "./BillDetails.module.scss";

const cx = classNames.bind(styles);
const baseURL = import.meta.env.REACT_APP_BASE_URL;

function BillDetails({ bill, data }) {
    return (
        <div className={cx("container")}>
            <div className={cx("header")}>
                <div className={cx("table")}>#Table: {bill.tableNumber}</div>
                <div className={cx("bill-total")}>Total: $ {bill.total}</div>
                <div className={cx("order-id")}>#OrderId: {bill.orderId}</div>
            </div>
            <div className={cx("list")}>
                {data.map((dish, index) => (
                    <div key={index} className={cx("item")}>
                        <img
                            className={cx("image")}
                            src={baseURL + dish.imageLink}
                            alt={dish.name}
                        />
                        <div className={cx("item-right")}>
                            <div className={cx("item-header")}>
                                <div className={cx("name")}>{dish.name}</div>
                                <div className={cx("index")}>#{index}</div>
                            </div>
                            <div className={cx("price")}>
                                Price: $ {dish.price}
                            </div>
                            <div className={cx("quantity")}>
                                Quantity: {dish.quantity}
                            </div>
                            <div className={cx("total")}>
                                Total: $ {dish.price * dish.quantity}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BillDetails;
