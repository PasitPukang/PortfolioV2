import { data } from '../../contents/about';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faCodeBranch, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id="about-section" className='space-y-8'>
            {/* Header Title */}
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
                    <FontAwesomeIcon icon={faUser} className="text-sm" />
                </div>
                <div>
                    <h2 className='text-xl font-extrabold text-slate-100 tracking-wide'>
                        {data.title}
                    </h2>
                    <p className="text-xs text-slate-400">
                        {data.subtitle}
                    </p>
                </div>
            </div>

            {/* Main Bio Card */}
            <div className="space-y-4">
                <p className='text-slate-300 leading-relaxed text-sm p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 shadow-inner font-normal'>
                    {data.description}
                </p>

                {/* Personal Journey / Story */}
                {data.story && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/30 via-slate-900/40 to-slate-900/60 border border-indigo-500/20 flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 mt-0.5">
                            <FontAwesomeIcon icon={faLightbulb} className="text-xs" />
                        </div>
                        <div className="text-xs text-slate-300 leading-relaxed">
                            <span className="font-semibold text-indigo-300 block mb-1">ความตั้งใจของผม (My Passion):</span>
                            {data.story}
                        </div>
                    </div>
                )}
            </div>

            {/* Education Timeline Card */}
            {data.education && (
                <div className='space-y-3'>
                    <div className='text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2'>
                        <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-400" />
                        <span>Education Background</span>
                    </div>
                    <div className='bg-slate-800/30 rounded-2xl p-5 border border-slate-700/60 transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-800/50 group'>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                                <div className='text-slate-100 font-bold text-sm sm:text-base group-hover:text-indigo-200 transition'>
                                    {data.education.degree}
                                </div>
                                <div className='text-indigo-300 text-xs sm:text-sm font-medium mt-0.5'>
                                    {data.education.institution}
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold self-start sm:self-auto">
                                {data.education.faculty}
                            </span>
                        </div>

                        <div className='flex items-center justify-between text-slate-400 text-xs mt-3 pt-3 border-t border-slate-800/80'>
                            <span>{data.education.year}</span>
                            <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> สถานะ: กำลังศึกษา
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Technical Skills Categorized */}
            {data.skills && (
                <div className='space-y-4'>
                    <div className='text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2'>
                        <FontAwesomeIcon icon={faCodeBranch} className="text-indigo-400" />
                        <span>Technical Skills & Tools</span>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {data.skills.map((group, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -2 }}
                                className='p-4.5 rounded-2xl bg-slate-800/30 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 space-y-3'
                            >
                                <div className='text-xs font-bold text-indigo-300 tracking-wide flex items-center gap-1.5'>
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                    {group.category}
                                </div>
                                <div className='flex flex-wrap gap-1.5'>
                                    {group.items.map((skill, j) => (
                                        <motion.span
                                            key={j}
                                            whileHover={{ scale: 1.06, y: -1 }}
                                            className='px-3 py-1 bg-indigo-500/10 hover:bg-indigo-500/25 text-indigo-200 text-xs rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 font-medium transition-all cursor-default shadow-sm'
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
