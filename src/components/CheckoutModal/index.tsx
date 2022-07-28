import ReactModal from 'react-modal';
import { useProduct } from '../../contexts/ProductContext';
import { ModalContainer } from './styles';

interface CheckoutModalProps {
  isOpen: boolean;
  prodId: number;
  onRequestClose: () => void;
}

export function CheckoutModal({
  isOpen,
  onRequestClose,
  prodId,
}: CheckoutModalProps) {
  const { removeProductFromCart } = useProduct();

  function handleRemoveProduct() {
    removeProductFromCart(prodId);
    onRequestClose();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalContainer>
        <h2>Você tem certeza que deseja excluir este produto?</h2>
        <div>
          <button type="button" className="cancel" onClick={onRequestClose}>
            Cancelar
          </button>
          <button
            type="button"
            className="confirm"
            onClick={handleRemoveProduct}
          >
            Confirmar
          </button>
        </div>
      </ModalContainer>
    </ReactModal>
  );
}
