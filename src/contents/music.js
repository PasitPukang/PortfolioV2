// Import images from assets/activity
import musicPic1 from '../assets/activity/IArm-611.jpeg';
import musicPic2 from '../assets/activity/IMG_5405 (2).jpeg';
import musicPic3 from '../assets/activity/IMG_5440 (2).jpeg';
import musicPic4 from '../assets/activity/IMG_5381.jpeg';
import musicPic5 from '../assets/activity/57B46AC6-F6D3-4384-A35C-C0282DB8BF26.jpeg';
import musicPic6 from '../assets/activity/9D890EDD-E935-4AB0-ADBA-7C137DF319CD.jpeg';

export const musicData = {
  // ==========================================
  // 1. หัวข้อหลัก & ข้อมูลทั่วไปของเซกชันดนตรี
  // ==========================================
  sectionTag: "• Passion & Special Talent",
  headline: "LEAD VOCALIST / TUESDAY BAND",
  bandName: "Tuesday Band",
  role: "นักร้องนำ (Lead Vocalist)",
  
  // คำอธิบายภาพรวม (คุณสามารถเข้ามาแก้ไขข้อความตรงนี้ได้ตลอดเวลา)
  description: "นอกจากความหลงใหลในการเขียนโค้ดและพัฒนา Web Application แล้ว ดนตรีคือพื้นที่ที่ช่วยหล่อหลอมทักษะการทำงานจริง ในฐานะนักร้องนำ (Lead Vocalist) วง Tuesday ฝึกฝนความกล้าแสดงออก การสื่อสาร และการทำงานสอดประสานร่วมกับทีม",

  // ==========================================
  // 2. ทักษะ Soft Skills ที่ได้จากดนตรี
  // ==========================================
  softSkillsTitle: "How Music Shapes My Engineering Mindset",
  softSkills: [
    {
      title: "Stage Presence & Communication",
      desc: "ความมั่นใจในการสื่อสาร การนำเสนอ และการถ่ายทอดความคิดต่อหน้าผู้คนและทีมงานอย่างชัดเจน",
    },
    {
      title: "Team Harmony & Active Listening",
      desc: "การฟังเสียงเพื่อนร่วมทีม (Rhythm & Sync) เพื่อให้ผลงานออกมาเป็นหนึ่งเดียวเหมือนการเล่นดนตรีในวง",
    },
    {
      title: "Improvisation & Problem Solving",
      desc: "ไหวพริบและการแก้ไขสถานการณ์เฉพาะหน้าเมื่อเกิดเหตุขัดข้องบนเวทีได้อย่างสุขุมและมืออาชีพ",
    },
    {
      title: "Discipline & Dedicated Practice",
      desc: "วินัยในการฝึกซ้อม ความละเอียดในการเก็บท่อนร้อง เช่นเดียวกับการเขียนโค้ดที่ต้องการความแม่นยำ",
    },
  ],

  // ==========================================
  // 3. รูปภาพกิจกรรม & การแสดงสด (แก้แคปชันรูปตรงนี้ได้เลย)
  // ==========================================
  gallery: [
    {
      id: 1,
      image: musicPic1,
      title: "Live Concert & Stage Presence",
      subtitle: "Lead Vocalist @ Campus Music Festival",
      tag: "Live Show",
      span: "col-span-1 md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
    },
    {
      id: 2,
      image: musicPic2,
      title: "Band Rehearsal & Harmony",
      subtitle: "Tuesday Band Soundcheck & Prep",
      tag: "Rehearsal",
      span: "col-span-1 aspect-square",
    },
    {
      id: 3,
      image: musicPic3,
      title: "Acoustic & Stage Emotion",
      subtitle: "Vocal Performance & Audience Connection",
      tag: "Performance",
      span: "col-span-1 aspect-square",
    },
    {
      id: 4,
      image: musicPic4,
      title: "Band Chemistry & Teamwork",
      subtitle: "Tuesday Band Members on Stage",
      tag: "Team Synergy",
      span: "col-span-1 aspect-square",
    },
    {
      id: 5,
      image: musicPic5,
      title: "Energy & Stage Highlights",
      subtitle: "Capturing the Crowd Energy",
      tag: "Vocalist",
      span: "col-span-1 aspect-square",
    },
    {
      id: 6,
      image: musicPic6,
      title: "Festival Moments",
      subtitle: "Music as an Art of Expression",
      tag: "Experience",
      span: "col-span-1 md:col-span-2 aspect-video md:aspect-[21/9]",
    },
  ],
};
