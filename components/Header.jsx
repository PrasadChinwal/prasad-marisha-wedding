import {CalendarIcon} from "./CalendarIcon";
import {Logo} from "./Logo";
import {LocationIcon} from "./LocationIcon";
import {Container} from "./Container";

export function Header() {
    return (
        <header className="relative z-50 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10">
            <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">

                <div className="lg:block mt-10 lg:mt-0 lg:grow lg:basis-0">
                    <Logo className="h-12 w-auto text-slate-900"/>
                </div>

                <div className="-mx-4
                      flex flex-auto basis-full whitespace-nowrap py-4
                      font-mono text-sm text-rose-600 sm:-mx-6
                      lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0"
                >
                    <div className="mx-auto flex flex-col lg:flex-row items-center gap-2 space-x-2 px-4">
                        <CalendarIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"/>
                        <a className={'underline underline-offset-8 cursor-pointer'} href={'/prasad-marisha-wedding.ics'}
                           target={'_blank'}
                           rel="noreferrer" download>
                            <time dateTime="2023-01-23">23 of January, 2023</time>
                        </a>

                        <LocationIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"/>
                        <a className={'underline underline-offset-8 cursor-pointer'} target={'_blank'}
                           href={'https://goo.gl/maps/mFsDNXnZ6SbJ9QMf9'} rel="noreferrer">
                            Kamakshi Temple, Shiroda, Ponda, Goa
                        </a>
                    </div>
                </div>

            </Container>
        </header>
    )
}
