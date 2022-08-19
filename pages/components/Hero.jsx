import {Container} from "./Container";
import Image from "next/image";

export function Hero() {
  return (
    <Container className={'relative'}>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div className="place-items-center lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6">
            <h1>
              <span
                className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
                We Request the honor of your presence at the marriage ceremony of
              </span>
              <div
                className="mt-1 flex flex-col font-mono space-y-1">
                <span className="text-4xl font-bold tracking-tight text-rose-600">Mr. Prasad Chinwal</span>
                <span className={'text-center text-lg font-bold'}>S/O Ishwar & Parvati Chinwal</span>
                <span className={'text-center font-bold text-2xl'}>and</span>
                <span className="text-4xl font-bold tracking-tight text-rose-600">Ms. Marisha Singh</span>
                <span className={'text-center text-lg font-bold'}>D/O Birendra Kumar & Punam Singh</span>
              </div>
            </h1>
            <p className="mt-3 block font-semibold text-gray-500 text-base sm:mt-5 sm:text-lg lg:text-lg xl:text-xl">
            January 23rd 2023 at 12.30 PM at Shree Kamakshi temple, Shiroda, Goa.
            </p>
          </div>
          <div
            className="overflow-hidden mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
              <defs>
                <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20"
                         patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
                </pattern>
              </defs>
              <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor"/>
              <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"/>
            </svg>
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full bg-center bg-clip-content rounded-lg"
               src="/prasad-marisha.jpeg"
               alt="Prasad Marisha"
              />
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}