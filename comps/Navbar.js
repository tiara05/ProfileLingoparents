import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm">

      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Image src="/logo.png" alt="site logo" width={240} height={40} />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Course</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Event</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Insight</a>
          </li>
        </ul>
        
        <Link href="/profile/" className="">Profile</Link>
      </div>

    </nav>
  );
}

export default Navbar;