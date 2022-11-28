import {CalendarIcon, MapPinIcon} from '@heroicons/react/24/solid'
import Image from 'next/image'

export function Example() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
                <svg
                    className="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform"
                    width={640}
                    height={784}
                    fill="none"
                    viewBox="0 0 640 784"
                >
                    <defs>
                        <pattern
                            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                            x={118}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor"/>
                    <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"/>
                </svg>
            </div>

            <div className="relative pb-8">
                <main className="mx-auto mt-8 max-w-7xl px-4">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="flex flex-col items-center font-alex-bush leadng-loose sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                            <div className={''}>
                                <p className={'font-indie-flower text-center text-xl font-semibold text-gray-800 tracking-wider'}>We request the
                                    honor of your presence at the marriage ceremony of
                                </p>
                                <span className="flex flex-col space-y-2 my-2 text-center block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                                    <span className="block text-rose-600">Prasad</span>
                                    <p className={'font-indie-flower text-xl font-semibold text-gray-800 tracking-wider'}>S/O Ishwar Chinwal & Parvati Chinwal</p>
                                    <span className="block text-rose-600">Marisha</span>
                                    <p className={'font-indie-flower text-xl font-semibold text-gray-800 tracking-wider'}>D/O Birendra Kumar Singh & Punam Singh</p>
                                </span>
                            </div>

                            <div className="my-5 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                                <div className="relative px-4 sm:px-6 lg:px-8">
                                    <div className="mx-auto max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                        <div
                                            className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 place-content-center sm:gap-5 sm:space-y-0">
                                            <div
                                                className="font-mono tracking-tighter inline-flex items-center justify-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
                                                <a
                                                    href={'/prasad-marisha-wedding.ics'} target={'_blank'} rel="noreferrer"
                                                    download
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-rose-50 px-4 py-3 text-base font-medium text-rose-700 shadow-sm hover:bg-rose-50 sm:px-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    >
                                                    <CalendarIcon className={'w-4 h-4 mr-2'}/>
                                                    <span>January 23rd, 2023 at 12.30 PM</span>
                                                </a>
                                            </div>
                                            <div
                                                className="font-mono tracking-tighter inline-flex items-center justify-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
                                                <a
                                                    target={'_blank'} href={'https://goo.gl/maps/mFsDNXnZ6SbJ9QMf9'}
                                                    rel="noreferrer"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-rose-700 bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    >
                                                    <MapPinIcon className={'w-4 h-4 mr-2'} />
                                                    <span>Shree Kamakshi temple, Shiroda, Goa.</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                            <svg
                                className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
                                width={640}
                                height={784}
                                fill="none"
                                viewBox="0 0 640 784"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                                        x={118}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor"/>
                                <rect x={118} width={404} height={784}
                                      fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"/>
                            </svg>
                            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                <div
                                    className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <img
                                        className="w-full h-1/2"
                                        src="/prasad-marisha-wed.jpeg"
                                        alt="Marisha-Prasad"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
