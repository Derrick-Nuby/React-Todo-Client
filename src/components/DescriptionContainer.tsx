import React from 'react';
import DescriptionBox from './DescriptionBox';
import "./../assets/styles/styles.css"

const DescriptionContainer: React.FC = () => {
    return (
        <>
            <h2 className="headings">How it works</h2>
            <div className="sections">
                <DescriptionBox />
                <DescriptionBox />
                <DescriptionBox />
                <DescriptionBox />
            </div>
        </>
    );
};

export default DescriptionContainer;
