import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Quantity.module.scss';

const cx = classNames.bind(styles);

function Quantity({ quantity, setQuantity }) {
    function handleClickMinus() {
        quantity > 1 && setQuantity(quantity - 1);
    }

    function handleClickPlus() {
        setQuantity(quantity + 1);
    }

    return (
        <div className={cx('quantity')}>
            <button className={cx('item', 'change')} onClick={handleClickMinus}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className={cx('item')}>{quantity}</div>
            <button className={cx('item', 'change')} onClick={handleClickPlus}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

export default Quantity;
