import React from "react";
import { Modal } from "@mui/material";

const AddProjectModal = (props) => {
  const { open, handleClose } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

    </Modal>
  );
};

export default AddProjectModal;
