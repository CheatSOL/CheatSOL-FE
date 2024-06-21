import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; // Import Modal from react-bootstrap
import StockChart from './StockChart';

function ChartModal({ show, onHide }) { // Destructure props correctly
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
            00593 삼성전자
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StockChart />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChartModal;
