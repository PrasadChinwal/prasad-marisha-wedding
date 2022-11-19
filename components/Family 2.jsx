import {Container} from "./Container";

const groom_family = [
    {
        name: 'Ishwar Chinwal',
        role: 'Father',
        image: '/father-groom.jpeg',
        initials: 'IC',
        color: 'bg-rose-500'
    },
    {
        name: 'Parvati Chinwal',
        role: 'Mother',
        image: 'mother-groom.jpeg',
        initials: 'PC',
        color: 'bg-green-500'
    },
    {
        name: 'Bhavana Chinwal',
        role: 'Sister',
        image: 'sister-groom-1.jpeg',
        initials: 'BS',
        color: 'bg-yellow-500'
    },
    {
        name: 'Varsha Chinwal',
        role: 'Sister',
        image: 'sister-groom-2.svg',
        initials: 'VC',
        color: 'bg-indigo-500'
    },
]

const bride_family = [
    {
        name: 'Birendra Kumar Singh',
        role: 'Father',
        image: 'father-bride.svg',
        initials: 'BKC',
        color: 'bg-indigo-500'
    },
    {
        name: 'Punam Singh',
        role: 'Mother',
        image: 'mother-bride.svg',
        initials: 'PS',
        color: 'bg-yellow-500'
    },
    {
        name: 'Shweta',
        role: 'Sister',
        image: 'sister-bride-1.svg',
        initials: 'SC',
        color: 'bg-green-500'
    },
    {
        name: 'Rishbha Singh',
        role: 'Sister',
        image: 'sister-bride-2.svg',
        initials: 'RS',
        color: 'bg-rose-500'
    },
]

export function Family() {

    return (
        <Container className={'mx-auto grid grid-cols gap-8 max-w-7xl'}>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {groom_family.map((person, id) => (
                        <li
                            key={id}
                            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                            >
                            <div className="flex flex-1 flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.image} alt=""/>
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                    <dt className="sr-only">Title</dt>
                                    <dd className="text-sm text-gray-500">{person.title}</dd>
                                    <dt className="sr-only">Role</dt>
                                    <dd className="mt-3">
                                        <span
                                            className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                            {person.role}
                                        </span>
                                    </dd>
                                </dl>
                            </div>
                        </li>
                        ))}
            </ul>

            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {bride_family.map((person, id) => (
                    <li
                        key={id}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                        <div className="flex flex-1 flex-col p-8">
                            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.image} alt=""/>
                            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                            <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="mt-3">
                                <span
                                    className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                  {person.role}
                                </span>
                                </dd>
                            </dl>
                        </div>
                    </li>
                ))}
            </ul>
        </Container>
    )
}
