import { useState, useContext } from "react";
import classNames from "classnames/bind";

import Button from "../../../../components/Button";
import Quantity from "../../../../components/Quantity";

import { DishesContext } from "../DishesContext";
import styles from "./OrderDetails.module.scss";
import { API_BASE_URL } from "../../../../configs/config";

import { CustomerContext } from "../../CustomerContext";

const cx = classNames.bind(styles);
const baseURL = `${API_BASE_URL}/images/`;

function OrderDetails({ dish }) {
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState("");
    const { addToCart } = useContext(CustomerContext);
    const { toggleModalShow } = useContext(DishesContext);

    function handleClickAdd() {
        addToCart({
            dishId: dish.id,
            quantity,
            note,
        });
        toggleModalShow();
    }

    return (
        <div className={cx("container")}>
            <div className={cx("left")}>
                <img
                    className={cx("image")}
                    src={baseURL + dish.imageLink}
                    alt="dish"
                />
                <div className={cx("name")}>{dish.name}</div>
            </div>
            <div className={cx("right")}>
                <div className={cx("price")}>Price: {dish.price} $</div>
                <div className={cx("description")}>
                    <div className={cx("title")}>Description:</div>
                    <p className={cx("text")}>{dish.description}</p>
                </div>
                <div>
                    <textarea
                        type="text"
                        className={cx("input-note")}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Enter notes about your dish"
                    ></textarea>
                    {console.log(note)}
                </div>
                <div className={cx("btn-quantity")}>
                    <Quantity quantity={quantity} setQuantity={setQuantity} />
                    <Button
                        className={cx("btn-add")}
                        primary
                        onClick={handleClickAdd}
                    >
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;
