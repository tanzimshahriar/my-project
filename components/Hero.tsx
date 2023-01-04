import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="bg-lime">
            <div className="container mx-auto px-4">
                <h1 className="text-green text-3xl lg:text-6xl w-xl text-center pt-24 lg:leading-[70px]">
                    On-Boarding, Automation & persönliche Beratung
                </h1>
                <div className="text-center text-lg py-8 lg:p-8 lg:w-2/3 mx-auto font-light">
                    Mehr Abschlüsse und Effizienz mit unseren maßgeschneiderten
                    Pipedrive Lösungen
                </div>
                <div className="flex justify-center flex-col md:flex-row gap-3 lg:gap-8">
                    <Link
                        href="/"
                        className="bg-violet p-3 text-sm text-center lg:py-4 lg:px-6 text-white rounded-lg"
                    >
                        Gespräch vereinbaren
                    </Link>
                    <Link
                        href="/"
                        className="bg-white p-3 text-sm text-center lg:py-4 lg:px-6 text-violet rounded-lg"
                    >
                        Gespräch vereinbaren
                    </Link>
                </div>
                <div className="flex justify-center pt-24 relative">
                    <Image
                        src="/hero.png"
                        alt="hero"
                        className="flex-1"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </section>
    );
};
