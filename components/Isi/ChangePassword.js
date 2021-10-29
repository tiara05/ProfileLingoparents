import Link from 'next/link'
import React, { Component } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';



const ChangePassword = () => {

    
    return (
        <Card className="mt-8">
            <CardBody>
                    <div className="flex flex-wrap">
                        <div className="w-full pr-4 font-light m-4">
                            <label>Current Password</label>
                            <Input
                                type="password"
                                color="purple"
                            />
                        </div>
                        <div className="w-full pr-4 font-light m-4">
                            <label>New Password</label>
                            <Input
                                type="password"
                                color="purple"
                            />
                        </div>
                        <div className="w-full pr-4 font-light m-4">
                            <label>Confirm Password</label>
                            <Input
                                type="password"
                                color="purple"
                            />
                        </div>
                    </div>

                    <Button className="bg-green-500 mt-4" color="purple" buttonType="link" ripple="dark">
                        Submit
                    </Button>
            </CardBody>
        </Card>
      );
}

export default ChangePassword;