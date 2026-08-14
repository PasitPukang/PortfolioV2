import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faRobot, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import avatarPic from '../assets/Pasit Pukang.svg';

const FAQ_LIST = [
  {
    q: 'พร้อมเริ่มฝึกงานเมื่อไหร่?',
    a: 'พร้อมเข้าฝึกงานทันทีในปี 2569 ครับ! สามารถฝึกงานแบบ On-site ในกรุงเทพฯ / นครปฐม หรือแบบ Remote / Hybrid ได้อย่างคล่องตัวครับ',
  },
  {
    q: 'Tech Stack หลักที่ถนัดคืออะไร?',
    a: 'ถนัด Next.js 14, React 18/19, TypeScript, Tailwind CSS, daisyUI และเชื่อมต่อฐานข้อมูล Supabase Cloud PostgreSQL, Prisma ORM และ Firebase ครับ',
  },
  {
    q: 'จุดเด่นในการทำงานของคุณคืออะไร?',
    a: 'เขียนโค้ดสะอาด เป็นระเบียบ (Clean Architecture), ใส่ใจเรื่อง UI/UX และ Responsive Design ให้สวยบนทุกจอ พร้อมทั้งเรียนรู้ไวและปรับตัวทำงานร่วมกับทีมได้ดีครับ',
  },
  {
    q: 'มีโปรเจกต์ Fullstack ที่ทดลองใช้จริงไหม?',
    a: 'มีครับ! เช่น ระบบติดตามการดำเนินงานของนิสิต (เชื่อม Supabase Cloud DB) และระบบจองห้องประชุม MeetingRoom PRO v2.0 สามารถกดดู Live Demo ด้านล่างได้เลยครับ',
  },
];

export default function InteractiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(0);

  return (
    <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4 space-y-3 backdrop-blur-md">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer group select-none"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs shadow-md shadow-indigo-500/20">
            <FontAwesomeIcon icon={faRobot} />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
              <span>Best Interactive Bot</span>
              <span className="badge badge-xs badge-success text-[9px]">Online</span>
            </div>
            <p className="text-[10px] text-slate-400">คลิกเพื่อถาม-ตอบข้อมูลด่วน (Interactive FAQ)</p>
          </div>
        </div>

        <button className="btn btn-ghost btn-xs text-slate-400 group-hover:text-indigo-300">
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-xs" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 pt-2 border-t border-slate-800/80 overflow-hidden"
          >
            {/* Quick Prompt Chips */}
            <div className="flex flex-wrap gap-1.5">
              {FAQ_LIST.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFaq(index)}
                  className={`text-[11px] px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                    selectedFaq === index
                      ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-500/30'
                      : 'bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {faq.q}
                </button>
              ))}
            </div>

            {/* Chat Bubble Thread */}
            <div className="space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800/60 font-sans">
              {/* User Question */}
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-primary text-xs text-white leading-relaxed">
                  {FAQ_LIST[selectedFaq].q}
                </div>
              </div>

              {/* Bot Answer */}
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-7 rounded-full ring-1 ring-indigo-400">
                    <img src={avatarPic} alt="Best" />
                  </div>
                </div>
                <div className="chat-bubble bg-slate-800 text-slate-200 border border-slate-700 text-xs leading-relaxed">
                  {FAQ_LIST[selectedFaq].a}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
