import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';

export default function ChildrenList() {
    return (
        <Card className="mt-8">
            <CardBody>
                <div className="overflow-x-auto">
                    <h2 className="text-white text-3xl text-center">Children</h2>
                    <hr className="my-4 min-w-full" />
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
                                    <h5 className="card-title"><b>Jane Doe (16 years old)</b></h5>
                                    <h6 className="card-text">Relationship : Guardian</h6>
                                    <p className="card-text">Beginner - Sublevel 2</p>
                                </th>
                                <th className="border-b border-gray-100 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <h6 className="card-title font-bold"><b>Learning Progress</b></h6>
                                </th>
                            </tr>
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
                                    <h5 className="card-title"><b>Jane Doe (16 years old)</b></h5>
                                    <h6 className="card-text">Relationship : Guardian</h6>
                                    <p className="card-text">Beginner - Sublevel 2</p>
                                </th>
                                <th className="border-b border-gray-100 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <h6 className="card-title font-bold"><b>Learning Progress</b></h6>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
