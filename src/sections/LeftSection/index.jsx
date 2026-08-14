import Header from "../Header";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

const LeftSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-6"
    >
      <div className="bg-slate-900/60 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-800/80 shadow-2xl shadow-indigo-950/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
        <Header />
      </div>
     
      {/* Navbar - Desktop */}
      <div className="bg-slate-900/40 backdrop-blur-md p-2 rounded-2xl border border-slate-800/60 hidden lg:block">
        <Navbar />
      </div>
    </motion.div>
  );
};

export default LeftSection;