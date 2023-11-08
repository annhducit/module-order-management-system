import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Staff.module.scss';

import { StaffContext } from './StaffContext';

const cx = classNames.bind(styles);

function Staff() {
    return (
        <div className={cx('container')}>
            <StaffContext.Provider>
                <Outlet />
            </StaffContext.Provider>
        </div>
    );
}

export default Staff;
