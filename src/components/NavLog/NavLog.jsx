import { useState } from 'react';
import { BaseModal } from '../BaseModal/BaseModal';
import css from './NavLog.module.css';
import { LoginModal } from '../LoginModal/LoginModal';
import { RegisterModal } from '../RegisterModal/RegisterModal';

export const NavLog = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  const toggleRegisterModal = () => {
    setIsRegisterModalOpen((prev) => !prev);
  };

  return (
    <div className={css.container}>
      <button
        className={css.login}
        onClick={() => {
          setIsLoginModalOpen(true);
        }}
      >
        Log In
      </button>
      <button
        className={css.register}
        onClick={() => {
          setIsRegisterModalOpen(true);
        }}
      >
        Registration
      </button>
      <BaseModal isOpen={isLoginModalOpen} onClose={toggleLoginModal}>
        <LoginModal />
      </BaseModal>
      <BaseModal isOpen={isRegisterModalOpen} onClose={toggleRegisterModal}>
        <RegisterModal />
      </BaseModal>
    </div>
  );
};