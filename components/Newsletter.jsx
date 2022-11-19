import {Button} from "./Button";
import {Container} from "./Container";

export function Newsletter() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="divide-y-4 py-5 divide-rose-200">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-2xl font-mono font-bold tracking-tighter text-rose-600 sm:text-3xl">Get in touch</h2>
                        <div
                            className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Ishwar Chinwal</h3>
                                <dl className="mt-2 text-base text-gray-500">
                                    <div className="mt-1">
                                        <dt className="sr-only">Phone number</dt>
                                        <dd className={''}>94238192492</dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Parvati Chinwal</h3>
                                <dl className="mt-2 text-base text-gray-500">
                                    <div className="mt-1">
                                        <dt className="sr-only">Phone number</dt>
                                        <dd>123456789</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-2xl font-mono font-bold text-rose-600 sm:text-3xl">Address</h2>
                        <div
                            className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Groom&apos;s Family</h3>
                                <div className="mt-2 text-base text-gray-500">
                                    <p>F2, Prashil Housing Society</p>
                                    <p className="mt-1">Ponda Goa, 403401</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Wedding Location</h3>
                                <div className="mt-2 text-base text-gray-500">
                                    <p>Kamakshi Sabhagruha, Kamaxi Temple</p>
                                    <p className="mt-1">Shiroda, Ponda, Goa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
