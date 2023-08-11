import React from 'react';

const Header = () => {
    const onClose = () => {
        tg.close()
    }
    const tg = window.Telegram.WebApp;
    return (
        <div className={'header'}>
            <Button onClick={onClose()}>Закрити</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;