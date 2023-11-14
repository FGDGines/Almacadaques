
import React from 'react';
import './LoaderOverlay.css';

export const Loader: React.FC = () => {
  return (
    <div className="loaderOverlay">
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

