import styles from "./Modal.module.css";
import CartList from "../Cart/CartList";
import { Link } from "react-router-dom";
const Modal = (props) => {
  return (
    <div className={`col-11 ${styles.modal}`}>
      <div className={styles.modalHeader}>
        <h5 className={`${styles.heading} font-2`}> سبد خرید</h5>
      </div>
      <button className={styles.closeBtn} onClick={props.onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>
      <div className={styles.modalContent}>
        <CartList></CartList>
      </div>
      <div className={styles.modalActions}>
        <div className={styles.actionsContainer}>
          <button className={styles.deleteBtn} onClick={props.onClose}>
            <Link to='/cart' className="text-white">برو به سبد خرید</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
