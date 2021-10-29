import Link from 'next/link'
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';


const Linked = () => {

    
    return (
        <Card className="mt-8">
            <CardBody>
            <Tabs
                defaultTab="one"
                onChange={(tabId) => { console.log(tabId) }}
            >
                <TabList>
                <Tab tabFor="one">Invited</Tab>
                <Tab tabFor="two">Requested</Tab>
                </TabList>
                <TabPanel tabId="one">
                    <table className="items-center w-full bg-transparent border-collapse">
                            <tbody>
                                <tr>
                                    <th className="border-b border-gray-100 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="w-10 h-10 rounded-full">
                                            <Image
                                                src="/assets/user.png"
                                                alt="..."
                                            />
                                        </div>
                                    </th>
                                    <th className="border-b border-gray-100 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <h5 className="card-title"><b>Jane Doe</b></h5>
                                        <h6 className="card-text">17 years old</h6>
                                    </th>
                                    <th className="border-b border-gray-100 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <button class="bg-green-500 rounded-lg p-2">Cancel</button>
                                    </th>
                                </tr>
                            </tbody>
                    </table>
                </TabPanel>
                <TabPanel tabId="two">
                    <table className="items-center w-full bg-transparent border-collapse">
                            <tbody>
                                <tr>
                                    <th className="border-b border-gray-100 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="w-10 h-10 rounded-full">
                                            <Image
                                                src="/assets/user.png"
                                                alt="..."
                                            />
                                        </div>
                                    </th>
                                    <th className="border-b border-gray-100 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <h5 className="card-title"><b>Jane Doe</b></h5>
                                        <h6 className="card-text">17 years old</h6>
                                    </th>
                                    <th className="border-b border-gray-100 align-right font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <button class="bg-green-500 rounded-lg p-2 mr-2">Cancel</button>
                                        <button class="bg-green-500 rounded-lg p-2">Cancel</button>
                                    </th>
                                </tr>
                            </tbody>
                    </table>
                </TabPanel>
            </Tabs>
        </CardBody>
        </Card>
      );
}

export default Linked;