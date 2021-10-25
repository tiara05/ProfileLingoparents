import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Side.module.css'


const SidebarMenu = () => {
    
  return (
    <div className={styles.card}>
        <div className="row">
            <div className="col-lg-2">
                <Image src="/personal.png" alt="site logo" width={20} height={20} />
            </div>
            <div className="col-lg-10 text-left">
                <h6 className="card-text">Personal Information</h6>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-2">
                <Image src="/linked.png" alt="site logo" width={20} height={20} />
            </div>
            <div className="col-lg-10 text-left">
                <h6 className="card-text">Linked Account</h6>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-2">
                <Image src="/password.png" alt="site logo" width={20} height={20} />
            </div>
            <div className="col-lg-10 text-left">
                <h6 className="card-text">Change Password</h6>
            </div>
        </div>
    </div>
  );
}

export default SidebarMenu;