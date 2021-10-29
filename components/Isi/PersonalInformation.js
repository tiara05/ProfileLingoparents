import Link from 'next/link'
import React, { Component } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';



const PersonalInformation = () => {

    
    return (
        <Card className="mt-8">
            <CardBody>
                    <div className="flex flex-wrap">
                        <div className="w-full pr-4 font-light m-4">
                            <label>Full Name</label>
                            <Input
                                type="text"
                                readonly
                                color="purple"
                                value="Parent’s Name"
                            />
                        </div>
                        <div className="w-full pr-4 font-light m-4">
                            <label>Email</label>
                            <Input
                                type="email"
                                readonly
                                color="purple"
                                value="Parent’s Name"
                            />
                        </div>
                        <div className="w-full pr-4 font-light m-4">
                            <label>Address</label>
                            <Input
                                type="text"
                                readonly
                                color="purple"
                                value="Parent’s Address"
                            />
                        </div>
                        <div className="w-full pr-4 font-light m-4">
                            <label>Phone Number</label>
                            <Input
                                type="text"
                                readonly
                                color="purple"
                                value="Parent’s Number"
                            />
                        </div>
                    </div>

                    <Button className="bg-green-500 mt-4" color="purple"  ripple="dark">
                        <a href="/profile/edit/">Edit</a>
                    </Button>
            </CardBody>
        </Card>
      );
}

export default PersonalInformation;