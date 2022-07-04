export const menus = [
    {
        path: '/',
        name: 'home'
    }, {
        path: '/solutions',
        name: 'solutions'
    }
];

export const landingData = {
    intro: [

        '안녕하세요. 코딩하는 것이 즐거운 개발자 입니다.', '저는 현재 의류 기업 전산팀에서 근무하고 있으며, 자바 기술을 사용중 입니다.', '이곳은 저를 소개하는 동시에, 저의 개발 성장일지를 기록하는 공간입니다.', '저에게 문의할 내용이 있으면 언제든지 연락주세요', '감사합니다!'
    ],
    vision: [
        'About Me',
        'Name:  양우섭(woosub, Yang)',
        'Birthday: 91.01.20',
        'Adress: Guro-gu, seoul',
        'Phone: 010-3136-2272',
        'E-Mail: uoco91@gmail.com'
    ],
    strategies: [
        {
            title: 'ERP/MES 영업/CS/POS/회계/제조 담당 시스템 개발',
            content: '온/오프라인 판매,수불, CS업무 및 마지막 회계감사 업무까지 다양한 경험을 가지고 있습니다.'
        }, {
            title: '커뮤니케이션을 통한 니즈파악 및 문제해결 능력',
            content: '수년간 현업들과의 경험을 통해 니즈를 구체적으로 파악할 수 있습니다.'
        }, {
            title: '의류/제조산업 전산 시스템 개발 전문',
            content: '의류회사에 경험으로 담당 업무 외 전반적인 프로세스를 정의할 수 있습니다.'
        }
    ]
};

export const solutionsData = [

    {
        key: "xx에스티",
        contents: {
            title: "xx에스티",
            link: '/nst',
            thumbnail: 'https://cdn.pixabay.com/photo/2018/07/26/13/39/internet-3563638_1280.jpg',
            desc: ["ERP전문 솔루션 기업입니다."],
            descKo: ["공공기관/제약회사/제조회사등 다양한 기업의 ERP도입 프로젝트에 참여하였습니다."],
            items: [
                {
                    name: 'xx사령부',
                    link: '/army',
                    desc: [
                        {
                            title: "Project",
                            content: "프로젝트 진행일 : 2017.04 ~ 2017.09 (6개월)/ 2018.06 ~ 2018.12(7개월), 소속 회사명 : 나인에스티, 담당" +
                                "파트: 기밀, 프로젝트 유형 : 프로그램 신규 개발 및 개선, 주사용 기술 : 자바스크립트/오라클/Spring "
                        }
                    ]
                }, {
                    name: 'xx스틸',
                    link: '/ts',
                    desc: [
                        {
                            title: "Project",
                            content: "프로젝트 진행일 : 2018.12 ~ 2018.02(3개월), 소속 회사명 : 나인에스티, 담당파트: 자재관리, 프로젝트 유형 : 프로그램 " +
                                "신규 개발 및 개선, 주사용 기술 : C#/.net/MSSQL "
                        }
                    ]
                }, {
                    name: 'xx제약',
                    link: '/yuyu',
                    desc: [
                        {
                            title: "Project",
                            content: "프로젝트 진행일 : 2019.02 ~ 2019.07(6개월), 소속 회사명 : 나인에스티, 담당파트: 영업, 프로젝트 유형 : 프로그램 신규" +
                                " 개발 및 개선, 주사용 기술 : C#/.net/MSSQL "
                        }
                    ]
                }
            ]
        }
    }, {
        key: "xx스킨",
        contents: {
            title: "xx스킨",
            link: '/scnd',
            thumbnail: 'https://cdn.pixabay.com/photo/2018/07/26/13/39/internet-3563638_1280.jpg',
            desc: ["친환경 니트웨어 브랜드 ‘세컨스킨(SEKANSKEEN)’을 전개하는 무봉제 의류 전문 기업입니다."],
            descKo: ["자체 스마트팩토리 MES를 도입함으로써, 자재관리/생산공정(편직/봉제/염색) 관련 프로세스를 알 수 있었습니다."],
            items: [
                {
                    name: '스마트팩토리 공정 프로세스(MES)',
                    link: '/scnd',
                    desc: [
                        {
                            title: "Project",
                            content: "프로젝트 진행일 : 2019.08~2019.12(5개월), 소속 회사명 : 지앤지엔터프라이즈, 담당파트: 제조/생산, 프로젝트 유형 : 프로" +
                                "그램 신규 개발 및 개선, 주사용 기술 : 델파이/오라클 "
                        }
                    ]
                }
            ]
        }
    }, {
        key: 'xx홀딩스',
        contents: {
            title: "xx홀딩스",
            link: '/natg',
            thumbnail: 'https://cdn.pixabay.com/photo/2019/06/06/16/02/technology-4256272_1280.jpg',
            desc: ["National Geographic을 필두로 NG Kids,NFL,Jeep등의 브랜드를 가지고 있는 의류기업입니다."],
            descKo: ["다양한 브랜드를 통하여 온/오프라인 판매부터 CS업무, 회계파트까지 다양한 경험을 할 수 있습니다."],
            items: [
                {
                    name: 'CS파트 고도화',
                    link: '/natgcs',
                    desc: [
                        {
                            title: "Project",
                            content: "프로젝트 진행일 : 2021.03~2021.06(4개월), 소속 회사명 : 더네이쳐홀딩스, 담당파트: CS, 프로젝트 유형 : 프로그램 신규" +
                                " 개발 및 개선, 주사용 기술 : 마이플랫폼/오라클/Spring "
                        }
                    ]
                }, {
                    name: '내부회계관리',
                    link: '/natgac',
                    desc: [
                        {
                            title: "Project",
                            content: "프로젝트 진행일 : 2021.12~2022.07(8개월), 소속 회사명 : 더네이쳐홀딩스, 담당파트: 회계, 프로젝트 유형 : 프로그램 신규" +
                                " 개발 및 개선, 주사용 기술 : 마이플랫폼/오라클/Spring "
                        }
                    ]
                }
            ]
        }
    }
];

