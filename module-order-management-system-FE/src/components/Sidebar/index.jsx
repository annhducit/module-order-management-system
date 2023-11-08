/* eslint-disable react/prop-types */
import { useContext } from "react";
import classNames from "classnames/bind";
import Input from "../Input";

import styles from "./Sidebar.module.scss";

import { MainLayoutContext } from "../../layouts/MainLayout/MainLayoutContext";

const cx = classNames.bind(styles);

function Sidebar({
    title = "",
    date,
    setDate,
    all,
    items = [],
    selectedId,
    setSelectedId,
}) {
    const { search, setSearch, setSearchInputValue } =
        useContext(MainLayoutContext);

    function handleClickItem(id) {
        if (search) {
            setSearch("");
            setSearchInputValue("");
        }
        setSelectedId(id);
    }

    function handleChangeDate(e) {
        setDate(e.target.value);
    }

    return (
        <div className={cx("container")}>
            <h3 className={cx("title")}>{title}</h3>
            <div className={cx("list")}>
                {date && (
                    <div className={cx("item")}>
                        <Input
                            type="date"
                            value={date}
                            onChange={handleChangeDate}
                        />
                    </div>
                )}
                {all && (
                    <div
                        className={cx("item", {
                            active: selectedId === null,
                        })}
                        onClick={() => handleClickItem(null)}
                    >
                        {all}
                    </div>
                )}
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={cx("item", {
                            active: selectedId === item.id,
                        })}
                        onClick={() => handleClickItem(item.id)}
                    >
                        {item.name || `Table ${item.number}`}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
