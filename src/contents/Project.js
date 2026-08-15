import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import picP1 from '../assets/01.png';
import picP2 from '../assets/02.png';
import picP3 from '../assets/03.png';

export const data = [
    {
        date: "2026",
        title: "ระบบติดตามการดำเนินงานของนิสิต (Student Progress Tracking Web App)",
        category: "Fullstack & Cloud Database",
        materials: [
            { type: faGlobe, link: "https://pasitpukang.github.io/PortfolioV2/project_fiveper/", label: "Live Demo" },
            { type: faGithub, link: "https://github.com/PasitPukang/project_fiveper.git", label: "Source Code" }
        ],
        descriptions: [
            "เว็บแอปพลิเคชันระบบติดตามการดำเนินงานของนิสิตแบบครบวงจร รองรับ 3 บทบาทการทำงาน (ผู้ดูแลระบบ, อาจารย์, นิสิต) พร้อมแดชบอร์ดสรุปสถิติ, รายงานภาพรวมรายวิชา, ระบบให้ข้อเสนอแนะพร้อมการตอบกลับ และระบบจัดการโครงการ",
            "สถาปัตยกรรมระบบแบบ Serverless เชื่อมต่อฐานข้อมูล Supabase Cloud PostgreSQL แบบ Real-time พร้อมความปลอดภัยระดับ Row Level Security (RLS) และระบบสำรองข้อมูลออฟไลน์ (LocalStorage Offline Fallback) รองรับการใช้งาน 24/7 ทุกอุปกรณ์"
        ],
        skills: ["React.js", "TypeScript", "Vite", "Supabase Cloud", "PostgreSQL", "RLS Security", "Tailwind CSS", "Recharts", "REST API", "Git"],
        picture: picP1,
    },
    {
        date: "2026",
        title: "ระบบควบคุมและจัดการอุปกรณ์ IoT (IoT Control Web Application)",
        category: "Frontend & Real-time Integration",
        materials: [
            { type: faGithub, link: "https://github.com/PasitPukang/Appcontrol-Final_Project.git", label: "Source Code" }
        ],
        descriptions: [
            "เว็บสำหรับสั่งการและตรวจสอบสถานะของอุปกรณ์ IoT ผ่านหน้าจอแบบ Real-time",
            "เขียนส่วนหน้าบ้านด้วย React + Tailwind CSS และเชื่อมต่อดึงข้อมูลสถานะอุปกรณ์จาก Firebase Realtime Database มาแสดงผลบนหน้า Dashboard สรุปข้อมูลให้อ่านง่าย"
        ],
        skills: ["React.js", "Tailwind CSS", "Firebase", "Real-time Data", "JavaScript", "Java", "Git"],
        picture: picP3,
    },
    {
        date: "2026",
        title: "ระบบจองห้องประชุมออนไลน์อัจฉริยะ (MeetingRoom PRO v2.0)",
        category: "Fullstack & Interactive Web App",
        materials: [
            { type: faGlobe, link: "https://pasitpukang.github.io/PortfolioV2/Project/", label: "Live Demo" },
            { type: faGithub, link: "https://github.com/PasitPukang/Project.git", label: "Source Code" }
        ],
        descriptions: [
            "เว็บแอปพลิเคชันจองห้องประชุมออนไลน์เวอร์ชันปรับปรุงใหม่ ดีไซน์มินิมอล ใช้งานง่าย รองรับการใช้งานสมบูรณ์แบบบนสมาร์ตโฟนและคอมพิวเตอร์",
            "พัฒนาด้วย React 19, Vite และ Tailwind CSS มีระบบเช็กสถานะห้องว่างแบบ Real-time, ระบบป้องกันการจองเวลาซ้ำ (Double Booking Prevention), ฟอร์มจองห้องแบบโต้ตอบ, รายการจองของฉัน ตลอดจนระบบผู้ดูแลระบบ (Admin Panel)"
        ],
        skills: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "JavaScript (ES6+)", "Context API", "REST API", "LocalStorage Sync", "Git"],
        picture: picP2,
    }
];