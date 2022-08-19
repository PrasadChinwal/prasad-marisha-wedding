import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab} from "@headlessui/react"
import clsx from "clsx";
import { Container} from "./Container";
import { ChevronRightIcon} from "./ChevronRightIcon";
import FatherGroom from "../../public/father-groom.svg"
import FatherBride from "../../public/father-bride.svg"
import MotherGroom from "../../public/mother-groom.svg"
import MotherBride from "../../public/mother-bride.svg"
import SisterOneGroom from "../../public/sister-groom-1.svg"
import SisterTwoGroom from "../../public/sister-bride-2.svg"
import SisterOneBride from "../../public/sister-bride-1.svg"
import SisterTwoBride from "../../public/sister-bride-2.svg"


const families = [
  {
    name: 'Groom\'s Family',
    members: [
      {
        name: 'Ishwar Chinwal',
        role: 'Father',
        image: FatherGroom,
      },
      {
        name: 'Parvati Chinwal',
        role: 'Mother',
        image: MotherGroom,
      },
      {
        name: 'Bhavana Chinwal',
        role: 'Sister',
        image: SisterOneGroom,
      },
      {
        name: 'Varsha Chinwal',
        role: 'Sister',
        image: SisterTwoGroom,
      },
    ],
  },
  {
    name: 'Bride\'s Family',
    members: [
      {
        name: 'Birendra Kumar Singh',
        role: 'Father',
        image: FatherBride,
      },
      {
        name: 'Punam Singh',
        role: 'Mother',
        image: MotherBride,
      },
      {
        name: 'Shweta',
        role: 'Sister',
        image: SisterOneBride,
      },
      {
        name: 'Rishbha Singh',
        role: 'Sister',
        image: SisterTwoBride,
      },
    ],
  }
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Family() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="family"
      aria-labelledby="family-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="family-title"
            className="font-display text-4xl font-medium tracking-tighter text-rose-600 sm:text-5xl"
          >
            Family
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-rose-800">
            Meet our family.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                families.map((family, familyIndex) => (
                  <div key={family.name} className="relative lg:pl-8">
                    <ChevronRightIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        familyIndex === selectedIndex
                          ? 'fill-rose-600 stroke-rose-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          familyIndex === selectedIndex
                            ? 'outline-none focus:ring-0 text-rose-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {family.name}
                        </Tab>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {families.map((family) => (
              <Tab.Panel
                key={family.name}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 lg:grid-cols-4 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {family.members.map((member, memberIndex) => (
                  <div key={memberIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-rose-300',
                            'border-rose-300',
                            'border-rose-300',
                          ][memberIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-rose-50"
                        style={{ clipPath: `url(#${id}-${memberIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={member.image}
                          alt={member.name}
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {member.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
