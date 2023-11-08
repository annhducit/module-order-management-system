import classNames from "classnames/bind";
import styles from "./PageNotFound.module.scss";

const cx = classNames.bind(styles);
function PageNotFound() {
    return (
        <div className={cx("container")}>
            <div className={cx("number")}>404</div>
            <div className={cx("text")}>
                <span>Ooops...</span>
                <br />
                Page not found! Please enter a valid path
            </div>
        </div>
    );
}

export default PageNotFound;
