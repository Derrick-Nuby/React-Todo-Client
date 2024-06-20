import React from 'react';
import "./../assets/styles/styles.css"


const DescriptionBox: React.FC = () => {
    return (
        <div className="box box1">
                <img src="./images/img.jpg" alt="" />
                <div className="title">1. Create an account</div>
                <p>by creating an account you can access your own dashboard and se your todo items</p>
            </div>
    );
};

export default DescriptionBox;
