import Grid from './grid_options'
import {useState, useEffect } from 'react'
export default function Sidebar(props){
  const [index, setIndex] = useState(0);
  const updateIndex = (newIndex) => {
    setIndex(newIndex)
  }
  useEffect(() => {
    props.setIndex(index)
  }, [index])
    return(
      <>
      <style>
         {`
              .offcanvas-start.offcanvas-push {
            position: fixed;
            top: 56px;
            left: 0;
            z-index: 1045;
            height: calc(100vh - 56px);
            transform: translateX(0) !important;
            visibility: visible !important;
          }

          .offcanvas-start.offcanvas-push:not(.show) {
            transform: translateX(-100%) !important;
          }
.custom-sidebar-width {
  width: 300px !important;
}
@media (max-width: 768px) {
  .custom-sidebar-width {
    width: 300px !important;
  }
}
.border-width {
  border-top: 3px solid white;
}
.sidebar-header-custom {
              align-items: center; /* Align to left */
              gap: 8px; /* Space between items */
            }
            .sidebar-header-custom h5,
            .sidebar-header-custom h3 {
              margin: 0; /* Remove default margins */
              font-size: 0.9rem; /* Smaller font to fit */
              word-break: break-word; /* Break long text */
            }
            .close-btn-wrapper {
              position: absolute;
              top: 10px;
              right: 10px;
            }
            .main-container {
              margin-top: 56px;
          transition: margin-left 0.3s ease;
        }

        .main-container.sidebar-active {
          margin-left: 300px;
        }`}
         </style>
        <div className={`offcanvas offcanvas-start offcanvas-push ${props.visible ? 'show' : ''} custom-sidebar-width text-bg-${props.mode === 'dark' ? 'dark' : 'primary'}`}   data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="sidebar" aria-labelledby="offcanvasExampleLabel">

         <div className="offcanvas-header d-flex flex-column sidebar-header-custom">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">PUSKAR BANERJEE</h5>
            <h3>176001320##</h3>
            <h3>PUS###########5@GMAIL.COM</h3>
            <button type="button" className="btn-close close-btn-wrapper" data-bs-dismiss="offcanvas" aria-label="Close" onClick={props.toggleSide}></button>
          </div>
          <hr className="border-width"/>
          <div className="offcanvas-body" data-bs-theme={`${props.mode === 'dark' ? 'dark' : ''}`}>
           <Grid onButtonClick={updateIndex} reviewCount={props.reviewList}/>
          </div>

          <button type="button" className="list-group-item list-group-item-action" >
    <i className="bi bi-power me-1"></i>
    take a break
  </button>
    <hr className="border-width"/>
        </div>
        </>
    )
}

