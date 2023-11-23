/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { Column, Grid, Row } from "../../../components/Grid";
import Modal from "../../../components/Modal";
import Sidebar from "../../../components/Sidebar";

import { DishesContext } from "./DishesContext";
import styles from "./Dishes.module.scss";
import useModal from "../../../hooks/useModal";

import categoriesService from "../../../services/categoriesService";
import dishesService from "../../../services/dishesService";

import DishesList from "./DishesList";
import OrderDetails from "./OrderDetails";

import { CustomerContext } from "../CustomerContext";
import { MainLayoutContext } from "../../../layouts/MainLayout/MainLayoutContext";

const cx = classNames.bind(styles);

function Dishes() {
    const [categories, setCategories] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [selectedDishId, setSelectedDishId] = useState(null);
    const [modalShow, toggleModalShow] = useModal(false);
    const { orderId } = useContext(CustomerContext);
    const { search, searchInputValue } = useContext(MainLayoutContext);
    const navigate = useNavigate();

    useEffect(() => {
        void (async () => {
            const data = await dishesService.getDishesByKeyword(
                searchInputValue
            );
            setDishes(data);
        })();
    }, [searchInputValue]);

    // Authenticate the user
    useEffect(() => {
        orderId || navigate("/");
    }, [orderId, navigate]);

    // Render categories
    useEffect(() => {
        void (async () => {
            const categoriesData = await categoriesService.getAll();
            setCategories(categoriesData);
        })();
    }, []);

    // Render dishes corresponding to selected category & search
    useEffect(() => {
        void (async () => {
            const dishesData = await dishesService.getAll();
            setDishes(dishesData);
        })();
    }, []);

    return (
        <div className={cx("container")}>
            <DishesContext.Provider
                value={{
                    selectedDishId,
                    setSelectedDishId,
                    modalShow,
                    toggleModalShow,
                }}
            >
                <Grid className={cx("wide")}>
                    <Row className={cx("gutter")}>
                        <Column className={cx("l-3")}>
                            <Sidebar
                                title="Categories"
                                items={categories}
                                all="All categories"
                                selectedId={selectedCategoryId}
                                setSelectedId={setSelectedCategoryId}
                                setDishes={setDishes}
                            />
                        </Column>
                        <Column className={cx("l-9")}>
                            <div className={cx("main-menu")}>
                                {" "}
                                <DishesList dishes={dishes} />
                            </div>
                        </Column>
                    </Row>
                </Grid>

                <Modal
                    id="modal"
                    className={cx("order-details-modal")}
                    show={modalShow}
                    toggle={toggleModalShow}
                    close
                >
                    <OrderDetails dish={selectedDishId} />
                </Modal>
            </DishesContext.Provider>
        </div>
    );
}

export default Dishes;
