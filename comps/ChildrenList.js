import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Children.module.css'


const ChildrenList = () => {
    
  return (
        <div className="row">
                <div className={styles.column1}>
                    <div className={styles.card}>
                        <h3 className={styles.h3}><b>Children</b></h3>
                        <div className="row">
                          <div className="col-lg-2">
                            <Image src="/user.png" alt="site logo" width={60} height={60} />
                          </div>
                          <div className="col-lg-6 text-left">
                              <h5 className="card-title"><b>Jane Doe (16 years old)</b></h5>
                              <h6 className="card-text">Relationship : Guardian</h6>
                              <p className="card-text">Beginner - Sublevel 2</p>
                          </div>
                          <div className="col-lg-4 text-left">
                              <h6 className="card-title"><b className={styles.color}>Learning Progress</b></h6>
                          </div>
                        </div>
                        <div className={styles.show}>
                          <h5 className="card-title"><b className={styles.color}>Learn a languange now!</b></h5>
                          <p className="card-text">Learn the language that your children fancy, on the time you wish, and the place you like!
                            LingoTalk offer all the flexibility at your fingertip. Lets start learning now!</p>
                          <a href="#" className="btn btn-warning">Enroll Course</a>
                        </div>
                    </div>
                </div>
                <div className={styles.column2}>
                    <div className={styles.card}>
                      <h3 className={styles.h3}><b>Live Event</b></h3>
                      <div className="row">
                          <div className="col-lg-2">
                            <div className={styles.kotak}>
                              <h5>08</h5>
                            </div>
                          </div>
                          <div className="col-lg-10 ">
                              <h6 className="card-title"><b>Build Career for Gen ZBuild Career for Gen Z</b></h6>
                          </div>
                      </div>
                    </div>
                </div>
        </div>
  );
}

export default ChildrenList;