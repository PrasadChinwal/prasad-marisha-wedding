import {Container} from "./Container";

const schedule = [
    {
        name: 'Muhurth',
        description: 'wedding muhurth',
        start: '12:30PM',
        end: '2:00PM',
    },
    {
        name: 'Lunch',
        description: null,
        start: '02:00PM',
        end: '3:00PM',
    },
]

export function Schedule() {
    return (
        <section id="schedule" aria-label="Schedule" className="py-5 sm:py-10">
            <Container className="">
                <div className={''}>
                    <h2 className="text-3xl font-bold leading-6 text-rose-600 tracking-wide">Schedule</h2>
                    <dl className="mt-10 py-5 grid grid-cols-1 justify-center gap-5 sm:grid-cols-2">
                        {schedule.map((item, index) => (
                            <div key={item.name}
                                 className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                <dt className="text-center truncate text-xl font-bold text-rose-500">{item.name}</dt>
                                <div className={'mt-5 flex flex-col md:flex-row justify-between items-center'}>
                                    <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-500">From: {item.start}</dd>
                                    <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-500">To: {item.end}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    )
}
