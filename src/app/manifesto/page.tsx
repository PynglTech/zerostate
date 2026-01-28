"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ManifestoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-foreground">
            <Navbar />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <Link
                        href="/#philosophy"
                        className="inline-flex items-center gap-1.5 font-sans text-[15px] font-medium text-[#4A5568] hover:text-[#E54505] transition-colors mb-12 group"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#E54505"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform group-hover:-translate-x-0.5"
                        >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Back
                    </Link>

                    <h1 className="font-mono text-5xl md:text-7xl font-medium tracking-tight text-foreground mb-24">
                        The zero-waste manifesto
                    </h1>

                    {/* Section I: THE GREAT INEFFICIENCY */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-start">
                        <div className="lg:col-span-7 space-y-12">
                            <h2 className="font-mono text-sm md:text-base font-bold text-[#E54505] uppercase tracking-[0.3em]">
                                I. THE GREAT INEFFICIENCY
                            </h2>

                            <div className="space-y-10">
                                <p className="text-xl md:text-2xl font-normal leading-relaxed text-[#444444]">
                                    The modern software industry is built on a lie. We have convinced ourselves that &quot;Agile&quot; means &quot;Speed,&quot; but in reality, it has become a license for waste.
                                </p>

                                <p className="text-base md:text-lg font-light leading-relaxed text-[#666666]">
                                    This model is fundamentally broken. It forces organizations to pay 100% of the engineering cost just to validate hypothesis. When the hypothesis fails—as 80% do—that capital, time, and human talent are incinerated.
                                </p>

                                <p className="text-base md:text-lg font-light leading-relaxed text-[#666666]">
                                    In a world where engineering talent is the most finite and expensive resource, building unvalidated software is not just a mistake; it is systemic negligence.
                                </p>
                            </div>
                        </div>

                        {/* Side Info Box */}
                        <div className="lg:col-span-5 flex lg:justify-end">
                            <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-[5px] p-8 md:p-10 lg:p-8 space-y-4 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative overflow-hidden lg:w-[421px] lg:h-[418px] flex flex-col">
                                <div className="space-y-6">
                                    <p className="text-[14px] md:text-[15px] font-medium leading-relaxed text-[#555555] max-w-[90%]">
                                        Today, the standard operating procedure for innovation is speculative engineering:
                                    </p>

                                    <ul className="space-y-6 relative z-10">
                                        {[
                                            "We have an idea",
                                            "We hire expensive engineers to build a Minimum Viable Product (MVP).",
                                            "We launch it to see if anyone cares."
                                        ].map((step, i) => (
                                            <li key={i} className="flex gap-4 items-start relative">
                                                {i < 2 && (
                                                    <div className="absolute left-[9px] top-6 bottom-[-32px] w-[1px] border-l border-dashed border-[#E54505]/30" />
                                                )}
                                                <span className="flex-shrink-0 flex items-center justify-center w-[18px] h-[18px] rounded-full border border-[#E54505] text-[#E54505] font-mono text-[10px] font-bold bg-white">
                                                    {i + 1}
                                                </span>
                                                <span className="text-[13px] text-[#444444] leading-relaxed font-normal pt-0">
                                                    {step}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-0">
                                    <img
                                        src="/manifesto-graphic.png"
                                        alt="Speculative Engineering Lifecycle"
                                        className="w-full h-auto object-contain opacity-90 max-h-[170px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section II: THE INVERSION */}
                    <section id="section-2" className="mb-32">
                        <div className="max-w-5xl space-y-8 mb-16">
                            <h2 className="font-mono text-sm md:text-base font-bold text-[#E54505] uppercase tracking-[0.3em]">
                                II. THE INVERSION — PRE-CODE VALIDATION
                            </h2>
                            <div className="space-y-6">
                                <p className="text-base md:text-lg font-light leading-relaxed text-[#666666]">
                                    ZeroState exists to industrialise the inversion of the software supply chain.
                                    <br />
                                    We are moving the industry from <span className="text-[#E54505] font-normal">Speculation to Validation.</span>
                                </p>
                            </div>
                        </div>

                        {/* Comparison Diagrams */}
                        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 items-center justify-items-center">
                            {/* Old Way */}
                            <div
                                className="relative rounded-[13.14px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] lg:w-[513.42px] lg:h-[226.61px] flex flex-col justify-center"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13.14' ry='13.14' stroke='%23EEEEEEFF' stroke-width='2.18' stroke-dasharray='3.2841475009918213%2c 2.189431667327881' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                                    borderRadius: '13.14px'
                                }}
                            >
                                <span className="absolute left-6 -top-3.5 bg-black text-white px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest rounded-full z-10">
                                    OLD WAY
                                </span>
                                <div className="space-y-4">
                                    <div className="relative h-[120px] w-full">
                                        <img
                                            src="/manifesto-old-way.png"
                                            alt="Old Way: Build MVP -> Launch -> Measure -> Iterate"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <p className="text-center font-mono text-[10px] text-[#888888] font-bold uppercase tracking-widest">
                                        Build MVP → Launch → Measure → Iterate
                                    </p>
                                </div>
                            </div>

                            {/* ZeroState Way */}
                            <div
                                className="relative rounded-[13.14px] bg-white p-6 shadow-[0_20px_60px_rgba(229,69,5,0.08)] lg:w-[513.42px] lg:h-[226.61px] flex flex-col justify-center"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13.14' ry='13.14' stroke='%23FFE8E0FF' stroke-width='2.18' stroke-dasharray='3.2841475009918213%2c 2.189431667327881' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                                    borderRadius: '13.14px'
                                }}
                            >
                                <span className="absolute left-6 -top-3.5 bg-[#E54505] text-white px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest rounded-full z-10">
                                    ZEROSTATE WAY
                                </span>
                                <div className="space-y-4">
                                    <div className="relative h-[120px] w-full">
                                        <div className="absolute inset-0 bg-[#E54505]/2 rounded-xl blur-2xl" />
                                        <img
                                            src="/manifesto-zerostate-way.png"
                                            alt="ZeroState Way: Measure Intent -> Validate Value -> Build Final Product"
                                            className="w-full h-full object-contain relative z-10"
                                        />
                                    </div>
                                    <p className="text-center font-mono text-[10px] text-[#444444] font-bold uppercase tracking-widest">
                                        Measure Intent → Validate Value → Build Final Product
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-5xl">
                            <p className="text-base md:text-lg font-light leading-relaxed text-[#666666]">
                                We build the Sovereign Governance Infrastructure that allows enterprises to inject high-fidelity &quot;Ghost&quot; interfaces into live environments. We measure behavioural intent—actual clicks, actual signups, actual demand—before a single line of backend logic is committed.
                            </p>
                        </div>
                    </section>

                    {/* Section III: THE SOVEREIGN STANDARD */}
                    <section id="section-3" className="mb-32">
                        <div className="space-y-10 mb-20">
                            <div className="space-y-8">
                                <h2 className="font-mono text-sm md:text-base font-bold text-[#E54505] uppercase tracking-[0.3em]">
                                    III. THE SOVEREIGN STANDARD
                                </h2>
                                <h3
                                    className="font-sans text-[#111111] max-w-4xl"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        fontSize: '32px',
                                        lineHeight: '35.2px',
                                        letterSpacing: '-0.64px',
                                    }}
                                >
                                    &quot;We are not a tool vendor. We are a<br />Governance Foundry.&quot;
                                </h3>
                            </div>

                            <p className="text-base md:text-lg font-light text-[#666666]">
                                Everything we build adheres to the Zero-Waste Standard:
                            </p>
                        </div>

                        {/* Standard Cards */}
                        <div className="flex flex-wrap justify-center gap-10">
                            {[
                                {
                                    title: "Do no harm",
                                    description: "Our Infrastructure is \"Safe by Design.\" It never compromises the host environment.",
                                    image: "/standard-do-no-harm.png"
                                },
                                {
                                    title: "Sovereignty first",
                                    description: "Data never leaves the jurisdiction of its origin without explicit engineered consent.",
                                    image: "/standard-sovereignty-first.png"
                                },
                                {
                                    title: "Invisible governance",
                                    description: "The technology must be invisible to the user, but the insights must be undeniable to the business.",
                                    image: "/standard-invisible-governance.png"
                                }
                            ].map((card, i) => (
                                <div key={i} className="flex flex-col md:w-[354.63px] md:h-[409.59px] rounded-[12.44px] border-[#EEEEEE] bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1" style={{ borderWidth: '1.04px' }}>
                                    <div className="h-[230px] w-full flex items-center justify-center p-6 bg-[#F9F9F9] border-b border-[#EEEEEE]">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="p-8 flex-grow space-y-3">
                                        <h4 className="text-[18px] font-bold text-[#111111]">
                                            {card.title}
                                        </h4>
                                        <p className="text-[14px] font-normal leading-relaxed text-[#666666]">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section IV: THE END STATE */}
                    <section id="section-4" className="mb-20">
                        <div className="max-w-4xl space-y-12">
                            <div className="space-y-10">
                                <h2 className="font-mono text-sm md:text-base font-bold text-[#E54505] uppercase tracking-[0.3em]">
                                    IV. THE END STATE
                                </h2>
                                <h3
                                    className="font-sans text-[#111111]"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '36px',
                                        lineHeight: '46.8px',
                                        letterSpacing: '-0.36px',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    &quot;Our mission is not to make software cheaper.<br />It is to make software certain.&quot;
                                </h3>
                            </div>

                            <div className="space-y-10">
                                <p className="text-[15px] md:text-[16px] font-normal leading-relaxed text-[#666666] max-w-3xl">
                                    We are building the future where &quot;Product-Market Fit&quot; is not a lucky discovery at the end of a roadmap, but an engineered prerequisite at the beginning.
                                </p>

                                <div className="space-y-1">
                                    <p className="text-[16px] font-bold text-[#111111]">
                                        We are ZeroState.
                                    </p>
                                    <p className="font-mono text-[14px] text-[#888888]">
                                        We validate the future before we build it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
