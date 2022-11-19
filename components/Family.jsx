import {Container} from "./Container";

const groom_family = [
    {
        name: 'Ishwar Chinwal',
        role: 'Father',
        image: '/father-groom.jpeg',
        initials: 'IC',
        color: 'bg-rose-600'
    },
    {
        name: 'Parvati Chinwal',
        role: 'Mother',
        image: 'mother-groom.jpeg',
        initials: 'PC',
        color: 'bg-green-600'
    },
    {
        name: 'Bhavana Chinwal',
        role: 'Sister',
        image: 'sister-groom-1.jpeg',
        initials: 'BC',
        color: 'bg-yellow-600'
    },
    {
        name: 'Varsha Chinwal',
        role: 'Sister',
        image: 'sister-groom-2.svg',
        initials: 'VC',
        color: 'bg-indigo-600'
    },
]

const bride_family = [
    {
        name: 'Birendra Kumar Singh',
        role: 'Father',
        image: 'father-bride.svg',
        initials: 'BKC',
        color: 'bg-indigo-600'
    },
    {
        name: 'Punam Singh',
        role: 'Mother',
        image: 'mother-bride.svg',
        initials: 'PS',
        color: 'bg-yellow-600'
    },
    {
        name: 'Shweta Chaudhary',
        role: 'Sister',
        image: 'sister-bride-1.svg',
        initials: 'SC',
        color: 'bg-green-600'
    },
    {
        name: 'Rishbha',
        role: 'Sister',
        image: 'sister-bride-2.svg',
        initials: 'RS',
        color: 'bg-rose-600'
    },
]

export function Family() {

    return (
        <Container>
            <div className={'grid grid-cols gap-8 my-5'}>
                <h2 className="text-3xl font-mono font-bold leading-6 text-rose-600 tracking-wide">Family</h2>
                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    <h2 className={'block md:hidden text-lg font-mono font-bold leading-6 text-rose-600 tracking-wide'}>Groom&apos;s Family</h2>
                    {groom_family.map((person, index) => (
                        <li key={index} className="col-span-1 flex rounded-md shadow-sm">
                            <div className={
                                `${person.color} flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md`
                            }
                            >
                                {person.initials}
                            </div>
                            <div
                                className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                <span className="font-medium text-gray-900 hover:text-gray-600">
                                    {person.name}
                                </span>
                                    <p className="text-gray-500">{person.role} of the Groom</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    <h2 className={'block md:hidden text-lg font-mono font-bold leading-6 text-rose-600 tracking-wide'}>Bride&apos;s Family</h2>
                    {bride_family.map((person, index) => (
                        <li key={index} className="col-span-1 flex rounded-md shadow-sm">
                            <div className={
                                `${person.color} flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md`
                            }
                            >
                                {person.initials}
                            </div>
                            <div
                                className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                <span className="font-medium text-gray-900 hover:text-gray-600">
                                    {person.name}
                                </span>
                                    <p className="text-gray-500">{person.role} of the bride</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}
