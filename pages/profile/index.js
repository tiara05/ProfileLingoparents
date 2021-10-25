import Link from 'next/link'
import Image from 'next/image'
import SidebarMenu from '../../comps/SidebarMenu';
import Edit from '../../comps/Edit';
import MainMenu from '../../comps/MainMenu';
import Linked from '../../comps/Linked';
import styles from '../../styles/Home.module.css'
import ChangePassword from '../../comps/ChangePassword';

const Profile = ({ profile }) => {
  // console.log(ninjas)

  return (
    <div className="container">
      <div className={styles.margin}></div>
      <div className="row">
        <div className="col-lg-2">
          <Image src="/user.png" alt="site logo" width={144} height={144} />
        </div>
        <div className="col-lg-8 d-flex align-items-center">
          <h1>Hello, Parents!</h1>
        </div>
      </div>

      <div className={styles.margin}></div>
      
      <div className="row">
        <div className="col-lg-4">
          <SidebarMenu />
          
        </div>
        <div className="col-lg-8">
          {/* <MainMenu /> */}
          <Linked />
          {/* <ChangePassword /> */}
          {/* <Edit /> */}
        </div>
      </div>
    </div>
  );
}
 
export default Profile;