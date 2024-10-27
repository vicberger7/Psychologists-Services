/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';

import css from './BaseModal.module.css';

export const BaseModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body.classList.add(css.modalOpen);
    } else {
      body.classList.remove(css.modalOpen);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      className={css.modalContent}
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
      <div onClick={() => onClose()} className={css.iconWrapper}>
        <CgClose size={32} className={css.icon} />
      </div>
      {children}
    </Modal>
  );
};