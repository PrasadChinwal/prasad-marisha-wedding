import {Container} from "./Container";

const schedule = [
    {
        name: 'Vivah Muhurth',
        description: 'wedding muhurth',
        start: '12:30PM',
        end: '2:00PM',
        image: '/wedding.svg'
    },
    {
        name: 'Lunch',
        description: null,
        start: '02:00PM',
        end: '3:00PM',
        image: '/lunch.svg'
    },
]

export function Schedule() {
    return (
        <section id="schedule" aria-label="Schedule" className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 py-5 sm:py-10">
            <Container className="">
                <div className={''}>
                    <h2 className="text-center underline underline-offset-4 md:text-left text-3xl font-mono font-bold leading-6 text-rose-600 tracking-wide">Schedule</h2>
                    <dl className="mt-10 py-5 grid grid-cols-1 justify-center gap-5 sm:grid-cols-2">
                        {schedule.map((item, index) => (
                            <div key={index}
                                 className="md:flex bg-gray-50 rounded-xl p-8 md:p-0">
                                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                                    src={item.image} alt={item.name} width="384" height="512"/>
                                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                    <blockquote>
                                        <p className="text-lg font-medium">
                                            {item.name}
                                        </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                        <div className="font-mono text-rose-500">
                                            { item.start } - { item.end }
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    )
}
