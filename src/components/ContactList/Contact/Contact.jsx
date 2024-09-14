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
    <div className={styles.contact}>
      <div className={styles.text}>
        <span>
          <FaUser className={styles.icon} />
          {name}
        </span>
        <span>
          <FaPhoneAlt className={styles.icon} />
          {number}
        </span>
      </div>
      <button type="button" className={styles.btn} onClick={removeContact}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
