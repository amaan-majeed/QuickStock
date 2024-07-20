import React from 'react';
import LoaderImg from '../images/loader.gif';
import ReactDOM from 'react-dom';

export default function Loader() {
    return ReactDOM.createPortal(
        <div className="wrapper">
            <div className="loader">
                <img src={LoaderImg} alt="Loading..." />
            </div>
        </div>,
        document.getElementById('loader')
  )
}

export const SpinnerImg = () => {
    return (
      <div className="--center">
        <img src={LoaderImg} alt="Loading..." />
      </div>
    );
}
