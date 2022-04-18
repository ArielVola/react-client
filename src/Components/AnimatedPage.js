import React from 'react'
import { motion } from 'framer-motion';

export const AnimatedPage = ({ children }) => {

    const animations = {
        initial : { opacity: .9 },
        animate : { opacity: 1 } ,
        exit    : { opacity: .9 }
    }

    return (
        <motion.div variants={ animations } 
            initial="initial"
            animate="animate" 
            exit="exit"
            transition={{duration: .3}}
        >
            { children }
        </motion.div>
    )
}
