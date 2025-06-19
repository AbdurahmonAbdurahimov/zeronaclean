// Language switching functionality
let currentLanguage = 'uz';

const translations = {
    uz: {
        // Navigation
        'Bosh sahifa': 'Bosh sahifa',
        'Xizmatlar': 'Xizmatlar',
        'Galereya': 'Galereya',
        'Video': 'Video',
        'Biz haqimizda': 'Biz haqimizda',
        'Aloqa': 'Aloqa',
        
        // Hero section
        'Toshkentda Professional Tozalash Xizmatlari': 'Toshkentda Professional Tozalash Xizmatlari',
        'Uyingiz va ofisingiz uchun mukammal tozalik': 'Uyingiz va ofisingiz uchun mukammal tozalik',
        'Bepul narx olish': 'Bepul narx olish',
        'Hoziroq qo\'ng\'iroq qiling': 'Hoziroq qo\'ng\'iroq qiling',
        
        // Services
        'Bizning Xizmatlarimiz': 'Bizning Xizmatlarimiz',
        'Har qanday tozalash ehtiyojingiz uchun professional yechimlar': 'Har qanday tozalash ehtiyojingiz uchun professional yechimlar',
        'Uy Tozalash': 'Uy Tozalash',
        'To\'liq uy tozalash, chuqur tozalash, muntazam tozalash xizmatlari': 'To\'liq uy tozalash, chuqur tozalash, muntazam tozalash xizmatlari',
        'Ofis Tozalash': 'Ofis Tozalash',
        'Ofislar, do\'konlar, restoranlar uchun professional tozalash': 'Ofislar, do\'konlar, restoranlar uchun professional tozalash',
        'Chuqur Tozalash': 'Chuqur Tozalash',
        'Har bir burchakni tozalash va dezinfeksiya qilish': 'Har bir burchakni tozalash va dezinfeksiya qilish',
        'Qurilishdan Keyingi Tozalash': 'Qurilishdan Keyingi Tozalash',
        'Qurilish changi va qoldiqlarini professional tozalash': 'Qurilish changi va qoldiqlarini professional tozalash',
        'Derazalarni Tozalash': 'Derazalarni Tozalash',
        'Ichki va tashqi derazalarni professional yuvish': 'Ichki va tashqi derazalarni professional yuvish',
        'Gilamlarni Tozalash': 'Gilamlarni Tozalash',
        'Professional gilam yuvish va dog\'larni ketkazish': 'Professional gilam yuvish va dog\'larni ketkazish',
        
        // About
        'Biz Haqimizda': 'Biz Haqimizda',
        'ZeronaClean - Toshkentdagi yetakchi tozalash kompaniyasi. Biz mijozlarimizga yuqori sifatli va ishonchli tozalash xizmatlarini taklif etamiz. Tajribali jamoamiz va ekologik toza mahsulotlarimiz bilan sizning makoningizni toza va yorqin qilamiz.': 'ZeronaClean - Toshkentdagi yetakchi tozalash kompaniyasi. Biz mijozlarimizga yuqori sifatli va ishonchli tozalash xizmatlarini taklif etamiz. Tajribali jamoamiz va ekologik toza mahsulotlarimiz bilan sizning makoningizni toza va yorqin qilamiz.',
        'Tajribali mutaxassislar': 'Tajribali mutaxassislar',
        'Ekologik toza mahsulotlar': 'Ekologik toza mahsulotlar',
        '24/7 mijozlar xizmati': '24/7 mijozlar xizmati',
        'Kafolatlangan natija': 'Kafolatlangan natija',
        
        // Gallery
        'Bizning Ishlarimiz': 'Bizning Ishlarimiz',
        'Mijozlarimiz uchun amalga oshirgan ishlarimizni ko\'ring': 'Mijozlarimiz uchun amalga oshirgan ishlarimizni ko\'ring',
        'Barchasi': 'Barchasi',
        'Uy tozalash': 'Uy tozalash',
        'Ofis tozalash': 'Ofis tozalash',
        'Derazalar': 'Derazalar',
        
        // Video
        'Bizning Jarayonimiz': 'Bizning Jarayonimiz',
        'Qanday qilib professional tozalash xizmatini amalga oshirishimizni ko\'ring': 'Qanday qilib professional tozalash xizmatini amalga oshirishimizni ko\'ring',
        'Video yuklanmoqda...': 'Video yuklanmoqda...',
        
        // Contact
        'Biz Bilan Bog\'laning': 'Biz Bilan Bog\'laning',
        'Bepul narx olish uchun bizga murojaat qiling': 'Bepul narx olish uchun bizga murojaat qiling',
        'Telefon': 'Telefon',
        'Email': 'Email',
        'Manzil': 'Manzil',
        'Toshkent, O\'zbekiston': 'Toshkent, O\'zbekiston',
        'Ijtimoiy tarmoqlar': 'Ijtimoiy tarmoqlar',
        'Ismingiz': 'Ismingiz',
        'Telefon raqamingiz': 'Telefon raqamingiz',
        'Xizmat turini tanlang': 'Xizmat turini tanlang',
        'Xizmat turi': 'Xizmat turi',
        'Qo\'shimcha ma\'lumot': 'Qo\'shimcha ma\'lumot',
        'Yuborish': 'Yuborish',
        
        // Footer
        'Toshkentdagi eng yaxshi tozalash xizmati': 'Toshkentdagi eng yaxshi tozalash xizmati',
        'Barcha huquqlar himoyalangan.': 'Barcha huquqlar himoyalangan.'
    },
    ru: {
        // Navigation
        'Bosh sahifa': 'Главная',
        'Xizmatlar': 'Услуги',
        'Galereya': 'Галерея',
        'Video': 'Видео',
        'Biz haqimizda': 'О нас',
        'Aloqa': 'Контакты',
        
        // Hero section
        'Toshkentda Professional Tozalash Xizmatlari': 'Профессиональные услуги по уборке в Ташкенте',
        'Uyingiz va ofisingiz uchun mukammal tozalik': 'Идеальная чистота для вашего дома и офиса',
        'Bepul narx olish': 'Получить бесплатную оценку',
        'Hoziroq qo\'ng\'iroq qiling': 'Позвонить сейчас',
        
        // Services
        'Bizning Xizmatlarimiz': 'Наши Услуги',
        'Har qanday tozalash ehtiyojingiz uchun professional yechimlar': 'Профессиональные решения для любых потребностей в уборке',
        'Uy Tozalash': 'Уборка квартир и домов',
        'To\'liq uy tozalash, chuqur tozalash, muntazam tozalash xizmatlari': 'Комплексная уборка, генеральная уборка, регулярная уборка',
        'Ofis Tozalash': 'Уборка офисов',
        'Ofislar, do\'konlar, restoranlar uchun professional tozalash': 'Профессиональная уборка для офисов, магазинов, ресторанов',
        'Chuqur Tozalash': 'Генеральная уборка',
        'Har bir burchakni tozalash va dezinfeksiya qilish': 'Тщательная уборка каждого уголка и дезинфекция',
        'Qurilishdan Keyingi Tozalash': 'Уборка после строительства',
        'Qurilish changi va qoldiqlarini professional tozalash': 'Профессиональное удаление строительной пыли и мусора',
        'Derazalarni Tozalash': 'Мойка окон',
        'Ichki va tashqi derazalarni professional yuvish': 'Профессиональная мойка окон внутри и снаружи',
        'Gilamlarni Tozalash': 'Чистка ковров',
        'Professional gilam yuvish va dog\'larni ketkazish': 'Профессиональная чистка ковров и удаление пятен',
        
        // About
        'Biz Haqimizda': 'О нас',
        'ZeronaClean - Toshkentdagi yetakchi tozalash kompaniyasi. Biz mijozlarimizga yuqori sifatli va ishonchli tozalash xizmatlarini taklif etamiz. Tajribali jamoamiz va ekologik toza mahsulotlarimiz bilan sizning makoningizni toza va yorqin qilamiz.': 'ZeronaClean - ведущая клининговая компания в Ташкенте. Мы предлагаем нашим клиентам высококачественные и надежные услуги по уборке. С нашей опытной командой и экологически чистыми продуктами мы сделаем ваше пространство чистым и сияющим.',
        'Tajribali mutaxassislar': 'Опытные специалисты',
        'Ekologik toza mahsulotlar': 'Экологически чистые продукты',
        '24/7 mijozlar xizmati': 'Круглосуточная поддержка клиентов',
        'Kafolatlangan natija': 'Гарантированный результат',
        
        // Gallery
        'Bizning Ishlarimiz': 'Наши Работы',
        'Mijozlarimiz uchun amalga oshirgan ishlarimizni ko\'ring': 'Посмотрите на работы, выполненные для наших клиентов',
        'Barchasi': 'Все',
        'Uy tozalash': 'Жилые помещения',
        'Ofis tozalash': 'Коммерческие помещения',
        'Derazalar': 'Окна',
        
        // Video
        'Bizning Jarayonimiz': 'Наш Процесс',
        'Qanday qilib professional tozalash xizmatini amalga oshirishimizni ko\'ring': 'Посмотрите, как мы выполняем профессиональную уборку',
        'Video yuklanmoqda...': 'Видео загружается...',
        
        // Contact
        'Biz Bilan Bog\'laning': 'Свяжитесь с Нами',
        'Bepul narx olish uchun bizga murojaat qiling': 'Свяжитесь с нами для получения бесплатной оценки',
        'Telefon': 'Телефон',
        'Email': 'Электронная почта',
        'Manzil': 'Адрес',
        'Toshkent, O\'zbekiston': 'Ташкент, Узбекистан',
        'Ijtimoiy tarmoqlar': 'Социальные сети',
        'Ismingiz': 'Ваше имя',
        'Telefon raqamingiz': 'Ваш телефон',
        'Xizmat turini tanlang': 'Выберите тип услуги',
        'Xizmat turi': 'Тип услуги',
        'Qo\'shimcha ma\'lumot': 'Дополнительная информация',
        'Yuborish': 'Отправить',
        
        // Footer
        'Toshkentdagi eng yaxshi tozalash xizmati': 'Лучший сервис уборки в Ташкенте',
        'Barcha huquqlar himoyalangan.': 'Все права защищены.'
    }
};

