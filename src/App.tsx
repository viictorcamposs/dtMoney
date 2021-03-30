import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionsProvider } from './hooks/useTransactions';

import Dashboard from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  const handleOpenNewTransactionsModal = () => {
    setIsNewTransactionsModalOpen(true);
  };

  const handleCloseNewTransactionsModal = () => {
    setIsNewTransactionsModalOpen(false); 
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />      

      <GlobalStyle />
    </TransactionsProvider>
  );
}