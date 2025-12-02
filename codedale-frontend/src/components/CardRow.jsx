"use client";
import { motion } from "framer-motion";
import Card from "./Card";

export default function CardRow() {
    const work = [
        {
            title: "Fintech App",
            subtitle: "Financial Dashboard",
            tag: "FINTECH",
            image: "/images/mockup-fintech.png"
        },
        {
            title: "E-Commerce",
            subtitle: "Purchases Store",
            tag: "E-COMMERCE",
            image: "/images/mockup-ecom.png"
        },
        {
            title: "AI Platform",
            subtitle: "Fintechdummling",
            tag: "AI PLATFORM",
            image: "/images/mockup-ai-dashboard.svg"
        },
        {
            title: "AK Platform",
            subtitle: "AI Dashboardreel",
            tag: "DASHBOARD",
            image: "/images/mockup-hero.png"
        }
    ];

    return (
        <section id="work" className="py-28">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl font-bold text-gray-900"
                >
                    Selected Work
                </motion.h2>

                <p className="text-gray-500 mt-3 text-lg">A glimpse into our recent masterpieces of code.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                    {work.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card {...item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
