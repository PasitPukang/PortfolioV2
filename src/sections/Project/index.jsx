
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { data } from '../../contents/Project';
import { motion } from 'framer-motion';

const SECTION_ID = 'project-section';

const Project = () => {
    return (
        <div id={SECTION_ID} className="space-y-8">
            {/* Header Title */}
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
                    <FontAwesomeIcon icon={faFolderOpen} className="text-sm" />
                </div>
                <div>
                    <h2 className='text-xl font-extrabold text-slate-100 tracking-wide'>
                        Featured Projects
                    </h2>
                    <p className="text-xs text-slate-400">
                        ผลงานพัฒนาเว็บไซต์และโปรเจกต์ที่ภาคภูมิใจ
                    </p>
                </div>
            </div>

            {/* Projects List */}
            <div className="space-y-6">
                {data.map(({
                    date = "",
                    title = "",
                    category = "",
                    materials = [],
                    descriptions = [],
                    skills = [],
                    picture = "",
                }, index) => (
                    <motion.div
                        key={`${SECTION_ID}-${index}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, scale: 1.008 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="group flex flex-col md:flex-row gap-6 rounded-3xl p-5 sm:p-6 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
                    >
                        {/* Ambient Card Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                        {/* Thumbnail Picture with Shine */}
                        <div className="w-full md:w-52 shrink-0 flex flex-col gap-3 relative z-10">
                            {picture && (
                                <div className="overflow-hidden rounded-2xl border border-slate-700/60 relative group-hover:border-indigo-500/50 transition duration-300 aspect-video md:aspect-[4/3]">
                                    <img
                                        src={picture}
                                        alt={title}
                                        className="w-full h-full object-cover group-hover:scale-108 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/20 group-hover:opacity-0 transition duration-300" />
                                </div>
                            )}
                            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                                <span className="font-mono text-indigo-400 text-xs font-semibold">{date}</span>
                                {category && (
                                    <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                                        {category}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Content Right */}
                        <div className="flex-1 flex flex-col justify-between gap-4 relative z-10">
                            <div className="space-y-2.5">
                                {/* Title and Links */}
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors leading-snug">
                                        {title}
                                    </h3>

                                    {/* Links / GitHub */}
                                    <div className="flex items-center gap-2 shrink-0">
                                        {materials.map((e, i) => (
                                            <a
                                                key={i}
                                                href={e.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-600/30 border border-indigo-500/20 hover:border-indigo-500/40 flex items-center gap-1.5 text-indigo-300 text-xs font-semibold transition-all duration-300 shadow-sm hover:scale-105"
                                                title="View Repository"
                                            >
                                                <FontAwesomeIcon icon={e.type || faGithub} />
                                                <span>Source Code</span>
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] ml-0.5 opacity-70" />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Descriptions */}
                                <div className="space-y-1.5 pt-1">
                                    {descriptions.map((desc, i) => (
                                        <p key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                                {skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950/80 text-indigo-300 border border-slate-800 font-mono font-medium group-hover:border-indigo-500/25 transition duration-300 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Project;
