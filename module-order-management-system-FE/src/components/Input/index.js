import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ ...props }) {
    return <input className={cx('input')} {...props} />;
}

export default Input;
