import { SongSH, KimDW, LimSS, SeokMK, SunSK } from "@/assets/Images/Professors";

export interface ProfessorDataInterface {
  name: string;
  image: string;
  phone: string;
  email: string;
  location: string;
  education: string;
  major: string;
  research: string;
}

export interface TrackDataInterface {
  name: string;
  professorData: ProfessorDataInterface;
  description: string;
  phases: {
    phase1: string[];
    phase2: string[];
    phase3: string[];
  };
}

export const TracksData: TrackDataInterface[] = [
  {
    name: "게임/영상",
    professorData: {
      name: "송수환 교수님",
      image: SongSH,
      phone: "02-2260-3765",
      email: "songsh@dongguk.edu",
      location: "신공학관 10108호",
      education: "한국과학기술원 전산학부 공학박사",
      major: "로봇 인공지능",
      research: "로보틱스, 인공지능, 컴퓨터비전",
    },
    description:
      "게임/영상 트랙은 창의력과 기술력을 바탕으로 게임 및 영상 콘텐츠 제작의 전문성을 기르는 데 중점을 둡니다. 게임 개발, 영상 제작의 두 파트로 구성되어 있습니다. 게임 개발 파트에서는 Unity와 Unreal Engine을 활용해 게임 설계, 구현, 테스트 과정을 체계적으로 배우며, 실전 프로젝트를 통해 협업 능력을 배양합니다. 영상 제작 파트에서는 Blender와 3D MAX를 사용해 창의적인 영상 콘텐츠를 제작하며, 희망자에 한해 컴퓨터 비전 분야를 학습할 기회도 제공합니다. 창의적인 아이디어를 실현하고 실무 능력을 키우고자 하는 모든 학생들을 환영합니다.",
    phases: {
      phase1: [
        "게임 개발 프로젝트",
        "게임 개발자 초청 세미나",
        "월별 트랙 정기 세미나",
      ],
      phase2: [
        "클론코딩 프로젝트",
        "게임 개발 공모전 준비팀",
      ],
      phase3: [
        "트랙 연합 프로젝트",
        "게임 개발 공모전",
        "월별 트랙 정기 세미나",
      ],
    },
  },
  {
    name: "보안/웹",
    professorData: {
      name: "김동우 교수님",
      image: KimDW,
      phone: "02-2260-3711",
      email: "dongwoo.kim@dgu.ac.kr",
      location: "정보문화관(P) 608호",
      education: "서울대학교 수리과학부 이학박사",
      major: "암호학",
      research:
        "동형암호, zk-SNARK, 안전한 다자간 계산 등 개인정보보호 강화 기술, 개인정보보호 기계학습",
    },
    description:
      "보안/웹 트랙에서는 웹 프로젝트에 보안 기술을 적용하여 안전성과 신뢰성을 강화하는 것을 목표로 합니다. 자신이 개발한 웹 애플리케이션의 보안 취약점을 진단하고, 최신 보안 동향과 국내 보안 학회 논문을 참고하여 실질적인 보안 솔루션을 프로젝트에 적용합니다. 이를 통해 보안 위협으로부터 안전한 웹 환경을 구축하고, 보다 신뢰할 수 있는 웹 서비스 개발을 경험할 수 있습니다.",
    phases: {
      phase1: [
        "보안 전문가 초청 강의",
        "미니 프로젝트",
        "자율 스터디",
      ],
      phase2: [
        "트랙 연합 프로젝트",
        "자율 스터디",
        "공개 SW 개발자 대회",
        "기업 연계 프로젝트",
      ],
      phase3: [
        "트랙 연합 프로젝트",
        "자율 스터디",
        "공개 SW 개발자 대회",
        "기업 연계 프로젝트",
      ],
    },
  },
  {
    name: "인공지능",
    professorData: {
      name: "임상수 교수님",
      image: LimSS,
      phone: "02-2260-3848",
      email: "sslim@dgu.ac.kr",
      location: "정보문화관(P) 621호",
      education: "서울대학교 생물정보학 이학박사",
      major: "생물정보학, 화학정보학",
      research: "인공지능 기반 신약개발, 유전체 빅데이터 분석",
    },
    description:
      "인공지능 트랙에서는 단계적인 프로젝트와 협업 경험을 통해 SW 심화 역량을 기를 수 있습니다. NLP, CV, 강화학습 등 원하는 세부 분야를 선택하여 프로젝트를 진행하며, 더 나아가 기업 연계 프로젝트를 통해 실무 역량을 기를 수 있습니다.",
    phases: {
      phase1: [
        "1차 프로젝트",
        "인공지능 전문가 초청 세미나",
        "자율 스터디 진행",
      ],
      phase2: [
        "1차 프로젝트 발표회",
        "2차 프로젝트 (기업 연계, 트랙 연합)",
        "자율 스터디 진행",
        "외부 공모전, 대회 참여",
      ],
      phase3: [
        "2차 프로젝트 (기업 연계, 트랙 연합)",
        "자율 스터디 진행",
        "외부 공모전, 대회 참여",
        "2차 프로젝트 발표회",
      ],
    },
  },
  {
    name: "사물인터넷/로봇",
    professorData: {
      name: "석문기 교수님",
      image: SeokMK,
      phone: "02-2260-3710",
      email: "mgseok@dongguk.edu",
      location: "정보문화관(P) 606호",
      education: "KAIST(한국과학기술원) 전자공학과 공학박사",
      major: "디지털 트윈, 사이버-물리 시스템",
      research: "모델 검증, 시뮬레이션 기반 최적화, 병렬/분산 컴퓨팅, 머신러닝",
    },
    description:
      "사물인터넷/로봇 트랙은 최신 IoT 기술과 로봇 시스템 학습, 실전 프로젝트를 수행을 통해 스마트 IoT 환경을 구축하고 자동화 기술을 연구하는 트랙입니다. 라즈베리파이, 센서 네트워크 등으로 IoT 환경을 구축하고, ROS2와 SLAM을 활용해 로봇 시스템을 설계합니다. IoT와 로봇 기술을 체계적으로 익히고, 실무 프로젝트 경험을 쌓으며 성장하고자 하는 학생들을 환영합니다.",
    phases: {
      phase1: [
        "전체 이론/실습 스터디",
        "IoT/로봇 전문가 초청 강의",
      ],
      phase2: [
        "기업 연계 및 자율 팀 프로젝트(설계)",
      ],
      phase3: [
        "기업 연계 및 자율 팀 프로젝트(고도화)",
        "팀별 자율 심화 스터디",
      ],
    },
  },
  {
    name: "빅데이터",
    professorData: {
      name: "선석규 교수님",
      image: SunSK,
      phone: "02-2260-3342",
      email: "sukkyu.sun@dongguk.edu",
      location: "법학/만해관 401호",
      education: "서울대학교 바이오엔지니어링전공 공학박사",
      major: "의료인공지능",
      research: "의료영상, 생체 신호 처리",
    },
    description:
      "빅데이터 트랙은 대용량 데이터를 다루는 방법을 학습하고, 데이터 분석을 통해 인사이트를 도출하는 역량을 키우는 데 집중합니다. 머신러닝, 데이터 시각화, SQL, 그리고 Elastic Search 등 다양한 분석 기법을 실습할 수 있습니다. 또한 기업 연계 프로젝트 및 외부 공모전 참여를 통해 실전 경험을 쌓아나갈 수 있습니다. 뿐만 아니라 빅데이터 팀 프로젝트, 자율 스터디, 해커톤 등을 통해 협업 역량을 강화하고 네트워킹 기회를 제공합니다.",
    phases: {
      phase1: [
        "Peer-멘토링",
        "팀 빌딩 및 외부 공모전 참여",
        "데이터분석, SW 교육",
      ],
      phase2: [
        "ADsP, SQLD 자격증 취득 스터디",
        "ELK 스택을 활용한 기업 연계 프로젝트",
        "팀 빌딩 및 외부 공모전 참여",
        "데이터분석, SW 교육",
      ],
      phase3: [
        "Peer-멘토링",
        "ELK 스택을 활용한 기업 연계 프로젝트",
        "팀 빌딩 및 외부 공모전 참여",
        "데이터분석, SW 교육",
      ],
    },
  },
];