export const globalInsightsCenterData = {
    meta: {
        displayItemsId: 2021,
        link: 'https://home.kpmg/xx/en/home/insights.html',
        desc: 'Welcome to the KPMG knowledge base of research that demonstrates our understan' +
                'ding of complex business challenges faced by companies around the world',
        surveyContent: {
            title: 'KPMG CEO Outlook Pulse Survey',
            desc: 'Preparing for a new reality.',
            link: 'https://home.kpmg/xx/en/home/insights/2021/03/ceo-outlook-pulse.html'
        }
    },
    contents: {
        "2020": {
            items: [
                {
                    title: 'Data-driven client stories',
                    desc: 'Learn how KPMG member firms helped clients cultivate their data ecosystems.',
                    link: 'https://home.kpmg/xx/en/home/insights/2019/11/data-driven-client-stories.html'
                }, {
                    title: 'Building confidence in your data',
                    desc: 'At KPMG, our approach to data-driven technologies is rooted in trust.',
                    link: 'https://home.kpmg/xx/en/home/insights/2018/07/trusted-analytics-for-confident-' +
                            'decisions.html'
                }, {
                    title: 'Data-driven Technologies : Our capabilities',
                    desc: 'KPMG has developed robust technology solutions to help clients find value in d' +
                            'ata.',
                    link: 'https://home.kpmg/xx/en/home/insights/2018/07/our-capabilities.html'
                }, {
                    title: 'Ready, set, fail?',
                    desc: 'Results from a 2017 KPMG LLP study',
                    link: 'https://home.kpmg/xx/en/home/insights/2018/08/ready-set-fail.html'
                }
            ]
        },
        "2021": {
            items: [
                {
                    title: 'KPMG IMPACT ',
                    desc: 'Global expertise building a more sustainable and resilient future.',
                    link: 'https://home.kpmg/xx/en/home/insights/2020/06/kpmg-impact.html'
                }, {
                    title: 'Agile and resilient',
                    desc: 'Alternative investments embrace the new reality.',
                    link: 'https://home.kpmg/xx/en/home/insights/2020/09/agile-and-resilient-alternative-' +
                            'investments-embrace-the-new-reality.html'
                }, {
                    title: 'Pulse of Fintech',
                    desc: 'Biannual analysis of global fintech investments.',
                    link: 'https://home.kpmg/xx/en/home/industries/financial-services/pulse-of-fintech.ht' +
                            'ml'
                }, {
                    title: 'Contextualizing "shovel-ready" in light of COVID-19',
                    desc: 'Infrastructure has been a reliable shoulder to lean on through the COVID-19 cr' +
                            'isis. But what does it mean to be shovel-ready in this new reality.',
                    link: 'https://home.kpmg/xx/en/home/insights/2020/08/contextualizing-shovel-ready-in-' +
                            'light-of-covid-19.html'
                }
            ]
        }
    }
};
