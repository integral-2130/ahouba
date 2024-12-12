import TiltEffect from "../utility/TiltEffect.tsx";
import EventCard from "./EventCard.tsx";

const EventGrid = () => {
    return (
        <div className="grid lg:grid-cols-6 grid-rows-5 lg:grid-rows-12 w-full h-full lg:px-60 lg:pb-20 gap-4">
            <div className="lg:col-span-6 lg:row-span-4 rounded-3xl overflow-hidden">
                <TiltEffect className="w-full h-full">
                    <EventCard
                        src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ideaVideo.mp4"
                        title="IDEATHON"
                        description="Ideathon: Unleash your creativity, collaborate with like-minded innovators, and transform your ideas into groundbreaking solutions that make a real impact !"
                    />
                </TiltEffect>
            </div>
            <div className="lg:col-span-3 lg:row-span-4 lg:row-start-5 lg:rounded-3xl overflow-hidden">
                <TiltEffect className="w-full h-full">
                    <EventCard
                        src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/codehunt.mp4"
                        title="CODEHUNT"
                        description="CodeHunt: Challenge your skills, compete for glory, and sharpen your coding abilities !"
                    />
                </TiltEffect>
            </div>
            <div className="lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-5 rounded-3xl overflow-hidden">
                <TiltEffect className="w-full h-full">
                    <EventCard
                        src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/robo.mp4"
                        title="ROBOWAR"
                        description="RoboWareEvent: Innovate, compete, and showcase your robotics skills !"
                    />
                </TiltEffect>
            </div>
            <div className="lg:col-span-3 lg:row-span-4 lg:col-start-4 lg:row-start-8 rounded-3xl overflow-hidden">
                <TiltEffect className="w-full h-full">
                    <EventCard
                        src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/prog.mp4"
                        title="Competitive Programming"
                        description="Competitive Programming Event: Solve challenges, test your skills, and race to victory in the world of coding !"
                    />
                </TiltEffect>
            </div>
            <div className="lg:col-span-3 lg:row-span-4 lg:row-start-9 rounded-3xl overflow-hidden">
                <TiltEffect className="w-full h-full">
                    <EventCard
                        src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/esport.mp4"
                        title="ESPORTS"
                        description="Esport Event: Compete, conquer, and rise to the top in the ultimate gaming showdown !"
                    />
                </TiltEffect>
            </div>
        </div>
    )
}
export default EventGrid