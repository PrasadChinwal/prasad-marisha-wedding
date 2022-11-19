import {Container} from "./Container";
import Image from "next/image";
import MarishaPrasad from '../public/prasad-marisha.jpeg'

export function Hero() {
    return (
        <main className="lg:relative px-5 mx-5">
            <div className="mx-auto w-full max-w-7xl py-16 text-center lg:py-20 lg:text-left">
                <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                    <p className="text-center mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        We Request the honor of your presence at the marriage ceremony of
                    </p>
                    <div className="grid grid-cols grid-flow-row py-5 text-center font-bold tracking-light">
                        <p className="m-2 p-1 block rounded text-white bg-gradient-to-r from-indigo-600 to-pink-500 text-4xl">Prasad</p>
                        <p className="inline-block text-indigo-600 xl:inline">S/O Ishwar and Parvati Chinwal</p>
                        <p className="m-2 p-1 block rounded text-white bg-gradient-to-r from-indigo-600 to-pink-500 text-4xl">Marisha</p>
                        <p className="inline-block text-indigo-600 xl:inline">D/O Birendra Kumar and Punam Singh</p>
                    </div>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md">
                            <a className={'font-semibold underline text-gray-500 decoration-pink-500 underline-offset-8'}
                               href={'/prasad-marisha-wedding.ics'} target={'_blank'}
                               rel="noreferrer" download
                            >
                                January 23rd 2023 @ 12.30 PM
                            </a>
                        </div>
                        <span className={'text-gray-500'}>at</span>
                        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                            <a className={'font-semibold underline text-gray-500 decoration-pink-500 underline-offset-8'}
                               target={'_blank'} href={'https://goo.gl/maps/mFsDNXnZ6SbJ9QMf9'}
                               rel="noreferrer"
                            >
                                Shree Kamakshi temple, Shiroda, Goa.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <Image
                    className="absolute rounded-md inset-0 h-full w-full object-cover"
                    src={MarishaPrasad}
                    alt="Marisha-Prasad"
                />
            </div>
        </main>
    )
}