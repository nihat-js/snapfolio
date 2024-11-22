import Aside from "./components/Aside";
import Bio from "./components/Bio";
import FeaturedProjects from "./components/FeaturedProjects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WorkExperiences from "./components/WorkExperiences";
import {skills} from "./config/settings";

export default function Home() {


    return (
        <main>
            <div className="bg-background min-h-screen">
                <div className="container max-w-screen-lg mx-auto px-4 py-8">
                    <Navbar/>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Aside skills={skills}/>
                        <main className="md:col-span-2">
                            <Bio/>
                            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
                            <WorkExperiences/>
                            <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
                            <FeaturedProjects/>
                        </main>
                    </div>
                </div>
            </div>
        </main>
    );
}
