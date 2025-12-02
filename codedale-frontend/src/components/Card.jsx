export default function Card({ title, subtitle, tag, image }) {
    return (
        <div className="bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 group">

            {/* Image Container */}
            <div className="h-64 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center relative">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                ) : (
                    <div className="text-gray-300 text-2xl font-semibold">{title}</div>
                )}
            </div>

            {/* Text Content */}
            <div className="pt-6 pb-2 text-center">
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-500 mt-1 font-medium">{subtitle}</p>
            </div>

        </div>
    );
}
