import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';


export default function SidebarMenu() {
    return (
        <Card className="mt-8">
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                            <tbody>
                                <tr><a href="/profile/personal">
                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div>
                                            <Image
                                                src="/assets/personal.png"
                                                alt="..."
                                            />
                                        </div>
                                    </th>
                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <h5 className="card-title"><b>Personal Information</b></h5>
                                    </th>
                                </a></tr>
                                <tr><a href="/profile/linkk">
                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div>
                                            <Image
                                                src="/assets/linked.png"
                                                alt="..."
                                            />
                                        </div>
                                    </th>
                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <h5 className="card-title"><b>Linked Account</b></h5>
                                    </th>
                                </a></tr>
                                <tr><a href="/profile/change">
                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div>
                                            <Image
                                                src="/assets/password.png"
                                                alt="..."
                                            />
                                        </div>
                                    </th>
                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <h5 className="card-title"><b>Change Password</b></h5>
                                    </th>
                                </a></tr>
                            </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
