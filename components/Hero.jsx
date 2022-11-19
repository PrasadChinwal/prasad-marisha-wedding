import {Container} from "./Container";
import {CalendarIcon} from "./CalendarIcon";
import {LocationIcon} from "./LocationIcon";
import Image from 'next/image'

export function Hero() {
    return (
        <Container className={'py-10'}>
            <div>
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 "/>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                            <div className="absolute inset-0">
                                <Image
                                    className="h-full w-full object-cover"
                                    src="/prasad-marisha.jpeg"
                                    alt="MarishaPrasad"
                                    layout="fill"
                                    priority={true}
                                />
                                <div
                                    className="absolute bg-cover backdrop-blur-xxs inset-0 bg-rose-300 mix-blend-multiply"/>
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <p className={'text-center font-semibold text-white tracking-wider'}>We request the
                                    honor of your presence at the marriage ceremony of</p>
                                <h1 className="text-center font-bold tracking-tight">
                                    <span
                                        className="block text-white font-mono text-4xl sm:text-5xl lg:text-6xl">Prasad</span>
                                    <span className="block text-white tracking-wider font-mono">S/O Ishwar Chinwal & Parvati Chinwal</span>
                                    <span className="block text-white tracking-wider font-mono">and</span>
                                    <span
                                        className="block text-white font-mono text-4xl sm:text-5xl lg:text-6xl">Marisha</span>
                                    <span className="block text-white tracking-wider font-mono">D/O Birendra Kumar Singh & Punam Singh</span>
                                </h1>
                                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                    <div
                                        className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                                        <div
                                            className="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
                                            <a
                                                href={'/prasad-marisha-wedding.ics'} target={'_blank'} rel="noreferrer"
                                                download
                                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                                            >
                                                <CalendarIcon></CalendarIcon>
                                                January 23rd, 2023 at 12.30 PM
                                            </a>
                                        </div>
                                        <div
                                            className="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
                                            <a
                                                target={'_blank'} href={'https://goo.gl/maps/mFsDNXnZ6SbJ9QMf9'}
                                                rel="noreferrer"
                                                className="flex items-center justify-center rounded-md border border-transparent bg-rose-700 bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                                            >
                                                <LocationIcon/>
                                                Shree Kamakshi temple, Shiroda, Goa.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}