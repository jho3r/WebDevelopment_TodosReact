import React from "react";
import './LoadingModal.css';
import Modal from 'react-bootstrap/Modal';

function LoadingModal() {

    return (
        <Modal className="loading-modal" show={true} centered>
            <Modal.Body >
                <i className="spinner-grow" role="status"></i>
                <p className="loading-modal-text">Loading...</p>
            </Modal.Body>
        </Modal>
    );
}

export { LoadingModal };