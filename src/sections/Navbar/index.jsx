import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const navItems = [
    { label: 'About Me (ประวัติ)', id: 'about-section', icon: faUser },
    { label: 'Projects (ผลงาน)', id: 'project-section', icon: faFolderOpen },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about-section');

    useEffect(() => {
        const handleScroll = () => {
            const aboutEl = document.getElementById('about-section');
            const projectEl = document.getElementById('project-section');
            
            if (!aboutEl || !projectEl) return;

            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const projectTop = projectEl.offsetTop - 240;

            if (scrollY >= projectTop) {
                setActiveSection('project-section');
            } else {
                setActiveSection('about-section');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 40;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <>
            {/* Desktop Navbar List */}
            <nav className='hidden lg:flex flex-col gap-1.5 p-1'>
                {navItems.map(({ label, id, icon }) => {
                    const isActive = activeSection === id;
                    return (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`group flex items-center gap-3 text-left px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer w-full text-xs font-medium tracking-wide
                                ${isActive
                                    ? 'text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 shadow-md shadow-indigo-500/5'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                                }`}
                        >
                            <FontAwesomeIcon
                                icon={icon}
                                className={`text-xs transition-all duration-300 ${isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}`}
                            />
                            <span className={`transition-all duration-300 ${isActive ? 'font-semibold' : 'group-hover:translate-x-0.5'}`}>
                                {label}
                            </span>
                            {isActive && (
                                <span className='ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400/50 animate-pulse' />
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* Mobile Bottom Floating Floating Bar */}
            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 block lg:hidden w-[90%] max-w-sm">
                <div className="bg-slate-900/90 backdrop-blur-xl border border-indigo-500/40 p-1.5 rounded-full shadow-2xl shadow-slate-950/90 flex items-center justify-around">
                    {navItems.map(({ label, id, icon }) => {
                        const isActive = activeSection === id;
                        return (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                                    isActive
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <FontAwesomeIcon icon={icon} className="text-xs" />
                                <span>{label.split(' ')[0]}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};


export default Navbar;