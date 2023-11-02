import classNames from 'classnames/bind';

import styles from './Grid.scss';

const cx = classNames.bind(styles);

function Grid({ className, children }) {
    return <div className={cx('grid', className)}>{children}</div>;
}

function Row({ className, children }) {
    return <div className={cx('row', className)}>{children}</div>;
}

function Column({ className, children }) {
    return <div className={cx('col', className)}>{children}</div>;
}

export { Grid, Row, Column };
