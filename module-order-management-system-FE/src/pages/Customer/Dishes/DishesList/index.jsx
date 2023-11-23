import { useContext } from "react";
import { Column, Row } from "../../../../components/Grid";
import classNames from "classnames/bind";

import Button from "../../../../components/Button";

import { DishesContext } from "../DishesContext";
import styles from "./DishesList.module.scss";
import { API_BASE_URL } from "../../../../configs/config";

const cx = classNames.bind(styles);

const baseURL = `${API_BASE_URL}/images/`;

function DishesList({ dishes }) {
    const dishesContext = useContext(DishesContext);

    function handleClickAdd(id) {
        dishesContext.setSelectedDishId(dishes.find((d) => d.id === id));
        dishesContext.toggleModalShow();
    }

    return (
        <div className={cx("container")}>
            <Row className={cx("gutter")}>
                {dishes?.map((dish) => (
                    <Column key={dish.id} className={cx("l-4")}>
                        <div className={cx("dish")}>
                            <div className={cx("header")}>
                                <h4 className={cx("name")}>{dish.name}</h4>
                                <span className={cx("price")}>
                                    {dish.price} $
                                </span>
                            </div>
                            <img
                                className={cx("image")}
                                src={baseURL + dish.imageLink}
                                alt={dish.name}
                            />

                            <Button
                                className={cx("add")}
                                primary
                                small
                                disabled={!dish.status}
                                onClick={() => handleClickAdd(dish.id)}
                            >
                                Add
                            </Button>
                        </div>
                    </Column>
                ))}
            </Row>
        </div>
    );
}

export default DishesList;
