import { MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
export function Contact() {
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="divide-y-4 py-5 divide-rose-200">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-center underline underline-offset-4 md:text-left text-2xl font-mono font-bold tracking-tighter text-rose-600 sm:text-3xl">Get
                            in touch</h2>
                        <div
                            className="text-center mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 justify-items-center lg:mt-0">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Ishwar Chinwal</h3>
                                <dl className="mt-2 text-base text-gray-500">
                                    <div className="mt-1">
                                        <dt className="sr-only">Phone number</dt>
                                        <a href={'tel:+919423812492'} className={'font-mono inline-flex items-center justify-center py-3 text-base font-medium'}>
                                            <DevicePhoneMobileIcon className={'w-4 h-4 mr-2'}/>
                                            Call
                                        </a>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Parvati Chinwal</h3>
                                <dl className="mt-2 text-base text-gray-500">
                                    <div className="mt-1">
                                        <dt className="sr-only">Phone number</dt>
                                        <a href={'tel:+919423812492'} className={'font-mono inline-flex items-center justify-center py-3 text-base font-medium'}>
                                            <DevicePhoneMobileIcon className={'w-4 h-4 mr-2'}/>
                                            Call
                                        </a>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-center underline underline-offset-4 md:text-left text-2xl font-mono font-bold text-rose-600 sm:text-3xl">Address</h2>
                        <div
                            className="text-center mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 justify-items-center lg:mt-0">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Groom&apos;s Family</h3>
                                <div className="mt-2 font-mono text-base text-gray-500">
                                    <p>F2, Prashil Housing Society</p>
                                    <p className="mt-1">Ponda Goa, 403401</p>
                                </div>
                                <a target={'_blank'} href={'https://goo.gl/maps/UoTKpxRi83SzeViv9'}
                                    rel="noreferrer"
                                    className={'inline-flex items-center justify-center rounded-md border border-transparent bg-rose-700 bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                                    <MapPinIcon className="h-4 w-4 mr-2"/>
                                    Click to check location
                                </a>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Wedding Location</h3>
                                <div className="mt-2 font-mono text-base text-gray-500">
                                    <p>Kamakshi Sabhagruha, Kamaxi Temple</p>
                                    <p className="mt-1">Shiroda, Ponda, Goa</p>
                                </div>
                                <a target={'_blank'} href={'https://goo.gl/maps/mFsDNXnZ6SbJ9QMf9'}
                                   rel="noreferrer"
                                   className={'inline-flex items-center justify-center rounded-md border border-transparent bg-rose-700 bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                                    <MapPinIcon className="h-4 w-4 mr-2" aria-hidden="true"/>
                                    Click to check location
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
