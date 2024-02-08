'use client'

import { motion } from "framer-motion";
import React from "react";

export default function Section({
    children,
    floatUp = true,
    delay = 0.3,
    duration = 1,
}) {
    const start = floatUp ? 40 : -40;
    return (
        <motion.div
            initial={{ opacity: 0, y: start }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: duration, delay: delay }}
        >
            {children}
        </motion.div>
    );
}
