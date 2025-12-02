import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl border-b border-gray-100 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold text-[#0A3DFF]">CodeDale</div>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-10 text-sm text-gray-600">
                    <Link href="#hero" className="hover:text-black transition cursor-pointer">Home</Link>
                    <Link href="#work" className="hover:text-black transition cursor-pointer">Work</Link>
                    <Link href="#features" className="hover:text-black transition cursor-pointer">Why Us</Link>
                </nav>

                {/* CTA */}
                <button className="
          hidden md:block 
          bg-gradient-to-br from-blue-600 to-blue-500 
          text-white px-5 py-2.5 rounded-xl text-sm font-medium 
          shadow-[0_10px_30px_rgba(0,93,255,0.25)]
          hover:opacity-90 transition
        ">
                    Let’s Talk
                </button>

            </div>
        </header>
    );
}
