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
        
          <Modal.Title id="example-custom-modal-styling-title">    
            <span style={{fontSize:"30px"}}>{code}</span>       <span style={{fontSize:"23x", marginLeft:"10px"}}>{name}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <StockChart />
          
          <div style={{fontSize:"14px", display:"flex", justifyContent:"end"}}><i class="bi bi-info-circle" style={{marginRight:"5px"}}></i>일별/주별/월별 최근 30개의 정보를 제공합니다.</div>
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChartModal;
