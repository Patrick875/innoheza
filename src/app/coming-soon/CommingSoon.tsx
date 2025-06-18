"use client"


export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 flex items-center justify-center p-4">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Logo/Brand */}
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-white  rounded-full mb-4">
                        <img src="/logo-ino.png" alt='logo' className="w-16 h-16 " />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        INNOHEZA
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-900">
                            Is Coming Soon
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We&apos;re working hard to bring you an incredible experience. Get notified when we launch and be among the first
                        to explore what we&apos;ve built.
                    </p>
                </div>

                {/* Social Links */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm mb-4">Follow us for updates</p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.linkedin.com/company/innoheza/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white"
                        >
                            LinkedIn
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}
