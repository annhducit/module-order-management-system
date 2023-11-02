import { useState } from 'react';

function useModal(state) {
    const [isShowing, setIsShowing] = useState(state);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return [
        isShowing,
        toggle,
    ];
}

export default useModal;