// Language switching function
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="switchLanguage('${lang}')"]`).classList.add('active');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-uz][data-ru]').forEach(element => {
        const uzText = element.getAttribute('data-uz');
        const ruText = element.getAttribute('data-ru');
        
        if (lang === 'uz') {
            element.textContent = uzText;
        } else if (lang === 'ru') {
            element.textContent = ruText;
        }
    });
    
    // Update select options
    updateSelectOptions(lang);
    
    // Update meta tags
    updateMetaTags(lang);
}

// Update select options
function updateSelectOptions(lang) {
    const serviceSelect = document.getElementById('service');
    const options = serviceSelect.querySelectorAll('option');
    
    options.forEach(option => {
        const uzText = option.getAttribute('data-uz');
        const ruText = option.getAttribute('data-ru');
        
        if (uzText && ruText) {
            if (lang === 'uz') {
                option.textContent = uzText;
            } else if (lang === 'ru') {
                option.textContent = ruText;
            }
        }
    });
}

// Update meta tags for SEO
function updateMetaTags(lang) {
    const metaTitle = document.querySelector('title');
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (lang === 'uz') {
        metaTitle.textContent = 'ZeronaClean - Toshkentda Professional Tozalash Xizmatlari';
        metaDescription.setAttribute('content', 'ZeronaClean - Toshkentda professional tozalash xizmatlari. Uy va ofis tozalash, chuqur tozalash, derazalarni yuvish. Bepul narx olish.');
        metaKeywords.setAttribute('content', 'tozalash xizmatlari Toshkent, professional tozalash, uy tozalash, ofis tozalash, ZeronaClean');
    } else if (lang === 'ru') {
        metaTitle.textContent = 'ZeronaClean - Профессиональные услуги по уборке в Ташкенте';
        metaDescription.setAttribute('content', 'ZeronaClean - профессиональные услуги по уборке в Ташкенте. Уборка квартир и офисов, генеральная уборка, мойка окон. Бесплатная оценка.');
        metaKeywords.setAttribute('content', 'услуги уборки Ташкент, профессиональная уборка, уборка квартир, уборка офисов, ZeronaClean');
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Gallery filter functionality
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .service-card, .gallery-item, .contact-item').forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Scroll to top button
function initScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.phone || !data.service) {
            alert(currentLanguage === 'uz' ? 
                'Iltimos, barcha majburiy maydonlarni to\'ldiring!' : 
                'Пожалуйста, заполните все обязательные поля!');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = currentLanguage === 'uz' ? 'Yuborilmoqda...' : 'Отправляется...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert(currentLanguage === 'uz' ? 
                'Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.' : 
                'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
            
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add hamburger click event
    document.querySelector('.hamburger').addEventListener('click', toggleMobileMenu);
    
    // Initialize all features
    initGalleryFilters();
    initSmoothScrolling();
    initScrollAnimations();
    initScrollToTop();
    initHeaderScrollEffect();
    initContactForm();
    
    // Set default language
    switchLanguage('uz');
    
    // Add loading animation to elements
    setTimeout(() => {
        document.querySelectorAll('.loading').forEach(el => {
            el.classList.add('loaded');
        });
    }, 100);
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on resize
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Preload images for better performance
function preloadImages() {
    const images = [
        'images/yZ86yIDAqj7W.jpg',
        'images/J4tcI7bqrq56.jpg',
        'images/kaavIyFlujby.jpg',
        'images/RRiU5mbzdUQm.jpg',
        'images/FLePi86s3ita.jpg',
        'images/xRHdXYPqT7A9.jpg',
        'images/BwGaq8Te37Bk.jpg',
        'images/iE9hAuqmCn51.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Start preloading images
preloadImages();


// SEO Performance Optimizations
function initSEOOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const criticalImages = [
        'images/hero-image.jpg',
        'images/J4tcI7bqrq56.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Update URL without page reload for language switching
    function updateURL(lang) {
        const url = new URL(window.location);
        if (lang === 'ru') {
            url.searchParams.set('lang', 'ru');
        } else {
            url.searchParams.delete('lang');
        }
        window.history.replaceState({}, '', url);
    }
    
    // Enhanced language switching with URL update
    const originalSwitchLanguage = window.switchLanguage;
    window.switchLanguage = function(lang) {
        originalSwitchLanguage(lang);
        updateURL(lang);
        
        // Update structured data for current language
        updateStructuredData(lang);
    };
    
    // Update structured data based on language
    function updateStructuredData(lang) {
        const script = document.querySelector('script[type="application/ld+json"]');
        if (script) {
            const data = JSON.parse(script.textContent);
            if (lang === 'ru') {
                data.description = 'Профессиональные услуги по уборке в Ташкенте. Уборка квартир и офисов, генеральная уборка, мойка окон.';
                data.hasOfferCatalog.itemListElement[0].itemOffered.name = 'Уборка квартир и домов';
                data.hasOfferCatalog.itemListElement[0].itemOffered.description = 'Комплексная уборка, генеральная уборка, регулярная уборка';
                data.hasOfferCatalog.itemListElement[1].itemOffered.name = 'Уборка офисов';
                data.hasOfferCatalog.itemListElement[1].itemOffered.description = 'Профессиональная уборка для офисов, магазинов, ресторанов';
                data.hasOfferCatalog.itemListElement[2].itemOffered.name = 'Мойка окон';
                data.hasOfferCatalog.itemListElement[2].itemOffered.description = 'Профессиональная мойка окон внутри и снаружи';
            } else {
                data.description = 'Professional tozalash xizmatlari Toshkentda. Uy va ofis tozalash, chuqur tozalash, derazalarni yuvish.';
                data.hasOfferCatalog.itemListElement[0].itemOffered.name = 'Uy Tozalash';
                data.hasOfferCatalog.itemListElement[0].itemOffered.description = 'To\'liq uy tozalash, chuqur tozalash, muntazam tozalash xizmatlari';
                data.hasOfferCatalog.itemListElement[1].itemOffered.name = 'Ofis Tozalash';
                data.hasOfferCatalog.itemListElement[1].itemOffered.description = 'Ofislar, do\'konlar, restoranlar uchun professional tozalash';
                data.hasOfferCatalog.itemListElement[2].itemOffered.name = 'Derazalarni Tozalash';
                data.hasOfferCatalog.itemListElement[2].itemOffered.description = 'Ichki va tashqi derazalarni professional yuvish';
            }
            script.textContent = JSON.stringify(data);
        }
    }
    
    // Check URL parameters on page load
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'ru') {
        switchLanguage('ru');
    }
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
            }, 0);
        });
    }
}

// Initialize SEO optimizations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSEOOptimizations);
} else {
    initSEOOptimizations();
}

