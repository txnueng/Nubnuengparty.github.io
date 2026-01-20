// ข้อมูลนโยบาย 10 ข้อ
const policiesData = [
    { id: 1, title: "1. เพจ YSP พี่มีพอร์ต น้องมีที่เรียน", desc: "สร้างพื้นที่แบ่งปัน Portfolio รุ่นพี่สู่รุ่นน้อง แนะนำแนวทางเข้ามหาวิทยาลัยรวบรวมไว้ในที่เดียว" },
    { id: 2, title: "2. ปรับปรุงบัตรนักเรียน", desc: "ออกแบบบัตรนักเรียนใหม่ให้ทันสมัย ใช้งานร่วมกับระบบห้องสมุดและโรงอาหารได้ดียิ่งขึ้น" },
    { id: 3, title: "3. ปรับปรุง LINE Official", desc: "อัปเกรดระบบตอบกลับอัตโนมัติ แจ้งข่าวสารโรงเรียน ตารางเรียน และแจ้งของหายได้รวดเร็ว" },
    { id: 4, title: "4. YSP Market", desc: "พื้นที่ตลาดนัดออนไลน์และออฟไลน์ให้นักเรียนได้หารายได้เสริมและแสดงสินค้า Hand-made" },
    { id: 5, title: "5. แข่ง E-Sport", desc: "จัดการแข่งขัน ROV, Free Fire และ eFootball อย่างเป็นทางการ เพื่อส่งเสริมทักษะและทีมเวิร์ก" },
    { id: 6, title: "6. ค่ายจิตอาสา", desc: "โครงการค่ายอาสาพัฒนาโรงเรียนและชุมชนรอบข้าง ปลูกฝังจิตสำนึกสาธารณะ" },
    { id: 7, title: "7. ประกวดหนังสั้น", desc: "เปิดเวทีให้นักเรียนที่มีความสามารถด้านการตัดต่อและเล่าเรื่องได้แสดงผลงานในหัวข้อต่างๆ" },
    { id: 8, title: "8. กล่องยาสามัญ", desc: "เพิ่มจุดให้บริการกล่องยาสามัญประจำบ้านตามตึกเรียนต่างๆ เพื่อความปลอดภัยเบื้องต้น" },
    { id: 9, title: "9. Pride Month", desc: "จัดกิจกรรมรณรงค์และเฉลิมฉลองความหลากหลายทางเพศ ให้ทุกคนในโรงเรียนอยู่ร่วมกันอย่างเข้าใจ" },
    { id: 10, title: "10. หนังสือรุ่น", desc: "จัดทำหนังสือรุ่นในรูปแบบดิจิทัลและเล่มจริง เพื่อบันทึกความทรงจำดีๆ ของรุ่นพี่และเพื่อนๆ" }
];

// ฟังก์ชันสร้างการ์ดนโยบาย
function renderPolicies() {
    const container = document.getElementById('policy-list');
    container.innerHTML = ''; // ล้างค่าเก่า

    policiesData.forEach(policy => {
        const card = document.createElement('div');
        card.className = 'policy-card';
        card.innerHTML = `
            <h3>${policy.title}</h3>
            <p>${policy.desc.substring(0, 50)}...</p>
            <button class="cta-btn" style="font-size: 0.9rem; padding: 5px 15px; margin-top:10px;" onclick="openModal(${policy.id})">ดูรายละเอียด</button>
        `;
        container.appendChild(card);
    });
}

// ฟังก์ชันเปลี่ยนหน้า (SPA)
function showPage(pageId) {
    // ซ่อนทุกหน้า
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // แสดงหน้าเป้าหมาย
    document.getElementById(pageId).classList.add('active');

    // ปรับเมนูให้ Active ตาม
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    // หาลิงก์ที่ตรงกับ pageId (แบบง่าย)
    const activeLink = document.querySelector(`.nav-links a[href="#${pageId}"]`);
    if(activeLink) activeLink.classList.add('active');
}

// Modal Logic
const modal = document.getElementById('policy-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-btn');

function openModal(id) {
    const policy = policiesData.find(p => p.id === id);
    if(policy) {
        modalTitle.innerText = policy.title;
        modalDesc.innerText = policy.desc;
        modal.style.display = 'flex';
    }
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// เริ่มต้นทำงาน
document.addEventListener('DOMContentLoaded', () => {
    renderPolicies();
});
