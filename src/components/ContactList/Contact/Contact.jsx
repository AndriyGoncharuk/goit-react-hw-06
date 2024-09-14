import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const removeContact = () => dispatch(deleteContact(id));
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <FaUser className={styles.icon} />
          <p className={styles.text}>{name}</p>
        </li>
        <li className={styles.item}>
          <FaPhoneAlt className={styles.icon} />
          <p className={styles.text}>{number}</p>
        </li>
      </ul>
      <button type="button" className={styles.btn} onClick={removeContact}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
