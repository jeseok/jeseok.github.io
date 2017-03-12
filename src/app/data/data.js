export default {
  data : {
    menus: {
      clients: {
        kr: "클라이언트 경험",
        en: "clients experience"
      },
      work : {
        kr : "최근 경력",
        en: "recent work experience",
      },
      project: {
        kr : "선별된 프로젝트들",
        en: "selected work",
      },
      education: {
        kl : "학력",
        en: "education"
      },
      contact: {
        kr: "연락처",
        en: "contact"
      },
      specialties:{
        kr: "전문",
        en: "specialties"
      }
    },
    profile :{
      name : {
        kr : "구제석",
        en: "Jeseok Koo"
      },
      description: {
        kr: "현재 필라델피아에 거주중인 소프트웨어 디벨로퍼 입니다. 저는 전통적인 프로그래밍 기법과 함께 현대 언어, 자동화된 태스크관리, 지속적 통합과 같은 도구들을 이용하여 테스트 가능한, 재사용이 가능한, 관리 및 확장성을 내포하는 소프트웨어를 만드는것에 매우 열정적입니다.",
        en: "A software developer living in Philadelphia, PA. \nI’m passionate to build testable, reusable, manageable, and scalable software using classical programming practices with modern languages and tools such as automated task management and continuous integration."
      },
      socialLink: {
        url : "https://github.com/jeseok",
        username: "@jeseok"
      },
      contact: {
        phone: "+1 267 234 8081",
        email : "jeseokkoo@gmail.com"
      }
    },
    clients: [
      'Beats by Dre','Campbell', 'Comcast', 'Sunoco','Philadelphia Museum of Arts','Technical.ly(Philly)','Philadelphia International Festival of the Arts', 'Subcircle', '...'
    ],
    specialties: [
      'iOS', 'Swift', 'Objective-C', 'Javascript', 'React', 'Python', 'OpenCV', 'OpenFrameworks', 'Arduino', '...'
    ],
    experience : [
      {
        time: "Jan 2014 - current",
        title : "Allen and Gerritsen",
        link : "http://www.a-g.com/",
        etc: "Developer"
      },
      {
        time: "Sept 2013 - Dec 2013",
        title : "A&G Labs",
        link : "http://a-glabs.com/",
        etc: "Labs Technologist Intern"
      },
      {
        time: "Jan 2012 - Sept 2013",
        title : "University of The Arts",
        link : "http://www.uarts.edu/",
        etc: "Programming Tutor at Academic Support"
      }
    ],
    projects : [
      {
        time: "Mar 2017",
        title: "iPad Kiosk for Comcast NBCUniversal",
        link : "http://www.a-g.com/thinking/2017/03/allen-and-gerritsen-crafts-success-stories-with-comcast-nbcuniversal-for-sxsw-2017/"
      },
      {
        time: "Nov 2016",
        title : "Installations for Philadelphia Museum of Arts",
        link : "http://www.a-g.com/work/philadelphia-museum-of-art",
      },
      {
        time: "Feb 2015",
        title : "Snackbot for Campbell",
        link : "http://www.a-g.com/work/campbell/",
      },
      {
        time: "July 2014",
        title : "Pic Nix for A&G Labs",
        link : "http://a-glabs.com/picnix/",
      },
      {
        time: "Dec 2013",
        title : "Led Tree for Beats By Dre",
        link : "http://www.a-g.com/thinking/2013/12/aandg-beatsbydre-team-up-social-powered-holiday-experience/",
      },
      {
        time: "Mar 2013",
        title : "Time Machine for Philadelphia International Festival of the Arts",
        link : "https://vimeo.com/62958950",
      }
    ]
  }
}
