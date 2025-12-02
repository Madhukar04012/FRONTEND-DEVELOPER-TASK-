"use client";
import { motion } from "framer-motion";

export default function FeatureGrid() {
    const features = [
        { title: "Lightning Fast", desc: "Optimized for speed and performance.", icon: "/images/icons/lightning.svg" },
        { title: "Fully Responsive", desc: "Looks perfect on every device.", icon: "/images/icons/phone.svg" },
        { title: "Secure by Design", desc: "Security built-in from day one.", icon: "/images/icons/lock.svg" },
        { title: "Modern UI/UX", desc: "Stunning visuals to engage users.", icon: "/images/icons/design.svg" },
        { title: "Scalable Architecture", desc: "Grow without technical debt.", icon: "/images/icons/scale.svg" },
        { title: "24/7 Support", desc: "We're ready to help anytime.", icon: "/images/icons/support.svg" },
    ];

    return (
        <section id="features" className="py-28 bg-[#F7F9FC]">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl font-bold text-gray-900"
                >
                    Why Choose Us
                </motion.h2>

                <p className="text-gray-500 mt-2">We deliver excellence in every pixel.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition flex gap-4 items-start hover:-translate-y-1"
                        >
                            <img src={f.icon} className="w-10 h-10" alt={f.title} />
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-800">{f.title}</h3>
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
