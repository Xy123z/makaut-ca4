import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Modal(props){
    const navigate = useNavigate();
    const downloadJson = (data, filename = 'data.json') => {
  // Convert data to JSON string
  const jsonString = JSON.stringify(data, null, 2);

  // Create a Blob from the JSON string
  const blob = new Blob([jsonString], { type: 'application/json' });

  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
    };
     const endExam = () => {
        downloadJson(props.result);
        navigate('/result');
    }
    if(props.type === ''){
        return null;
    }
    else if(props.type === 'exam_end'){
        return (
            <>
            {/* Backdrop */}
            <div className="modal-backdrop show" style={{zIndex: 2000}}></div>

            {/* Modal */}
            <div className="modal show d-block" tabIndex="-1" style={{zIndex: 2001}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-danger">
                            <h5 className="modal-title text-white">Alert</h5>
                        </div>
                        <div className="modal-body">
                            {props.modalText}
                        </div>
                        <div className="modal-footer bg-danger">
                            <button type="button" className="btn btn-light" onClick={endExam}>
                               show results
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
    else if(props.type === 'submit'){
        if(!props.modalVisible){
            return null
        }
        return(
            <>
             <div className={`modal-backdrop show`} style={{zIndex: 2000}}></div>
            <div className={`modal show d-block`} tabIndex="-1" style={{zIndex: 2001}}>
  <div className="modal-dialog"
       style={{
         position: "absolute",
         top: "5px",          // distance from the top
         left: "50%",
         transform: "translateX(-50%)"  // keeps it centered horizontally
       }}>
    <div className="modal-content">
      <div className="modal-header bg-primary">
      </div>
      <div className="modal-body">
      {props.modalText}
      </div>
      <div className="modal-footer bg-primary">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => props.setModalVisible(false)}><i className="bi bi-x me-2"></i>no</button>
        <button type="button" className="btn btn-success" onClick={endExam}><i className="bi bi-check me-2"></i>yes</button>
      </div>
    </div>
  </div>
</div>
            </>
        )
    }
}
