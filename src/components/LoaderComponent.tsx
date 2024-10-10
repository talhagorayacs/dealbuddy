import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

interface LoaderComponentProps {
  isLoading: boolean; 
}

const LoaderComponent: React.FC<LoaderComponentProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="loading-overlay">
          <RingLoader color="#36d7b7" size={50} loading={isLoading} />
        </div>
      )}

      <div className={`content ${isLoading ? 'blurred-background' : ''}`}>
       
      </div>
    </>
  );
};

export default LoaderComponent;
