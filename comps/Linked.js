import Link from 'next/link'
import Image from 'next/image'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

import styles from '../styles/Linked.module.css'


const Linked = () => {

    
    return (
        <div className={styles.card}>
            <Tabs
                defaultTab="one"
                onChange={(tabId) => { console.log(tabId) }}
            >
                <TabList>
                <Tab tabFor="one">Invited</Tab>
                <Tab tabFor="two">Requested</Tab>
                </TabList>
                <TabPanel tabId="one">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className={styles.ukur}><Image src="/user.png" alt="site logo" width={60} height={60} /></td>
                            <td className="text-left"> 
                                <p>Jane Doe</p>
                                <p>16 years old</p>
                            </td>
                            <td className={styles.teng}><button href="#" className={styles.tombol}>Cancel</button></td>
                        </tr>
                    </tbody>
                </table>
                </TabPanel>
                <TabPanel tabId="two">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className={styles.ukur}><Image src="/user.png" alt="site logo" width={60} height={60} /></td>
                            <td className="text-left"> 
                                <p>Jane Doe</p>
                                <p>16 years old</p>
                            </td>
                            <td>
                                <button href="#" className={styles.tombol2}>Decline</button>
                            </td>
                            <td>
                                <button href="#" className={styles.tombol}>Accept</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </TabPanel>
            </Tabs>
        </div>
      );
}

export default Linked;