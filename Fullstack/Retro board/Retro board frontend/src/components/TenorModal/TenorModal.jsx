import { Backdrop, Container, Modal } from '@material-ui/core';
import React, { useEffect } from 'react';
import TenorGifList from '../TenorGifList';
import './TenorModal.styles.css';

const TenorModal = ({ isModalOpen: open, setModalState, fetchTrending }) => {
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={() => setModalState({ isModalOpen: false })}
        className="modal"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Container
          disableGutters
          className="paper"
          maxWidth="md"
          // maxWidth="sm"
        >
          <TenorGifList />
        </Container>
      </Modal>
    </>
  );
};

export default TenorModal;
