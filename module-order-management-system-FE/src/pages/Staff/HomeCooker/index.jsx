import { useState, useEffect, useContext } from "react";
import classNames from "classnames/bind";

import { Grid, Row, Column } from "../../../components/Grid";
import { AppContext } from "../../../AppContext";
import Sidebar from "../../../components/Sidebar";
import Button from "../../../components/Button";

import styles from "./HomeCooker.module.scss";

import tablesService from "../../../services/tablesService";
import ordersService from "../../../services/ordersService";

const cx = classNames.bind(styles);
const baseURL = import.meta.env.REACT_APP_BASE_URL;

function HomeCooker() {
    const [tables, setTables] = useState([]);
    const [orderDetails, setOrderDetails] = useState([]);
    const [selectedTableId, setSelectedTableId] = useState();

    const selectedTable = tables.find((t) => t.id === selectedTableId);

    // Render tables
    useEffect(() => {
        let ignore = false;

        const fetchApi = async () => {
            const data = await tablesService.getAll();
            if (!ignore) {
                setTables(data);
                setSelectedTableId(data[0].id);
            }
        };
        fetchApi();

        return () => (ignore = true);
    }, []);

    // Render order details corresponding to selected table id
    useEffect(() => {
        let ignore = false;

        const fetchApi = async () => {
            const data = await ordersService.getByTableId(selectedTableId);
            !ignore && setOrderDetails(data);
        };
        selectedTableId && fetchApi();

        //
        const intervalId = setInterval(() => {
            selectedTableId && fetchApi();
        }, 10 * 1000);

        return () => {
            ignore = true;
            clearInterval(intervalId);
        };
    }, [selectedTableId]);

    return (
        <div className={cx("container")}>
            <Grid className={cx("wide")}>
                <h2 className={cx("header")}>Orders Management</h2>
                <Row className={cx("gutter")}>
                    <Column className={cx("l-3")}>
                        <Sidebar
                            title="Tables"
                            items={tables}
                            selectedId={selectedTableId}
                            setSelectedId={setSelectedTableId}
                        />
                    </Column>
                    <Column className={cx("l-9")}>
                        <div className={cx("content")}>
                            <div className={cx("content-header")}>
                                <h3>Table #{selectedTable?.number}</h3>
                                <h3>
                                    OrderID #{selectedTable?.orderId || "Empty"}
                                </h3>
                            </div>
                        </div>
                        {orderDetails.map((orderDetail, index) => (
                            <Item
                                key={index}
                                table={selectedTable}
                                item={orderDetail}
                                orderDetails={orderDetails}
                                setOrderDetails={setOrderDetails}
                            />
                        ))}
                    </Column>
                </Row>
            </Grid>
        </div>
    );
}

export default HomeCooker;

function Item({ table, item, setOrderDetails }) {
    const { toast } = useContext(AppContext);

    const statusMap = {
        0: "Pending",
        1: "Processing",
        2: "Completed",
        3: "Rejected",
    };

    // Handle clicking change status button
    function handleClickChangeStatusButton(dishId, status) {
        const fetchApi = async () => {
            try {
                const message = await ordersService.updateOrderDetailsStatus(
                    table.orderId,
                    dishId,
                    status
                );
                setOrderDetails((ods) => {
                    const index = ods.findIndex((od) => od.id === dishId);
                    const clone = [...ods];
                    clone[index].status = status;
                    return clone;
                });
                toast(message, {
                    type: "success",
                });
            } catch (err) {
                toast("Oops. An error occur!", {
                    type: "danger",
                });
            }
        };
        fetchApi();
    }

    return (
        <div className={cx("content-item")}>
            <div className={cx("left")}>
                <img
                    src={baseURL + item.imageLink}
                    alt={item.name}
                    className={cx("image")}
                />
                <div className={cx("content-text")}>
                    <div className={cx("top")}>
                        <div className={cx("text-header")}>
                            <h3 className={cx("heading")}>{item.name}</h3>
                            <p
                                className={cx("status", {
                                    processing: item.status === 1,
                                    completed: item.status === 2,
                                    rejected: item.status === 3,
                                })}
                            >
                                {statusMap[item.status]}
                            </p>
                        </div>
                        <p className={cx("quantity")}>
                            Quantity: {item.quantity}
                        </p>
                    </div>
                    <div className={cx("bottom")}>
                        {item.status === 0 && (
                            <>
                                <Button
                                    className={cx("btn")}
                                    primary
                                    small
                                    onClick={() =>
                                        handleClickChangeStatusButton(
                                            item.id,
                                            1
                                        )
                                    }
                                >
                                    Processing
                                </Button>
                                <Button
                                    className={cx("btn")}
                                    outline
                                    small
                                    onClick={() =>
                                        handleClickChangeStatusButton(
                                            item.id,
                                            3
                                        )
                                    }
                                >
                                    Rejected
                                </Button>
                            </>
                        )}
                        {item.status === 1 && (
                            <Button
                                className={cx("btn")}
                                primary
                                small
                                onClick={() =>
                                    handleClickChangeStatusButton(item.id, 2)
                                }
                            >
                                Complete
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx("right")}>
                Note:
                <textarea className={cx("note")} readOnly={true}>
                    {item.note}
                </textarea>
            </div>
        </div>
    );
}
