import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransitionModalOpen, setIsNewTransitionModalOpen] = useState(false)

  function handleOpenNewTransitionModal() {
    setIsNewTransitionModalOpen(true)
  }

  function handleCloseNewTransitionModal() {
    setIsNewTransitionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransaction={handleOpenNewTransitionModal}/>
      <Dashboard/>
      <NewTransactionModal 
        isOpen = {isNewTransitionModalOpen}
        onRequestClose = {handleCloseNewTransitionModal}
      />
      <GlobalStyle/>
    </TransactionProvider>
  )
}
