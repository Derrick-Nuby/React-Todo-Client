import React from 'react';

interface ErrorNotificationProps {
    message?: string;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ message = `There was an Error :( Please contact the site admnistrators` }) => {
    return (
        <div id="msgbox">
            {message}
        </div>
    );
};

export default ErrorNotification;
