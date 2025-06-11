import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types/language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.team': 'Team',
    'nav.recruitment': 'Recruitment',
    'nav.sponsors': 'Sponsors',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'FORMULA STUDENT TEAM',
    'hero.title.racing': 'RACING',
    'hero.title.excellence': 'EXCELLENCE',
    'hero.subtitle': 'Pushing the boundaries of engineering and innovation at the Technical University of Moldova',
    'hero.cta.discover': 'Discover Our Story',
    'hero.cta.projects': 'View Projects',
    
    // About Section
    'about.badge': 'ABOUT US',
    'about.title': 'Engineering the Future',
    'about.description': 'We are a passionate team of engineering students from the Technical University of Moldova, dedicated to designing, building, and racing formula-style vehicles.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To provide students with hands-on experience in automotive engineering, project management, and teamwork while competing at the highest level in Formula Student competitions worldwide.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To become the leading Formula Student team in Eastern Europe, fostering innovation and excellence in automotive engineering education.',
    'about.stats.members': 'Team Members',
    'about.stats.competitions': 'Competitions',
    'about.stats.years': 'Years Active',
    'about.stats.projects': 'Projects',
    
    // Projects Section
    'projects.badge': 'OUR PROJECTS',
    'projects.title': 'Innovation in Motion',
    'projects.description': 'Explore our cutting-edge projects that push the boundaries of automotive engineering',
    'projects.status.active': 'Active',
    'projects.status.completed': 'Completed',
    
    // Team Section
    'team.badge': 'OUR TEAM',
    'team.title': 'Meet the Engineers',
    'team.description': 'Talented students from various engineering disciplines working together to achieve excellence',
    'team.stats.members': 'Active Members',
    'team.stats.departments': 'Departments',
    'team.stats.dedication': 'Dedication',
    
    // Recruitment Section
    'recruitment.badge': 'JOIN US',
    'recruitment.title': 'Shape Your Future',
    'recruitment.description': 'Join our team and gain invaluable hands-on experience in automotive engineering, project management, and international competition.',
    'recruitment.cta.title': 'Ready to Join Our Team?',
    'recruitment.cta.description': 'We\'re always looking for passionate students who want to make a difference. No prior experience required - just enthusiasm and willingness to learn!',
    'recruitment.cta.apply': 'Apply Now',
    'recruitment.cta.learn': 'Learn More',
    
    // Sponsors Section
    'sponsors.badge': 'OUR SPONSORS',
    'sponsors.title': 'Powered by Partnership',
    'sponsors.description': 'We\'re grateful to our sponsors who make our racing dreams possible through their generous support',
    'sponsors.cta.title': 'Become a Sponsor',
    'sponsors.cta.description': 'Partner with us to support the next generation of automotive engineers and gain valuable exposure in the engineering community.',
    'sponsors.cta.package': 'Sponsorship Package',
    'sponsors.cta.contact': 'Contact Us',
    
    // Contact Section
    'contact.badge': 'GET IN TOUCH',
    'contact.title': 'Contact Us',
    'contact.description': 'Ready to join our team or learn more about our projects? We\'d love to hear from you!',
    'contact.info.title': 'Get in Touch',
    'contact.form.title': 'Send us a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.description': 'Engineering excellence through innovation, teamwork, and passion for automotive technology.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.newsletter': 'Stay Updated',
    'footer.newsletter.description': 'Subscribe to our newsletter for the latest updates on our projects and competitions.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 Formula Student UTM. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
  },
  
  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.about': 'Despre',
    'nav.projects': 'Proiecte',
    'nav.team': 'Echipa',
    'nav.recruitment': 'Recrutare',
    'nav.sponsors': 'Sponsori',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'ECHIPA FORMULA STUDENT',
    'hero.title.racing': 'CURSE',
    'hero.title.excellence': 'EXCELENȚĂ',
    'hero.subtitle': 'Împingem limitele ingineriei și inovației la Universitatea Tehnică din Moldova',
    'hero.cta.discover': 'Descoperă Povestea Noastră',
    'hero.cta.projects': 'Vezi Proiectele',
    
    // About Section
    'about.badge': 'DESPRE NOI',
    'about.title': 'Construind Viitorul',
    'about.description': 'Suntem o echipă pasionată de studenți ingineri de la Universitatea Tehnică din Moldova, dedicați proiectării, construirii și curselor cu vehicule de tip formula.',
    'about.mission.title': 'Misiunea Noastră',
    'about.mission.text': 'Să oferim studenților experiență practică în ingineria auto, managementul proiectelor și munca în echipă, concurând la cel mai înalt nivel în competițiile Formula Student din întreaga lume.',
    'about.vision.title': 'Viziunea Noastră',
    'about.vision.text': 'Să devenim echipa Formula Student de frunte din Europa de Est, promovând inovația și excelența în educația inginerească auto.',
    'about.stats.members': 'Membri Echipă',
    'about.stats.competitions': 'Competiții',
    'about.stats.years': 'Ani Activi',
    'about.stats.projects': 'Proiecte',
    
    // Projects Section
    'projects.badge': 'PROIECTELE NOASTRE',
    'projects.title': 'Inovație în Mișcare',
    'projects.description': 'Explorează proiectele noastre de vârf care împing limitele ingineriei auto',
    'projects.status.active': 'Activ',
    'projects.status.completed': 'Finalizat',
    
    // Team Section
    'team.badge': 'ECHIPA NOASTRĂ',
    'team.title': 'Cunoaște Inginerii',
    'team.description': 'Studenți talentați din diverse discipline inginerești care lucrează împreună pentru a atinge excelența',
    'team.stats.members': 'Membri Activi',
    'team.stats.departments': 'Departamente',
    'team.stats.dedication': 'Dedicare',
    
    // Recruitment Section
    'recruitment.badge': 'ALĂTURĂ-TE',
    'recruitment.title': 'Modelează-ți Viitorul',
    'recruitment.description': 'Alătură-te echipei noastre și câștigă experiență practică neprețuită în ingineria auto, managementul proiectelor și competițiile internaționale.',
    'recruitment.cta.title': 'Gata să te Alături Echipei?',
    'recruitment.cta.description': 'Căutăm mereu studenți pasionați care vor să facă diferența. Nu este necesară experiență anterioară - doar entuziasm și dorința de a învăța!',
    'recruitment.cta.apply': 'Aplică Acum',
    'recruitment.cta.learn': 'Află Mai Mult',
    
    // Sponsors Section
    'sponsors.badge': 'SPONSORII NOȘTRI',
    'sponsors.title': 'Alimentați de Parteneriat',
    'sponsors.description': 'Suntem recunoscători sponsorilor noștri care ne fac posibile visurile de curse prin sprijinul lor generos',
    'sponsors.cta.title': 'Devino Sponsor',
    'sponsors.cta.description': 'Fă parteneriat cu noi pentru a sprijini următoarea generație de ingineri auto și câștigă expunere valoroasă în comunitatea inginerească.',
    'sponsors.cta.package': 'Pachet Sponsorizare',
    'sponsors.cta.contact': 'Contactează-ne',
    
    // Contact Section
    'contact.badge': 'INTRĂ ÎN LEGĂTURĂ',
    'contact.title': 'Contactează-ne',
    'contact.description': 'Gata să te alături echipei sau să afli mai multe despre proiectele noastre? Ne-ar plăcea să auzim de la tine!',
    'contact.info.title': 'Intră în Legătură',
    'contact.form.title': 'Trimite-ne un Mesaj',
    'contact.form.firstName': 'Prenume',
    'contact.form.lastName': 'Nume',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subiect',
    'contact.form.message': 'Mesaj',
    'contact.form.send': 'Trimite Mesaj',
    
    // Footer
    'footer.description': 'Excelență inginerească prin inovație, muncă în echipă și pasiune pentru tehnologia auto.',
    'footer.quickLinks': 'Link-uri Rapide',
    'footer.contactInfo': 'Informații Contact',
    'footer.newsletter': 'Rămâi la Curent',
    'footer.newsletter.description': 'Abonează-te la newsletter-ul nostru pentru ultimele actualizări despre proiectele și competițiile noastre.',
    'footer.newsletter.placeholder': 'Introdu email-ul',
    'footer.newsletter.subscribe': 'Abonează-te',
    'footer.copyright': '© 2024 Formula Student UTM. Toate drepturile rezervate.',
    'footer.privacy': 'Politica de Confidențialitate',
    'footer.terms': 'Termeni și Condiții',
    'footer.cookies': 'Politica Cookie-uri',
  },
  
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.projects': 'Проекты',
    'nav.team': 'Команда',
    'nav.recruitment': 'Набор',
    'nav.sponsors': 'Спонсоры',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.badge': 'КОМАНДА ФОРМУЛА СТУДЕНТ',
    'hero.title.racing': 'ГОНКИ',
    'hero.title.excellence': 'СОВЕРШЕНСТВО',
    'hero.subtitle': 'Раздвигаем границы инженерии и инноваций в Техническом университете Молдовы',
    'hero.cta.discover': 'Узнать Нашу Историю',
    'hero.cta.projects': 'Посмотреть Проекты',
    
    // About Section
    'about.badge': 'О НАС',
    'about.title': 'Создавая Будущее',
    'about.description': 'Мы - страстная команда студентов-инженеров из Технического университета Молдовы, посвятивших себя проектированию, строительству и гонкам на автомобилях формула-стиля.',
    'about.mission.title': 'Наша Миссия',
    'about.mission.text': 'Предоставить студентам практический опыт в автомобильной инженерии, управлении проектами и командной работе, соревнуясь на высшем уровне в соревнованиях Formula Student по всему миру.',
    'about.vision.title': 'Наше Видение',
    'about.vision.text': 'Стать ведущей командой Formula Student в Восточной Европе, способствуя инновациям и совершенству в образовании автомобильной инженерии.',
    'about.stats.members': 'Члены Команды',
    'about.stats.competitions': 'Соревнования',
    'about.stats.years': 'Лет Активности',
    'about.stats.projects': 'Проекты',
    
    // Projects Section
    'projects.badge': 'НАШИ ПРОЕКТЫ',
    'projects.title': 'Инновации в Движении',
    'projects.description': 'Исследуйте наши передовые проекты, которые раздвигают границы автомобильной инженерии',
    'projects.status.active': 'Активный',
    'projects.status.completed': 'Завершен',
    
    // Team Section
    'team.badge': 'НАША КОМАНДА',
    'team.title': 'Познакомьтесь с Инженерами',
    'team.description': 'Талантливые студенты из различных инженерных дисциплин, работающие вместе для достижения совершенства',
    'team.stats.members': 'Активные Члены',
    'team.stats.departments': 'Отделы',
    'team.stats.dedication': 'Преданность',
    
    // Recruitment Section
    'recruitment.badge': 'ПРИСОЕДИНЯЙТЕСЬ',
    'recruitment.title': 'Формируйте Свое Будущее',
    'recruitment.description': 'Присоединяйтесь к нашей команде и получите бесценный практический опыт в автомобильной инженерии, управлении проектами и международных соревнованиях.',
    'recruitment.cta.title': 'Готовы Присоединиться к Команде?',
    'recruitment.cta.description': 'Мы всегда ищем увлеченных студентов, которые хотят изменить мир. Предыдущий опыт не требуется - только энтузиазм и желание учиться!',
    'recruitment.cta.apply': 'Подать Заявку',
    'recruitment.cta.learn': 'Узнать Больше',
    
    // Sponsors Section
    'sponsors.badge': 'НАШИ СПОНСОРЫ',
    'sponsors.title': 'Поддержанные Партнерством',
    'sponsors.description': 'Мы благодарны нашим спонсорам, которые делают наши гоночные мечты возможными благодаря их щедрой поддержке',
    'sponsors.cta.title': 'Стать Спонсором',
    'sponsors.cta.description': 'Сотрудничайте с нами, чтобы поддержать следующее поколение автомобильных инженеров и получить ценную известность в инженерном сообществе.',
    'sponsors.cta.package': 'Пакет Спонсорства',
    'sponsors.cta.contact': 'Связаться с Нами',
    
    // Contact Section
    'contact.badge': 'СВЯЗАТЬСЯ',
    'contact.title': 'Свяжитесь с Нами',
    'contact.description': 'Готовы присоединиться к нашей команде или узнать больше о наших проектах? Мы будем рады услышать от вас!',
    'contact.info.title': 'Связаться',
    'contact.form.title': 'Отправить Сообщение',
    'contact.form.firstName': 'Имя',
    'contact.form.lastName': 'Фамилия',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Тема',
    'contact.form.message': 'Сообщение',
    'contact.form.send': 'Отправить Сообщение',
    
    // Footer
    'footer.description': 'Инженерное совершенство через инновации, командную работу и страсть к автомобильным технологиям.',
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.contactInfo': 'Контактная Информация',
    'footer.newsletter': 'Оставайтесь в Курсе',
    'footer.newsletter.description': 'Подпишитесь на нашу рассылку для получения последних обновлений о наших проектах и соревнованиях.',
    'footer.newsletter.placeholder': 'Введите ваш email',
    'footer.newsletter.subscribe': 'Подписаться',
    'footer.copyright': '© 2024 Formula Student UTM. Все права защищены.',
    'footer.privacy': 'Политика Конфиденциальности',
    'footer.terms': 'Условия Использования',
    'footer.cookies': 'Политика Cookies',
  }
};