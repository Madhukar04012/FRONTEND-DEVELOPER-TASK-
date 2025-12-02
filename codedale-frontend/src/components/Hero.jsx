"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="pt-44 pb-32 relative overflow-hidden bg-white">
            {/* background texture */}
            <div className="absolute inset-0 bg-[url('/images/dots.png')] opacity-[0.03] pointer-events-none -z-30"></div>

            {/* left glow */}
            <div className="absolute left-[-80px] top-40 w-[320px] h-[280px] bg-blue-200/25 blur-[140px] rounded-full -z-20"></div>

            {/* right glow */}
            <div className="absolute right-0 top-10 w-[380px] h-[220px] bg-blue-300/30 blur-[160px] rounded-full -z-20"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full font-semibold tracking-wide mb-6">
                        World class Tech Partner
                    </span>

                    <h1 className="text-6xl font-extrabold leading-[1.1] text-gray-900 tracking-tight">
                        Engineering Your <br />
                        <span className="text-blue-600">Digital Success</span>
                    </h1>

                    <p className="mt-6 text-gray-500 max-w-lg leading-relaxed text-lg">
                        We transform ideas into high-performance, scalable, and stunning digital
                        solutions. Elevate your brand with our expert engineering.
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="bg-gradient-to-br from-blue-600 to-blue-500 text-white px-8 py-3.5 rounded-xl font-medium text-sm shadow-[0_8px_24px_rgba(37,99,235,0.3)] hover:opacity-90 transition transform hover:-translate-y-0.5">
                            View Our Work.
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-600 px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-50 transition transform hover:-translate-y-0.5">
                            Contact Us
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT — HERO MOCKUP */}
                <div className="relative h-[300px] sm:h-[450px] w-full flex items-center justify-center mt-12 lg:mt-0">

                    {/* Mockup */}
                    <motion.img
                        src="/images/mockup-hero.png"
                        alt="dashboard"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full max-w-[550px] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10"
                    />

                    {/* floating card 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute left-0 bottom-10 bg-white border border-gray-50 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20 scale-90 sm:scale-100 origin-bottom-left"
                    >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                        </div>
                        <div>
                            <div className="text-xs sm:text-sm font-bold text-gray-800">Creative</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-400 font-medium">1-10 Sets</div>
                        </div>
                    </motion.div>

                    {/* floating card 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                        className="absolute right-4 top-0 bg-white border border-gray-50 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-20 scale-90 sm:scale-100 origin-top-right"
                    >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        </div>
                        <div>
                            <div className="text-xs sm:text-sm font-bold text-gray-800">Fast</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-400 font-medium">Performance</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
