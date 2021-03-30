import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import closeModal from '../../assets/fechar.svg';
import incomeImg from '../../assets/entrada.svg';
import outcomeImg from '../../assets/saida.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    
    await createTransaction({
      title,
      amount, 
      category,
      type
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  };

  return (
      <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"  
          className="react-modal-content"
        >
          <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
          >
            <img src={closeModal} alt="Fechar modal"/>
          </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input 
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
          <input 
            placeholder="Valor" 
            value={amount}
            type="number" 
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox 
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada"/>
              <span>Entrada</span>
            </RadioBox>

            <RadioBox 
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída"/>
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}  
          />
          
          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
  );
};