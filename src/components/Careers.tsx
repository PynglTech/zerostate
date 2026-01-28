"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import JobApplicationModal from "./JobApplicationModal";

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const positions = [
    {
      company: "ZeroState",
      subtitle: "For Systems Architects, Ops, and Generalists.",
      description: "Apply here if you think in decades, governance, and infrastructure.",
      buttonText: "Submit application",
      style: "white"
    },
    {
      company: "Preta",
      subtitle: "For Operators, Builders, and Shippers.",
      description: "Apply here if you want to ship code that touches millions of users instantly.",
      buttonText: "Join the Ghost team",
      style: "grey"
    },
  ];

  const handleApply = (company: string) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="careers"
        className="container mx-auto px-6 py-24 lg:px-12 lg:py-40"
      >
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="space-y-6 max-w-5xl">
            <h2
              className="font-mono text-5xl md:text-7xl font-medium tracking-tight text-foreground"
              style={{ textShadow: "0px 1px 40px #00000010" }}
            >
              Join the foundry
            </h2>
            <p className="text-lg md:text-xl font-normal text-[#555555]">
              Build the tools that govern the internet.
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-[15px] leading-relaxed text-[#666666] max-w-4xl">
                ZeroState is an industrial research lab, not a typical SaaS factory. We do not have "job requisitions." We look for Outliers: engineers, designers, and system thinkers who are obsessed with efficiency, governance, and stopping waste.
              </p>
              <p className="text-[15px] leading-relaxed text-[#666666] max-w-4xl">
                If you believe the software industry is broken and you want to build the infrastructure to fix it, pitch us. Tell us what you want to build.
              </p>
            </div>
          </div>
          <span className="font-mono text-xs font-medium tracking-[0.2em] text-[#AAAAAA] uppercase mt-4 md:mt-2">
            Careers
          </span>
        </div>

        <div className="flex flex-col gap-8 pt-8">
          {positions.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-xl border border-[#EEEEEE] transition-all hover:shadow-[0_8px_30px_rgba(229,69,5,0.06)] ${item.style === 'grey' ? 'bg-[#FAFAFA] hover:bg-orange-50/40' : 'bg-white hover:bg-orange-50/20'
                }`}
            >
              {item.style === 'grey' && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E54505]" />
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between p-10 md:p-14 gap-8">
                <div className="space-y-4">
                  <h3 className="font-mono text-3xl font-bold text-[#E54505]">
                    {item.company}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-lg italic font-normal text-[#444444]">
                      {item.subtitle}
                    </p>
                    <p className="text-base font-light text-[#777777]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleApply(item.company)}
                  className="group/btn flex items-center gap-2 self-start md:self-center font-mono text-xs font-bold text-[#444444] hover:text-[#E54505] transition-colors"
                >
                  <span className="border-b-2 border-transparent group-hover/btn:border-[#E54505] pb-1 transition-all">
                    {item.buttonText}
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        company={selectedCompany}
      />
    </>
  );
};

export default Careers;
