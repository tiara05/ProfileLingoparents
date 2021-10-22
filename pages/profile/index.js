import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Profile = ({ profile }) => {
  // console.log(ninjas)

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <Image src="/user.png" alt="site logo" width={144} height={144} />
        </div>
        <div className="col-lg-10 d-flex align-items-center">
          <h1>Hello, Parents!</h1>
        </div>
      </div>
      
      
      {/* {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))} */}
    </div>
  );
}
 
export default Profile;