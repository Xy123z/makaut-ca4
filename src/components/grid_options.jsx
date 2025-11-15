import React, { useState, useEffect } from 'react';

const Grid = ({
  rows = 5,
  cols = 5,
  buttonColor = 'light',
  gap = 1,
  onButtonClick,
  reviewCount
}) => {
  const [activeButton, setActiveButton] = useState(null);
  const [clicked, setClicked] = useState(new Set());
  const handleClick = (index) => {
    setActiveButton(index);
    onButtonClick(index);
    setClicked(prev => {return new Set([...prev, index])})
  };

  const renderGrid = () => {
    const grid = [];
    let buttonIndex = 1;

    for (let row = 0; row < rows; row++) {
      const columns = [];
      for (let col = 0; col < cols; col++) {
        const currentIndex = buttonIndex;
        const isClicked = clicked.has(currentIndex)
        columns.push(
          <div className="col" key={col}>
            <button
              className={`btn btn-${isClicked ? 'success' : buttonColor} w-100 square-btn ${activeButton === currentIndex ? 'active-btn' : ''} ${reviewCount.has(currentIndex) ? 'review-btn' : ''}`}
              onClick={() => handleClick(currentIndex)}
            >
              {currentIndex}
            </button>
          </div>
        );
        buttonIndex++;
      }
      grid.push(
        <div className={`row g-${gap}`} key={row}>
          {columns}
        </div>
      );
    }

    return grid;
  };

  return (
    <>
      <style>{`
        .grid-container {
          max-width: 300px;
          margin: 0 auto;
        }

        .square-btn {
          aspect-ratio: 1;
          padding: 0;
          font-size: 0.75rem;
          font-weight: bold;
          transition: all 0.3s ease;
          min-height: 0;
          height: auto;
          margin-bottom: 5px;
          color: blue;
        }

        .square-btn:hover {
             background-color: #A9A9A9;
              color: black;
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .active-btn {
          box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.5);
          transform: scale(0.95);
          background-color: #00008B;
          color: white;
        }
        .review-btn {
          box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.5);
          transform: scale(0.95);
          background-color: var(--bs-danger);
          color: white;
        }
      `}</style>

      <div className="grid-container">
        {renderGrid()}

        {activeButton && (
          <div className="alert alert-info mt-3 text-center py-2">
            <small>Last clicked: Button {activeButton}</small>
          </div>
        )}
      </div>
    </>
  );
};


export default Grid;
