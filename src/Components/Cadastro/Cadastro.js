import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import cadastro from "../../Assets/icons/cadastro.svg";
import styles from "./Cadastro.module.css";
const style = {
  position: "absolute",
  rigth: "0",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cadastro = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className={styles.btn} onClick={handleOpen}>
        <img src={cadastro} alt="Cadastro" />
      </button>
      <Modal
        className={style}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <input placeholder="teste" />
        </Box>
      </Modal>
    </div>
  );
};

export default Cadastro;
