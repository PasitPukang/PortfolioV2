import About from "../About";
import Project from "../Project";
import { motion } from "framer-motion";

const RightSection = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">

      {/* About Section Container */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-slate-900/60 backdrop-blur-xl p-5 sm:p-7 lg:p-8 xl:p-10 rounded-3xl border border-slate-800/80 shadow-2xl shadow-slate-950/50 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all duration-500 pointer-events-none" />
        <About />
      </motion.section>

      {/* Project Section Container */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-slate-900/60 backdrop-blur-xl p-5 sm:p-7 lg:p-8 xl:p-10 rounded-3xl border border-slate-800/80 shadow-2xl shadow-slate-950/50 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500 pointer-events-none" />
        <Project />
      </motion.section>

    </div>
  );
};


export default RightSection;