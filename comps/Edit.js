import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Edit.module.css'


const Edit = () => {
    
  return (
                    <div className={styles.card}>
                        <h3 className={styles.h3}><b>Edit Your Profile</b></h3>
                        <div className="mb-3">
                            <label className="form-label"><b>Full Name</b></label>
                            <input type="text" className="form-control" id="editnama" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Email</b></label>
                            <h6>parents@email.com</h6>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Address</b></label>
                            <input type="text" className="form-control" id="editalamat" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Phone Number</b></label>
                            <input type="number" className="form-control" id="editnomer" />
                        </div>
                        
                        <button href="#" className={styles.tombol}>Save</button>
                        
                    </div>
  );
}

export default Edit;