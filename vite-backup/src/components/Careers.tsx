import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface Role {
  title: string;
  entity: string;
  location: string;
  type: string;
}

const roles: Role[] = [
  {
    title: "Senior Infrastructure Engineer",
    entity: "ZeroState Systems",
    location: "Remote / Delaware",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    entity: "Preta",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Full-Stack Engineer",
    entity: "Preta",
    location: "Gujarat / Remote",
    type: "Full-time",
  },
  {
    title: "Head of Enterprise Sales",
    entity: "ZeroState Systems",
    location: "Delaware",
    type: "Full-time",
  },
];

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="careers"
      ref={ref}
      className="relative overflow-hidden border-t border-border bg-card py-32 lg:py-48"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="noise absolute inset-0" />

      <div className="container relative z-10 px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-6"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            003
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
            CAREERS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-20 text-4xl font-light text-foreground md:text-5xl lg:text-6xl"
        >
          Join the <span className="text-glow text-primary">Foundry</span>
        </motion.h2>

        {/* Roles list */}
        <div className="space-y-2">
          {roles.map((role, index) => (
            <motion.a
              key={role.title}
              href="#"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative flex flex-col gap-4 border border-border bg-background p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-primary/5 lg:flex-row lg:items-center lg:justify-between lg:p-8"
            >
              {/* Left accent */}
              <div className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-500 group-hover:w-1" />
              
              <div className="flex-1 pl-2 lg:pl-4">
                <h3 className="mb-3 text-xl font-light text-foreground transition-colors group-hover:text-primary lg:text-2xl">
                  {role.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary/50" />
                    <span className="font-mono text-xs tracking-wider text-primary/80">
                      {role.entity}
                    </span>
                  </span>
                  <span>{role.location}</span>
                  <span className="rounded-full border border-border px-3 py-0.5 text-xs">
                    {role.type}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-wider text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                  APPLY
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* General application */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 flex flex-col items-center text-center"
        >
          <p className="mb-8 max-w-md text-muted-foreground">
            Don't see a role that fits? We're always looking for exceptional talent 
            to join our mission.
          </p>
          <a
            href="mailto:careers@zerostatesystems.com"
            className="group inline-flex items-center gap-4 border-b border-primary/30 pb-2 font-mono text-sm tracking-[0.2em] text-primary transition-all hover:border-primary hover:gap-6"
          >
            SUBMIT GENERAL APPLICATION
            <motion.span whileHover={{ x: 5 }}>→</motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
