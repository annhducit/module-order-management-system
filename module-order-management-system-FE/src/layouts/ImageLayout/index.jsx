import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";

import { Column, Row } from "../../components/Grid";

import styles from "./ImageLayout.module.scss";
import bigImages from "../../assets/images/bigImage.png";

const cx = classNames.bind(styles);

function ImageLayout({ image }) {
    return (
        <div className={cx("container")}>
            <Row>
                <Column className={cx("l-7")}>
                    <div className={cx("block-img")}>
                        <img
                            src={image || bigImages}
                            className={cx("image")}
                            alt=""
                        ></img>
                    </div>
                </Column>
                <Column className={cx("l-5")}>
                    <Outlet />
                </Column>
            </Row>
        </div>
    );
}

export default ImageLayout;
