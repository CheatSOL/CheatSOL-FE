import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; // Import Modal from react-bootstrap
import StockChart from './StockChart';

function ChartModal({ show, onHide, code, name}) { // Destructure props correctly
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        // fullscreen={true} // Set fullscreen to true correctly
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
          <Modal.Header closeButton>
          <div style={{ marginLeft:"20px"}}>
        <span style={{fontSize:"30px"}}>{code}</span><span style={{fontSize:"20px", marginLeft:"15px"}}>{name}</span>
        </div>
        </Modal.Header>

        <Modal.Body>
         
        
          
          <StockChart symbol={code} />
          
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChartModal;
