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
      link: "#",
    },
    {
      company: "Preta",
      link: "#",
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
        <div className="mb-20">
          <h2 className="font-mono text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            Join the foundry
          </h2>
          <span className="mt-4 block text-xs uppercase tracking-widest text-muted-foreground text-right relative -top-6">
            Careers
          </span>
        </div>

        <div className="flex flex-col">
          {positions.map((item, index) => (
            <motion.div
              key={item.company}
              onClick={() => handleApply(item.company)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex items-center justify-between border-t border-border py-12 transition-all hover:bg-orange-50/50 cursor-pointer"
            >
              <div>
                <h3 className="font-mono text-2xl font-bold text-orange-600 transition-transform group-hover:translate-x-4 md:text-3xl">
                  {item.company}
                </h3>
              </div>

              <div className="flex items-center gap-4 pr-4">
                <span className="hidden font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-orange-600 md:block">
                  Submit application
                </span>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-600" />
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-orange-600 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
          {/* Bottom border for last item */}
          <div className="h-px w-full bg-border" />
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
