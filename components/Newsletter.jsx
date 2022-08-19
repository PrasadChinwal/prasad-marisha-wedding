import { Button} from "./Button";
import { Container} from "./Container";

export function Newsletter() {
  return (
    <section className={'pb-8'} id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-rose-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 rounded-lg md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-rose-900 sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight text-rose-900">
                Get updates on all of our events.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-rose-900">
                Sign up to receive updates <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="relative px-5 mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-rose-900/5 focus-within:ring-2 focus-within:ring-rose-900">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <select id="country" name="country" autoComplete="country"
                          className="focus:ring-rose-500 focus:border-rose-500 h-full py-0 pl-3 pr-1 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                    <option value={'+91'}>IN</option>
                    <option value={'+1'}>US/CA</option>
                  </select>
                </div>
                <input type="text" name="phone-number" id="phone-number"
                       className="mx-4 focus:ring-rose-500 focus:border-rose-500 block w-full pl-16 sm:text-sm border-rose-300 rounded-md"
                       placeholder="+1 (555) 987-6543"/>
                <Button type="submit">
                  <span className="">Subscribe</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
