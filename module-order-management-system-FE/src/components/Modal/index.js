import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ id, className, children, show, toggle, close }) {
    function handleClickOutside(e) {
        e.target.id === id && toggle();
    }

    function handleClickClose() {
        toggle();
    }

    return (
        show && (
            <div id={id} className={cx('modal')} onClick={handleClickOutside}>
                <div
                    className={cx('modal-content', {
                        [className]: className,
                    })}
                >
                    {children}
                    {close && (
                        <button
                            className={cx('close')}
                            onClick={handleClickClose}
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    )}
                </div>
            </div>
        )
    );
}

export default Modal;
