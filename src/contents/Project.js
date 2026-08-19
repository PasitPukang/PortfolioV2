import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import picP1 from '../assets/01.png';
import picP2 from '../assets/02.png';
import picP3 from '../assets/03.png';

export const data = [
    {
        date: "2026",
        title: "Student Progress Tracking Web App — ระบบติดตามการดำเนินงานของนิสิต",
        category: "Fullstack & Cloud Database",
        materials: [
            { type: faGlobe, link: "https://pasitpukang.github.io/PortfolioV2/project_fiveper/", label: "Live Demo" },
            { type: faGithub, link: "https://github.com/PasitPukang/project_fiveper.git", label: "Source Code" }
        ],
        descriptions: [
            "พัฒนาเว็บแอปพลิเคชันติดตามการดำเนินงานของนิสิตแบบครบวงจร รองรับ 3 บทบาทผู้ใช้งาน (ผู้ดูแลระบบ, อาจารย์, นิสิต) พร้อมแดชบอร์ดสรุปสถิติและระบบให้ข้อเสนอแนะ",
            "ออกแบบสถาปัตยกรรมแบบ Serverless เชื่อมต่อ Supabase Cloud PostgreSQL แบบ Real-time พร้อม Row Level Security (RLS) และระบบสำรองข้อมูลออฟไลน์ (LocalStorage Offline Fallback)"
        ],
        skills: ["React.js", "TypeScript", "Vite", "Supabase Cloud", "PostgreSQL", "Tailwind CSS", "Recharts", "RLS Security", "REST API", "Git"],
        picture: picP1,
    },
    {
        date: "2026",
        title: "IoT Control Web Application — ระบบควบคุมความเร็วรถยนต์ผ่านเว็บ",
        category: "Frontend & Real-time Integration",
        materials: [
            { type: faGithub, link: "https://github.com/PasitPukang/Appcontrol-Final_Project.git", label: "Source Code" }
        ],
        descriptions: [
            "พัฒนาเว็บสำหรับสั่งการและตรวจสอบสถานะอุปกรณ์ IoT แบบ Real-time เชื่อมต่อ Firebase Realtime Database",
            "เขียนส่วนหน้าบ้านด้วย React + Tailwind CSS แสดงผลบนแดชบอร์ดสรุปข้อมูลให้อ่านง่าย"
        ],
        skills: ["React.js", "Tailwind CSS", "Firebase", "JavaScript", "Java", "Real-time Data", "Git"],
        picture: picP3,
    },
    {
        date: "2025",
        title: "MeetingRoom PRO v2.0 — ระบบจองห้องประชุมออนไลน์อัจฉริยะ",
        category: "Fullstack & Interactive Web App",
        materials: [
            { type: faGlobe, link: "https://pasitpukang.github.io/PortfolioV2/Project/", label: "Live Demo" },
            { type: faGithub, link: "https://github.com/PasitPukang/Project.git", label: "Source Code" }
        ],
        descriptions: [
            "พัฒนาเว็บแอปพลิเคชันจองห้องประชุมออนไลน์ ดีไซน์มินิมอล รองรับสมาร์ตโฟนและคอมพิวเตอร์เต็มรูปแบบ",
            "มีระบบเช็กสถานะห้องว่างแบบ Real-time, ระบบป้องกันการจองซ้ำ (Double Booking Prevention) และ Admin Panel จัดการห้องประชุม"
        ],
        skills: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "Context API", "REST API", "JavaScript (ES6+)", "Git"],
        picture: picP2,
    }
];