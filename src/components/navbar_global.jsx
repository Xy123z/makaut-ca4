import { useState } from 'react'
  export default function NavBarG(props) {
  const handleClick = () => {
    props.updateModalText("submit answersheet and end the exam? ", "submit");
    props.setModalVisible(true)
  }
  return (
      <>
      <style>
        {`
          .navbar-fixed-top {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1050; /* Higher than sidebar z-index */
          }
        `}
      </style>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top border-bottom border-body-secondary`}>
  <div className="container-fluid d-flex justify-content-between align-items-center">
    <a className="navbar-brand" href="#">PUSKAR BANERJEE UNIVERSITY OF TECHNOLOGY</a>
    <button  className="btn btn-secondary" onClick={handleClick}> <i className="bi bi-power me-1"></i>PUSKAR BANERJEE</button>
  </div>
</nav>
</>
  )
  }

