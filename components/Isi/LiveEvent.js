import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';

export default function LiveEvent() {
    return (
        <Card className="mt-8">
            <CardBody>
                <div className="overflow-x-auto">
                    <h2 className="text-white text-3xl text-center">Live Event</h2>
                    <hr className="my-4 min-w-full" />
                    <div class="rounded-lg bg-gray-500 grid grid-rows-1 md:grid-cols-5 p-4" >
                        <div className="rounded-lg bg-gray-400 w-14 h-14 p-2 text-center">
                            <h5>08</h5>
                            <h6>Sept</h6>
                        </div>
                        <div className="md:col-span-4 text-center">
                            <h5>Build Career for Gen Z Build Career for Gen Z</h5>
                        </div>
                        
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
