import '../styles/tailwind.css'
import {motion, AnimatePresence} from 'framer-motion';

export default function App({Component, pageProps, router}) {
    return (
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1
            },
            pageExit: {
                backgroundColor: 'bg-gray-100',
                filter: `invert()`,
                opacity: 0
            }
        }}>
            <Component {...pageProps} />
        </motion.div>
    )
}
