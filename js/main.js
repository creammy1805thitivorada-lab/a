/**
 * Portfolio JavaScript - นางสาวฐิติวรดา เหลื่อมแก้ว
 * Features:
 * - Mobile Navigation Toggle
 * - Header Scroll Effect & ScrollSpy Active Links
 * - Skills Category Filter
 * - Interactive Project Details Modal
 * - Form Validation & Toast Notification
 * - Quick Copy to Clipboard
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DOM Elements
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const toggleIcon = document.getElementById('toggle-icon');
  const navLinks = document.querySelectorAll('.nav-link');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCloseAction = document.getElementById('modal-close-action');
  const modalTitle = document.getElementById('modal-project-title');
  const modalBody = document.getElementById('modal-project-body');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');
  const copyBtns = document.querySelectorAll('.copy-btn');

  // 2. Project Data Dictionary for Modal View
  const projectData = {
    p1: {
      title: 'ระบบร้านค้าออนไลน์และจัดการสินค้า (E-Commerce Store)',
      badge: 'E-Commerce Project',
      colorClass: 'mockup-bg-ecommerce',
      icon: 'fa-cart-shopping',
      overview: 'โครงงานจำลองระบบพาณิชย์อิเล็กทรอนิกส์เต็มรูปแบบเพื่อการค้าขายออนไลน์ จัดทำขึ้นเพื่อศึกษาการวางผังโครงสร้างร้านค้า การจำลองสินค้า และระบบจัดการคำสั่งซื้อ',
      objective: 'เพื่อศึกษากระบวนการออกแบบร้านค้าออนไลน์ การบริหารจัดการแคตตาล็อกสินค้า และระบบชำระเงินจำลองบนระบบบริหารจัดการเนื้อหา (CMS)',
      features: [
        'ระบบแสดงรายการสินค้าแบบหมวดหมู่และค้นหาสินค้าได้สะดวก',
        'ระบบตะกร้าสินค้า (Shopping Cart) และคำนวณราคาสินค้ารวมอัตโนมัติ',
        'หน้าชำระเงินจำลอง (Checkout) และบันทึกคำสั่งซื้อของลูกค้า',
        'ระบบหลังบ้าน (Dashboard) สำหรับตรวจสอบสต็อกและสถานะคำสั่งซื้อ'
      ],
      tools: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'CSS3'],
      learning: 'ได้รับความรู้เชิงลึกเกี่ยวกับโครงสร้างของ E-Commerce Platform, การจัดการสต็อกสินค้า, และการออกแบบประสบการณ์สั่งซื้อสินค้าที่เข้าใจง่ายสำหรับผู้ใช้งาน'
    },
    p2: {
      title: 'เว็บไซต์ Portfolio นักศึกษาส่วนตัว (Responsive Web Design)',
      badge: 'Web Development',
      colorClass: 'mockup-bg-web',
      icon: 'fa-laptop-code',
      overview: 'โครงงานการออกแบบและพัฒนาเว็บไซต์แนะนำตนเอง ผลงาน และประวัติการศึกษา โดยเน้นการจัดวางตามหลัก Responsive Web Design และดีไซน์ที่ทันสมัย',
      objective: 'เพื่อประยุกต์ใช้ความรู้ด้าน HTML5, CSS3 และ JavaScript ในการสร้างเว็บแอปพลิเคชันที่รองรับการแสดงผลบนอุปกรณ์ทุกขนาดอย่างมีประสิทธิภาพ',
      features: [
        'ออกแบบสไตล์ Modern Glassmorphism ผสานโทนสีม่วง น้ำเงิน และฟ้า',
        'ระบบเมนูและเลย์เอาต์ที่ยืดหยุ่น รองรับ Desktop, Tablet และ Mobile',
        'ระบบกรองทักษะ (Skill Filter) และหน้าต่างป๊อปอัปผลงาน (Interactive Modal)',
        'ฟอร์มติดต่อพร้อมระบบตรวจสอบความถูกต้องของข้อมูล (Form Validation)'
      ],
      tools: ['HTML5', 'CSS3 (Flexbox/Grid)', 'JavaScript (ES6)', 'Font Awesome', 'Google Fonts'],
      learning: 'เข้าใจการวางโครงสร้าง Semantic Web, การจัด Responsive Breakpoints ให้เหมาะสม และการเพิ่ม Interaction เพื่อสร้างความประทับใจแก่ผู้ชมผลงาน'
    },
    p3: {
      title: 'การออกแบบต้นแบบ UI/UX แอปพลิเคชัน (Mobile & Web Prototype)',
      badge: 'UI/UX Design',
      colorClass: 'mockup-bg-uiux',
      icon: 'fa-figma',
      overview: 'การศึกษาและออกแบบโครงสร้างประสบการณ์ผู้ใช้ (UX) และส่วนติดต่อผู้ใช้ (UI) สำหรับแอปพลิเคชันบริการดิจิทัล โดยเริ่มต้นตั้งแต่การวาง Wireframe จนถึง High-fidelity Prototype',
      objective: 'เพื่อฝึกทักษะการวิเคราะห์พฤติกรรมผู้ใช้ การออกแบบลำดับขั้นตอนการใช้งาน (User Flow) และการทดสอบต้นแบบด้วย Figma',
      features: [
        'การจัดทำ Design System กำหนด Color Palette, Typography และ Component',
        'การออกแบบ Wireframe โครงสร้างหน้าจอหลักและหน้าย่อย',
        'การทำ Interactive Prototype จำลองการคลิกและการเลื่อนหน้าจอเสมือนจริง',
        'การจัดวางตำแหน่งปุ่มและฟอร์มตามหลักสรีรศาสตร์และความง่ายในการใช้งาน'
      ],
      tools: ['Figma', 'UI/UX Principles', 'Design System', 'Prototyping'],
      learning: 'ได้ฝึกกระบวนการคิดเชิงออกแบบ (Design Thinking), การคำนึงถึงความสะดวกของผู้ใช้งานจริง และการสร้างต้นแบบที่สามารถนำไปสื่อสารกับทีมพัฒนาได้อย่างแม่นยำ'
    },
    p4: {
      title: 'ระบบฐานข้อมูลเพื่อการจัดเก็บข้อมูลสินค้า (Database Management)',
      badge: 'Database & Backend',
      colorClass: 'mockup-bg-db',
      icon: 'fa-server',
      overview: 'โครงงานการออกแบบฐานข้อมูลเชิงสัมพันธ์ (Relational Database Management System) เพื่อใช้ในการจัดหมวดหมู่สินค้า ข้อมูลการเรียน และการบันทึกรายการ',
      objective: 'เพื่อศึกษาการวิเคราะห์ความสัมพันธ์ของข้อมูล (ER-Diagram), การทำ Normalization และการเขียนคำสั่ง SQL เพื่อเชื่อมโยงกับโปรแกรมประยุกต์',
      features: [
        'ออกแบบโครงสร้างตารางข้อมูลและกำหนด Primary Key / Foreign Key อย่างถูกต้อง',
        'คำสั่ง SQL สำหรับ CRUD (Create, Read, Update, Delete) ข้อมูลสินค้า',
        'เชื่อมต่อฐานข้อมูล MySQL เข้ากับสคริปต์ภาษา PHP เพื่อแสดงผลผ่านเว็บเบราว์เซอร์',
        'ระบบค้นหาและกรองข้อมูลสินค้าตามเงื่อนไขที่กำหนด'
      ],
      tools: ['MySQL', 'PHP', 'phpMyAdmin', 'SQL Queries', 'Database Design'],
      learning: 'เข้าใจหลักการบริหารจัดการฐานข้อมูล ความสำคัญของความสมบูรณ์ของข้อมูล (Data Integrity) และกระบวนการดึงข้อมูลเพื่อนำมาประมวลผลในระบบธุรกิจ'
    },
    p5: {
      title: 'สื่อประชาสัมพันธ์และกราฟิกโปรโมตดิจิทัล (Digital Media & Content)',
      badge: 'Media & Presentation',
      colorClass: 'mockup-bg-media',
      icon: 'fa-photo-film',
      overview: 'ผลงานการจัดทำชุดสื่อกราฟิก โปสเตอร์ อินโฟกราฟิก และคลิปวิดีโอสั้นประกอบการนำเสนอโครงงานวิชาการและการจำลองแคมเปญการตลาดดิจิทัล',
      objective: 'เพื่อฝึกฝนความคิดสร้างสรรค์ การสื่อสารประเด็นสำคัญผ่านภาพ และการใช้เครื่องมือดิจิทัลในการผลิตสื่อที่ดึงดูดสายตา',
      features: [
        'การออกแบบสไลด์นำเสนอผลงานระดับมืออาชีพสำหรับใช้ในชั้นเรียน',
        'การจัดทำโปสเตอร์และแบนเนอร์ประชาสัมพันธ์โครงการจำลอง',
        'การตัดต่อวิดีโอคลิปสั้น แนะนำโครงการพร้อมคำบรรยายประกอบ',
        'การปรับแต่งสัดส่วนภาพให้เหมาะสมกับแพลตฟอร์มโซเชียลมีเดียต่างๆ'
      ],
      tools: ['Canva', 'Video Editing Tools', 'Graphic Composition', 'Typography'],
      learning: 'เพิ่มพูนทักษะการสื่อสารด้วยภาพ (Visual Storytelling), การคุมโทนสีและภาพลักษณ์ให้สอดคล้องกับหัวข้อ และการนำเสนอเนื้อหาที่ซับซ้อนให้เข้าใจง่าย'
    }
  };

  // 3. Mobile Navigation Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          toggleIcon.className = 'fa-solid fa-bars';
          navToggle.setAttribute('aria-expanded', false);
        }
      });
    });
  }

  // 4. Header Scroll Effect & Scrollspy
  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy: Highlight active link based on current section
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 5. Skills Category Filter
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Project Details Modal Logic
  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalBody.innerHTML = `
      <div class="modal-mockup-header ${data.colorClass}">
        <i class="fa-solid ${data.icon}" style="font-size: 3rem; margin-bottom: 8px;"></i>
        <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; background: rgba(255,255,255,0.2); padding: 4px 14px; border-radius: 9999px;">
          ${data.badge}
        </div>
      </div>

      <div class="modal-section-title">
        <i class="fa-solid fa-circle-info"></i>
        <span>ภาพรวมของผลงาน (Project Overview)</span>
      </div>
      <p class="modal-desc">${data.overview}</p>

      <div class="modal-section-title">
        <i class="fa-solid fa-bullseye"></i>
        <span>วัตถุประสงค์และเป้าหมาย (Objective)</span>
      </div>
      <p class="modal-desc">${data.objective}</p>

      <div class="modal-section-title">
        <i class="fa-solid fa-list-check"></i>
        <span>ฟังก์ชันและจุดเด่นสำคัญ (Key Features)</span>
      </div>
      <ul style="padding-left: 22px; margin-bottom: 16px; color: var(--text-secondary); font-size: 0.93rem; line-height: 1.65;">
        ${data.features.map(f => `<li>${f}</li>`).join('')}
      </ul>

      <div class="modal-section-title">
        <i class="fa-solid fa-tools"></i>
        <span>เครื่องมือและเทคโนโลยีที่ใช้ (Tools & Technologies)</span>
      </div>
      <div class="modal-tags">
        ${data.tools.map(t => `<span class="project-tag-pill" style="font-size: 0.82rem; padding: 4px 12px;">${t}</span>`).join('')}
      </div>

      <div class="modal-section-title" style="margin-top: 20px;">
        <i class="fa-solid fa-award"></i>
        <span>สิ่งที่ได้รับและการต่อยอด (Learning Outcome)</span>
      </div>
      <p class="modal-desc">${data.learning}</p>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalCloseAction) modalCloseAction.addEventListener('click', closeModal);

  // Close modal when clicking on overlay outside modal container
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeModal();
    }
  });

  // 7. Toast Notification Utility
  function showToast(message, type = 'default') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    
    const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-bell';
    toast.innerHTML = `
      <i class="${iconClass}" style="font-size: 1.1rem; color: ${type === 'success' ? '#22c55e' : '#38bdf8'};"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger slide-in
    setTimeout(() => {
      toast.classList.add('show');
    }, 50);

    // Remove after 3.5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 400);
    }, 3500);
  }

  // 8. Contact Form Handling
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      // Basic Validation
      if (!nameVal || !emailVal || !subjectVal || !messageVal) {
        showToast('กรุณากรอกข้อมูลในช่องที่มีเครื่องหมายดอกจันให้ครบถ้วนค่ะ');
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        showToast('รูปแบบอีเมลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้งค่ะ');
        return;
      }

      // Simulate Successful Submission
      showToast(`ขอบคุณค่ะ คุณ ${nameVal} ส่งข้อความเรียบร้อยแล้ว!`, 'success');
      contactForm.reset();
    });
  }

  // 9. Copy to Clipboard Feature
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            showToast(`คัดลอก "${textToCopy}" เรียบร้อยแล้วค่ะ`, 'success');
          })
          .catch(() => {
            fallbackCopy(textToCopy);
          });
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`คัดลอก "${text}" เรียบร้อยแล้วค่ะ`, 'success');
    } catch (err) {
      showToast('ไม่สามารถคัดลอกข้อความได้โดยอัตโนมัติ');
    }
    document.body.removeChild(tempInput);
  }
});
