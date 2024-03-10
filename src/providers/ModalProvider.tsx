'use client'
import React, { createContext, useContext, useState } from 'react'


type ModalContextType = {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  };

const ModalContext = createContext<ModalContextType>({
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {},
});

export function ModalProvider({children}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);