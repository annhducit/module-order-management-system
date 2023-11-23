import { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./StatusDishItem.module.scss";

import Button from "../../../../components/Button";

import { AppContext } from "../../../../AppContext";
import dishesService from "../../../../services/dishesService";
import { API_BASE_URL } from "../../../../configs/config";

const cx = classNames.bind(styles);
const baseURL = `${API_BASE_URL}/images/`;

function StatusDishItem({ item, setDishes }) {
    const { toast } = useContext(AppContext);

    function handleClickStatusInactive(dishId) {
        const fetchApi = async () => {
            try {
                await dishesService.updateStatus(dishId, "UNAVAILABLE");
                setDishes((dishes) => {
                    const index = dishes.findIndex((d) => d.id === dishId);
                    const clone = [...dishes];
                    clone[index].status = 0;
                    return clone;
                });
                toast(`Status changed to inactive`, {
                    type: "warning",
                });
            } catch (err) {
                toast("Failed to inactive status", {
                    type: "error",
                });
            }
        };
        fetchApi();
    }

    function handleClickStatusActive(dishId) {
        const fetchApi = async () => {
            try {
                await dishesService.updateStatus(dishId, "AVAILABLE");
                setDishes((dishes) => {
                    const index = dishes.findIndex((d) => d.id === dishId);
                    const clone = [...dishes];
                    clone[index].status = 1;
                    return clone;
                });
                toast(`Status changed to active`, {
                    type: "success",
                });
            } catch (err) {
                toast("Failed to active status", {
                    type: "error",
                });
            }
        };
        fetchApi();
    }

    return (
        <div className={cx("content")}>
            <div className={cx("content-item")}>
                <div className={cx("item-image")}>
                    <img
                        src={baseURL + item.imageLink}
                        className={cx("image")}
                        alt={item.name}
                    />
                </div>
                <div className={cx("item-text")}>
                    <div className={cx("item-header")}>
                        <h3 className={cx("item-title")}>{item.name}</h3>
                        <p
                            className={cx("item-status", {
                                success: item.status === "AVAILABLE",
                            })}
                        >
                            Status: {item.status}
                        </p>
                    </div>
                    <div className={cx("item-btn")}>
                        {item.status === 1 ? (
                            <Button
                                outline
                                onClick={() =>
                                    handleClickStatusInactive(item.id)
                                }
                            >
                                Unavailable
                            </Button>
                        ) : (
                            <Button
                                primary
                                onClick={() => handleClickStatusActive(item.id)}
                            >
                                Available
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusDishItem;
