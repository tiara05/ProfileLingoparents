import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Edit.module.css'


const ChangePassword = () => {
    
  return (
                    <div className={styles.card}>
                        <h3 className={styles.h3}><b>Edit Your Profile</b></h3>
                        <div className="mb-3">
                            <label className="form-label"><b>Current Password</b></label>
                            <input type="password" className="form-control" id="current" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>New Password</b></label>
                            <input type="password" className="form-control" id="new" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Confirm Password</b></label>
                            <input type="password" className="form-control" id="confirm" />
                        </div>
                        
                        <button href="#" className={styles.tombol}>Save</button>
                        <button href="#" className={styles.tombol2}>Cancel</button>
                        
                    </div>
  );
}

export default ChangePassword;