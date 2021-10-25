import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Main.module.css'


const MainMenu = () => {
    
  return (
                    <div className={styles.card}>
                        <h3 className={styles.h3}><b>Your Profile Information</b></h3>
                        <div className="mb-3">
                            <label className="form-label"><b>Full Name</b></label>
                            <h6>Parent’s Name</h6>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Email</b></label>
                            <h6>parents@email.com</h6>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Address</b></label>
                            <h6>Parent’s Address</h6>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Phone Number</b></label>
                            <h6>Parent’s Number</h6>
                        </div>
                        
                        <button href="#" className={styles.tombol}>Edit</button>
                        
                    </div>
  );
}

export default MainMenu;