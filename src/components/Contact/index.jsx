import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <p className={styles.phone}><i className="fa-solid fa-phone"></i>+123 456 7890</p>
    </div>
  )
}

export default Contact