import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import pilllawBackground from '../img/PILLLAW.jpg';
import cookieBackground from '../img/cookie.jpg';
import boardBackground from '../img/board_project.png';
import miniBackground from '../img/mini_project.png';
import publicKeyBackground from '../img/elliptic_curve_project.jpg';
import deliveryBackground from '../img/first_project.png';
import pilllawSignin from "../img/PILLLAW_Signin.jpg";
import pilllawCategory from "../img/PILLLAW_Category.jpg";
import pilllawArchitecture from "../img/PILLLAW_system_architecture.svg";
import { 
  faDatabase, 
  faDesktop, 
  faCodeBranch, 
  faFileAlt,
  faChartLine,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';

// 초기 상태 정의 - 각 컴포넌트의 데이터 통합
const initialState = {
  isLoading: true,
  activeSection: 'home',
  isDarkMode: false,
  blogs: [
    {
      id: 1,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
      tags: ['Business', 'Marketing', 'Growth']
    },
    {
      id: 2,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_2.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
      tags: ['Web', 'Design', 'Development']
    },
    {
      id: 3,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_3.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
      tags: ['Tech', 'SEO', 'Marketing']
    }
  ],
  // Projects.jsx
  projects: [
    {
      id: 1,
      title: `영양제 비교 및 판매 사이트 'PILL LAW'`,
      category: 'Spring Framework, React, CSS, MariaDB',
      deploy: 'AWS, Nodejs, NginX, Ubuntu',
      image: pilllawBackground,
      position: '팀장',
      role: '메인 페이지 및 공통 컴포넌트, 사이트 소개 페이지, 내 정보 및 회원 파트',
      completed: 'March 2025',
      description: '바쁜 현대인들이 건강을 챙길 시간이나 정보를 찾는 부담을 덜어주고자 기획한 프로젝트입니다. 개별 소비자의 건강 상태와 생활 패턴에 필요한 성분의 영양제를 비교하고 배송 시스템을 통합하여 사용자 경험을 향상시켰습니다. 다양한 영양제를 한 곳에서 비교하고 구매할 수 있는 환경을 제공하며, 팔로우와 쪽지 기능을 통해 사용자 간 의사소통을 지원함으로써 건강 관리에 대한 지속적인 관심과 플랫폼의 고정 고객층 형성을 유도했습니다.',
      challenge: "사용자들이 개인 건강에 맞는 영양제를 쉽게 찾고 구매할 수 있는 플랫폼을 개발하는 것이 주요 도전 과제였습니다. 건강 정보와 영양제 정보를 연결하고 사용자 경험을 최적화해야 했습니다.",
      solution: "React와 Spring Framework를 활용해 사용자 맞춤형 영양제 비교 및 판매 알고리즘을 개발했습니다. 사용자의 건강 상태에 따른 적합한 성분의 영양제를 직접 골라 비교하고, 사용자 간 소통을 위한 팔로우와 쪽지 기능을 구현했습니다. 또한 메인 페이지와 공통 컴포넌트를 개발하여 일관된 UI/UX를 제공했습니다.",
      problem: "이메일 인증 로직을 구현하는 과정에서 랜덤 번호 6자리를 생성하여 발송해서 사용자가 입력한 번호와 일치하면 인증이 완료되도록 하고자 했으나, 사용자가 일일이 6자리를 입력하기 귀찮을 뿐더러 랜덤 번호를 생성하는 과정 또한 더 나은 방법이 있지 않을까 고민해 보았습니다.",
      resolve: "번호 입력으로 이메일을 인증하는 방식 대신, 서버 측에서 인증 메일을 발송할 때 랜덤 번호가 아니라 토큰을 만들고 이를 이용하여 인증 전용 url에 토큰을 붙이는 방식을 이용함으로 인하여 사용자는 번호를 입력하는 대신 이메일로 발송된 인증 링크를 클릭하면 인증이 완료되는 방식으로 로직을 개선했습니다.",
      collaboration: "프로젝트 팀장으로서 전체 개발 일정을 관리하고 팀원들의 역할을 조율했습니다. GitHub를 통한 코드 버전 관리와 주간 스프린트 회의를 통해 진행 상황을 공유했습니다. 특히 개발 과정에서 발생하는 전체적인 오류와 버그를 관리하고 해결했습니다.",
      deploymentDetails: "AWS EC2 인스턴스에 배포하고 NginX를 웹 서버 및 리버스 프록시로 사용했습니다. Node.js로 정적 파일을 서빙하고, Ubuntu 환경에서 안정적으로 운영했습니다. 백엔드와 프론트엔드의 빌드 파일을 각각 관리하여 상호 간 충돌이 없도록 관리하고 있습니다.",
      learning: "이 프로젝트를 통해 React와 Spring의 통합 및 RESTful API 설계에 대한 실무 경험을 쌓았습니다. 팀장으로서 프로젝트 관리 능력을 키웠으며, 사용자 중심의 UI/UX 설계의 중요성을 배웠습니다. 특히 클라우드 환경에서의 배포와 운영 경험은 현업에서 많은 도움이 될 것이라 생각합니다.",
      results: "프로젝트 발표에서 높은 평가를 받았으며, 특히 성분별 카테고리 필터링 알고리즘과 직관적인 UI가 호평을 받았습니다. 현업 개발자들로부터 실제 서비스로 발전시킬 만한 가치가 있다는 피드백을 받았으며, 팀 역량 강화와 포트폴리오 향상에 크게 기여했습니다.",
      githubLink: "https://github.com/jungyoonn/pillLaw_backend",
      projectLink: "https://pilllaw.eeerrorcode.com/pilllaw",
      features: [
        {
          title: "사용자 인증 시스템",
          image: `${pilllawSignin}`,
          description: "JWT 기반 인증 시스템으로 안전한 사용자 로그인과 회원가입을 구현했습니다. 소셜 로그인 지원과 권한 기반 접근 제어를 통합했습니다.",
          tech: ["JWT", "Spring Security", "OAuth2"],
          codeSnippet: `public String generateToken(String email) {
    String token = Jwts.builder()
        .issuedAt(new Date())
        .expiration(Date.from(ZonedDateTime.now()
            .plusMonths(1L)
            .toInstant()))
        .signWith(key, ALGORITHM)
        .subject(email)
        .compact();
    
    // 생성된 토큰의 각 부분을 로그로 출력
    String[] parts = token.split("\\.");
    log.info("생성된 토큰 헤더: {}", parts[0]);
    log.info("생성된 토큰 페이로드: {}", parts[1]);
    log.info("생성된 토큰 서명: {}", parts[2]);
    
    return token;
}
    
private Claims parseToken(String token) {
    return Jwts.parser()
      .verifyWith(key)
      .build()
      .parseSignedClaims(token)
      .getPayload();
}
`
        },
        {
          title: "영양제 성분별 필터링 시스템",
          image: `${pilllawCategory}`,
          description: "사용자가 원하는 성분 혹은 해당되는 건강 상태를 선택하여 원하는 카테고리만 포함된 영양제를 필터링하는 기능입니다. 다중 선택 시 선택된 카테고리가 하나라도 해당되면 검색 결과에 포함됩니다.",
          tech: ["React", "Spring Data JPA", "RestAPI"],
          codeSnippet: `{/* 선택된 카테고리 출력 */}
<Row className="my-3">
  <Col>
    <strong>선택된 카테고리:</strong>{" "}
    {selectedCategories && selectedCategories.size > 0 ? (
      [...selectedCategories].map((category, index) => (
        <Badge key={index} bg="primary" className="mx-1">
          {category}
        </Badge>
      ))
    ) : (
      <span className="text-muted">선택된 카테고리가 없습니다.</span>
    )}
  </Col>
</Row>

{categoryType ? (
  <ProductCategoryBioActive 
    data={bio} 
    selectedCategories={selectedCategories} 
    onCategoryChange={onCategoryChange} 
  />
) : (
  <ProductCategoryNutrient 
    data={nutri} 
    selectedCategories={selectedCategories} 
    onCategoryChange={onCategoryChange} 
  />
)}
    `
        },
      ],
      documents: [
        {
          title: "ERD 다이어그램",
          description: "데이터베이스 설계 구조와 테이블 간 관계를 보여주는 ERD 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/PILLLAW_ERD.pdf",
          icon: faDatabase
        },
        {
          title: "요구사항 정의서",
          description: "프로젝트 요구사항 명세와 기능 목록이 담긴 문서입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/PILLLAW_software_requirements.xlsx",
          icon: faFileAlt
        },
        {
          title: "발표 자료",
          description: "프로젝트 최종 발표에 사용된 프레젠테이션 자료입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/PILL+LAW+%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C.pptx",
          icon: faDesktop
        },
        {
          title: "시스템 아키텍쳐 다이어그램",
          description: "프로젝트의 시스템 구조를 한눈에 볼 수 있는 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/PILLLAW_system_architecture.svg",
          icon: faSitemap
        }
      ],
      architecture: {
        diagram: `${pilllawArchitecture}`,
        description: "프로젝트는 React 기반의 SPA 프론트엔드, Spring Boot REST API 백엔드, MySQL 데이터베이스로 구성된 3-티어 아키텍처를 사용했습니다. 이미지 저장에는 AWS S3를, 배포에는 AWS EC2와 NginX, Nodejs를 활용했습니다."
      },
      performance: {
        before: "페이지 로드 시간 4.5초, API 응답 시간 1.2초, Bundle 크기 2.8MB",
        after: "페이지 로드 시간 1.2초, API 응답 시간 0.3초, Bundle 크기 980KB",
        methods: "이미지 지연 로딩 기법을 도입하여 초기 로딩 속도를 개선했습니다. DB 인덱스 추가 및 쿼리 최적화를 통해 API 응답 시간을 단축했으며, 불필요한 라이브러리 제거와 코드 스플리팅을 적용해 번들 크기를 효과적으로 줄였습니다. 또한 정적 자원에 적절한 캐싱 전략을 적용하고 성능 병목 지점을 지속적으로 모니터링하여 사용자 경험을 향상시켰습니다."
      }
    },
    {
      id: 2,
      title: `주변 취미 공유 및 원데이 클래스 추천 커뮤니티 플랫폼 'Cookie'`,
      category: 'Java Servlet, JSP, CSS, Javascript, myBatis, MariaDB',
      deploy: 'AWS, Nodejs, tomcat, Ubuntu',
      image: cookieBackground,
      position: '팀원',
      role: 'DB 설계, 메인 페이지 및 공통 컴포넌트, 회원가입 및 로그인, 원데이 클래스, 리뷰',
      completed: 'December 2024',
      description: '사용자들이 취미를 공유하고 원데이 클래스를 쉽게 접할 수 있는 커뮤니티 플랫폼입니다. 별도의 커뮤니티 게시판을 통해 사용자 간 취미 정보를 교환하고, 다양한 이벤트를 제공하여 사용자 경험을 향상시켰습니다. 취미 공유를 통한 원데이 클래스 활성화와 지속적인 사용자 참여를 유도하는 서비스를 구현했습니다.',
      challenge: "지역 기반 취미 활동과 원데이 클래스를 연결하는 커뮤니티 플랫폼을 구축하는 것이 목표였습니다. 사용자들이 취미를 공유하고 클래스를 쉽게 찾을 수 있는 인터페이스가 필요했습니다.",
      solution: "Java Servlet과 JSP를 활용하여 사용자 중심의 인터페이스를 구현했습니다. 데이터베이스 설계부터 시작해 MyBatis를 통한 효율적인 데이터 접근 계층을 구축했습니다. 특히 메인 페이지와 로그인/회원가입 부분을 담당하여 사용자 경험을 최적화했습니다.",
      problem: "",
      resove: "",
      collaboration: "팀원으로서 데이터베이스 설계와 메인 페이지 개발을 담당했습니다. 팀원들과 Trello를 활용해 작업 진행 상황을 공유하고, 주 2회 코드 리뷰를 통해 품질을 향상시켰습니다. 특히 UI/UX 디자이너와 긴밀히 협력하여 사용자 중심의 인터페이스를 구현했습니다.",
      deploymentDetails: "AWS EC2 인스턴스와 Ubuntu 환경에서 Tomcat 서버를 구성했습니다. Node.js를 활용하여 추가 기능을 구현했으며, 데이터베이스는 MariaDB를 사용했습니다. 서버 모니터링과 로그 관리를 위한 도구를 구축하여 안정적인 운영 환경을 마련했습니다.",
      learning: "JSP와 Servlet 기반의 웹 애플리케이션 개발 경험을 통해 웹의 기본 동작 원리를 깊이 이해하게 되었습니다. 데이터베이스 설계부터 구현까지 전체 과정을 경험하며 데이터 모델링 능력을 향상시켰고, 사용자 인증 및 세션 관리와 같은 보안 관련 지식을 습득했습니다.",
      results: "교육 과정 내 최종 프로젝트 발표에서 우수한 성적을 거두었으며, 특히 지역 기반 취미 커뮤니티라는 아이디어의 독창성과 구현 완성도를 인정받았습니다. 사용자 경험을 중심으로 한 설계 접근법이 좋은 평가를 받았습니다.",
      githubLink: "https://github.com/jungyoonn/cookie",
      projectLink: "https://cookie.eeerrorcode.com/",
      features: [
        {
          title: "지역 기반 클래스 검색 시스템",
          image: "/images/features/map-search.png",
          description: "사용자의 위치를 기반으로 반경 내 원데이 클래스를 검색하고 지도 상에 표시해주는 기능입니다. 거리, 평점, 가격 등의 필터링을 제공합니다.",
          tech: ["Kakao Maps API", "JavaScript", "myBatis", "jQuery"],
          codeSnippet: "const nearbyClasses = await searchClassByLocation(userLocation, radius, { sort: 'rating', categories: selectedCategories });"
        },
        {
          title: "취미 커뮤니티 게시판",
          image: "/images/features/community.png",
          description: "사용자들이 취미 활동에 대한 경험과 정보를 공유할 수 있는 커뮤니티 게시판입니다. 카테고리별 분류와 인기 게시글 하이라이트 기능을 제공합니다.",
          tech: ["Java Servlet", "JSP", "myBatis", "AJAX"],
          codeSnippet: "$.ajax({ url: '/community/posts', type: 'GET', data: { category: selectedCategory, page: currentPage } });"
        }
      ],
      documents: [
        {
          title: "ERD 다이어그램",
          description: "데이터베이스 설계 구조와 테이블 간 관계를 보여주는 ERD 다이어그램입니다.",
          url: "/documents/project-erd.pdf",
          icon: faDatabase
        },
        {
          title: "클래스 예약 시스템 설계서",
          description: "원데이 클래스 예약 및 결제 프로세스의 시스템 설계 문서입니다.",
          url: "/documents/reservation-system.pdf",
          icon: faCodeBranch
        },
        {
          title: "커뮤니티 운영 가이드라인",
          description: "건전한 커뮤니티 문화를 위한 콘텐츠 정책 및 운영 가이드라인입니다.",
          url: "/documents/community-guidelines.pdf",
          icon: faFileAlt
        },
        {
          title: "발표 자료",
          description: "프로젝트 최종 발표에 사용된 프레젠테이션 자료입니다.",
          url: "/documents/presentation.pdf",
          icon: faDesktop
        }
      ],
      architecture: {
        diagram: "/images/architecture-diagram.png",
        description: "프로젝트는 React 기반의 SPA 프론트엔드, Spring Boot REST API 백엔드, MySQL 데이터베이스로 구성된 3-티어 아키텍처를 사용했습니다. 이미지 저장에는 AWS S3를, 배포에는 AWS EC2와 Docker를 활용했습니다."
      },
      performance: {
        before: "페이지 로드 시간 4.5초, API 응답 시간 1.2초, Bundle 크기 2.8MB",
        after: "페이지 로드 시간 1.2초, API 응답 시간 0.3초, Bundle 크기 980KB",
        methods: "이미지 지연 로딩, React.memo와 useMemo를 활용한 렌더링 최적화, DB 인덱스 추가 및 쿼리 최적화, Redis 캐싱 레이어 추가, 코드 스플리팅과 청크 최적화를 통한 번들 크기 감소 등을 구현했습니다."
      }
    },
    {
      id: 3,
      title: 'Java 기반의 키오스크 서비스를 콘솔 출력으로 구현',
      category: 'Java',
      deploy: '',
      image: miniBackground,
      position: '팀원',
      role: '장바구니 담기 및 결제 (일괄 결제와 분할 결제)',
      completed: 'October 2024',
      description: '실생활에서 마주한 기술에 대한 호기심과 프로그래밍 구현방식에 대한 탐구심으로 Java 기반의 키오스크 시스템을 구현했습니다. 상품 출력부터 장바구니 기능, 분할결제와 일괄결제 옵션 등 실제 매장에서 사용되는 기능을 콘솔 환경에서 구현하여 객체지향 프로그래밍의 이해도를 높였습니다.',
      challenge: "콘솔 환경에서 실제 키오스크 시스템의 핵심 기능을 구현하는 것이 과제였습니다. 특히 다양한 결제 방식을 객체지향적으로 설계하는 것이 도전 과제였습니다.",
      solution: "Java의 객체지향 특성을 활용하여 상품, 장바구니, 결제 시스템을 모듈화했습니다. 특히 분할 결제와 일괄 결제라는 두 가지 결제 방식을 전략 패턴을 적용하여 구현했습니다. 사용자 인터페이스는 콘솔 기반이지만 직관적으로 설계하여 사용성을 높였습니다.",
      problem: "",
      resove: "",
      collaboration: "3인 팀에서 결제 시스템 부분을 담당했습니다. 모듈화된 설계를 통해 각자 맡은 파트를 독립적으로 개발하면서도 통합 테스트를 통해 전체 시스템의 일관성을 유지했습니다. 매일 짧은 스탠드업 미팅을 통해 진행 상황과 이슈를 공유했습니다.",
      learning: "객체지향 프로그래밍의 실제 적용과 디자인 패턴 활용 능력을 키웠습니다. 특히 결제 시스템이라는 복잡한 비즈니스 로직을 모듈화하여 구현하는 과정에서 추상화와 인터페이스 설계의 중요성을 깨달았습니다. 또한 팀 프로젝트를 통해 협업 능력과 코드 문서화의 중요성을 배웠습니다.",
      results: "콘솔 환경에서도 실제 키오스크와 유사한 사용자 경험을 제공하는 완성도 높은 시스템을 구현했습니다. 특히 분할 결제 기능은 실제 상용 키오스크에도 적용 가능한 수준으로 개발되었으며, 객체지향 설계 원칙을 잘 적용한 사례로 평가받았습니다.",
      githubLink: "https://github.com/jungyoonn/main1",
      features: [
        {
          title: "결제 전략 패턴 구현",
          image: "/images/features/payment-strategy.png",
          description: "전략 패턴을 활용하여 일괄결제와 분할결제를 유연하게 처리하는 시스템입니다. 결제 방식에 따라 동적으로 알고리즘을 선택하여 실행합니다.",
          tech: ["Java", "Strategy Pattern", "OOP"],
          codeSnippet: "public interface PaymentStrategy { void pay(int amount); } // 일괄결제, 분할결제 클래스가 이 인터페이스를 구현"
        },
        {
          title: "장바구니 관리 시스템",
          image: "/images/features/cart-system.png",
          description: "사용자가 선택한 상품을 장바구니에 추가, 수정, 삭제할 수 있는 기능입니다. 전체 주문 금액 계산과 할인 적용 등의 비즈니스 로직을 처리합니다.",
          tech: ["Java", "Collections Framework", "Observer Pattern"],
          codeSnippet: "Cart cart = new Cart(); cart.addItem(product); cart.applyDiscount(discountType); int totalPrice = cart.calculateTotal();"
        }
      ],
      documents: [
        {
          title: "클래스 다이어그램",
          description: "객체지향 설계에 따른 클래스 구조와 관계를 시각화한 다이어그램입니다.",
          url: "/documents/class-diagram.pdf",
          icon: faSitemap
        },
        {
          title: "사용자 매뉴얼",
          description: "키오스크 시스템 사용 방법과 기능 설명을 담은 사용자 가이드입니다.",
          url: "/documents/user-manual.pdf",
          icon: faFileAlt
        },
        {
          title: "테스트 케이스 문서",
          description: "다양한 시나리오에 따른 테스트 케이스와 결과를 정리한 문서입니다.",
          url: "/documents/test-cases.pdf",
          icon: faDatabase
        }
      ],
      architecture: {
        diagram: "/images/architecture-diagram.png",
        description: "프로젝트는 React 기반의 SPA 프론트엔드, Spring Boot REST API 백엔드, MySQL 데이터베이스로 구성된 3-티어 아키텍처를 사용했습니다. 이미지 저장에는 AWS S3를, 배포에는 AWS EC2와 Docker를 활용했습니다."
      },
      performance: {
        before: "페이지 로드 시간 4.5초, API 응답 시간 1.2초, Bundle 크기 2.8MB",
        after: "페이지 로드 시간 1.2초, API 응답 시간 0.3초, Bundle 크기 980KB",
        methods: "이미지 지연 로딩, React.memo와 useMemo를 활용한 렌더링 최적화, DB 인덱스 추가 및 쿼리 최적화, Redis 캐싱 레이어 추가, 코드 스플리팅과 청크 최적화를 통한 번들 크기 감소 등을 구현했습니다."
      }
    },
    {
      id: 4,
      title: 'Spring Framework 기반의 공지사항 게시판',
      category: 'Spring Framework, JSP, Javascript, CSS, MariaDB',
      deploy: '',
      image: boardBackground,
      position: '개인 프로젝트',
      role: '공지사항 목록과 상세 조회 및 카테고리별 필터링, 글 작성, 수정, 삭제',
      completed: 'March 2024',
      description: '처음 배웠던 Spring Framework를 익히고 활용해 보기 위해서 어떤 걸 만들까 고민하다가 웹 사이트 개발의 가장 기본이라고 생각하는 게시판 기능을 구현해 보았습니다. Spring MVC 구조와 JPA를 활용하여 게시글 CRUD, 카테고리별 필터링 등을 구현하고 CSS를 이용해 간단한 디자인을 적용했습니다. 이론으로 배운 내용을 실제 프로젝트에 적용함으로써 Spring의 핵심 개념과 웹 애플리케이션 개발 과정을 이해할 수 있었습니다.',
      challenge: "Spring Framework의 기본 개념을 실제 애플리케이션에 적용하고 CRUD 기능과 카테고리 필터링이 가능한 게시판을 구현하는 것이 목표였습니다.",
      solution: "Spring MVC 아키텍처를 적용하고 JPA를 활용하여 데이터 접근 계층을 구현했습니다. RESTful API 설계 원칙을 따라 게시판의 CRUD 기능을 구현했으며, 카테고리별 필터링을 위한 쿼리 메소드를 개발했습니다.",
      problem: "",
      resove: "",
      learning: "Spring Framework의 핵심 개념과, 특히 의존성 주입, AOP, 스프링 데이터 JPA와 같은 기술을 실제로 적용해볼 수 있었습니다. 게시판이라는 기본적인 기능을 구현하면서도 확장성과 유지보수성을 고려한 설계의 중요성을 배웠습니다. 또한 개인 프로젝트를 완성하면서 자기주도적 학습 능력과 문제 해결 능력을 키웠습니다.",
      results: "Spring Framework의 핵심 기능을 활용한 기본적이지만 완성도 높은 게시판 시스템을 개발했습니다. 이 프로젝트는 이후 더 복잡한 웹 애플리케이션을 개발하는 기반이 되었으며, Spring 기반 웹 개발의 전체 흐름을 이해하는 데 큰 도움이 되었습니다.",
      githubLink: "https://github.com/jungyoonn/notice",
      features: [
        {
          title: "카테고리별 게시글 필터링",
          image: "/images/features/category-filter.png",
          description: "공지사항을 카테고리별로 분류하고 필터링할 수 있는 기능입니다. 사용자는 원하는 카테고리만 선택하여 볼 수 있습니다.",
          tech: ["Spring MVC", "JPA", "jQuery", "JavaScript"],
          codeSnippet: "public List<Notice> findByCategory(String category) { return noticeRepository.findByCategory(category); }"
        },
        {
          title: "게시글 CRUD 시스템",
          image: "/images/features/crud-system.png",
          description: "관리자가 공지사항을 작성, 수정, 삭제하고 사용자가 조회할 수 있는 기능입니다. RESTful API 설계 원칙을 따라 구현했습니다.",
          tech: ["Spring Boot", "JPA", "RestAPI", "MariaDB"],
          codeSnippet: "@PostMapping(\"/notice\") public ResponseEntity<Notice> createNotice(@RequestBody NoticeDto noticeDto) { ... }"
        }
      ],
      documents: [
        {
          title: "Spring MVC 구조 설계서",
          description: "MVC 패턴에 따른 프로젝트 구조와, 컨트롤러, 서비스, 레포지토리 계층의 설계 문서입니다.",
          url: "/documents/mvc-design.pdf",
          icon: faSitemap
        },
        {
          title: "데이터 접근 계층 설계",
          description: "JPA를 활용한 데이터 접근 계층 설계와 쿼리 최적화 방안을 담은 문서입니다.",
          url: "/documents/data-access.pdf",
          icon: faDatabase
        },
        {
          title: "보안 설정 가이드",
          description: "Spring Security를 활용한 인증 및 권한 관리 설정 가이드입니다.",
          url: "/documents/security-guide.pdf",
          icon: faFileAlt
        }
      ],
      architecture: {
        diagram: "/images/architecture-diagram.png",
        description: "프로젝트는 React 기반의 SPA 프론트엔드, Spring Boot REST API 백엔드, MySQL 데이터베이스로 구성된 3-티어 아키텍처를 사용했습니다. 이미지 저장에는 AWS S3를, 배포에는 AWS EC2와 Docker를 활용했습니다."
      },
      performance: {
        before: "페이지 로드 시간 4.5초, API 응답 시간 1.2초, Bundle 크기 2.8MB",
        after: "페이지 로드 시간 1.2초, API 응답 시간 0.3초, Bundle 크기 980KB",
        methods: "이미지 지연 로딩, React.memo와 useMemo를 활용한 렌더링 최적화, DB 인덱스 추가 및 쿼리 최적화, Redis 캐싱 레이어 추가, 코드 스플리팅과 청크 최적화를 통한 번들 크기 감소 등을 구현했습니다."
      }
    },
    {
      id: 5,
      title: `대학교 졸업 작품 캡스톤 디자인 (정보보안) '공개키 방식을 이용한 상호 인증'`,
      category: 'Linux, Raspberry Pi, C',
      deploy: '',
      image: publicKeyBackground,
      position: '팀원',
      role: '상호 인증 프로토콜 구현 및 보안 모듈 개발',
      completed: 'October 2021',
      description: '정보보안 기술의 핵심인 상호 인증 기능을 구현한 캡스톤 디자인 프로젝트입니다. 두 명의 가상 사용자가 각각의 공개키와 비밀키를 생성하고, Elliptic Curve 방식을 적용하여 암호화 및 복호화 과정을 구현했습니다. Linux 환경에서 개발했으며 Raspberry Pi를 활용해 실제 시스템에 적용 가능한 솔루션을 만들었습니다. 이 프로젝트를 통해 기존 암호화 방식보다 속도가 빠르고 효율적인 Elliptic Curve 암호화의 장점을 경험하고, 계산 능력이 제한적이거나 집적 회로 공간이 제한될 때 특히 유용한 보안 솔루션을 개발했습니다.',
      challenge: "암호화 알고리즘의 실제 구현과 보안 통신의 기초가 되는 상호 인증 시스템을 구축하는 것이 도전 과제였습니다. 효율적인 암호화 방식인 Elliptic Curve 방식을 적용해야 했습니다.",
      solution: "Linux 환경에서 C 언어를 사용하여 Elliptic Curve 암호화 알고리즘을 구현했습니다. 공개키와 비밀키 생성, 암호화, 복호화 과정을 모듈화하여 개발했으며, Raspberry Pi에 실제 구현하여 하드웨어 환경에서 테스트했습니다.",
      problem: "",
      resove: "",
      collaboration: "3인 팀에서 상호 인증 프로토콜 구현을 담당했습니다. 정기적인 미팅을 통해 알고리즘 설계와 구현 방향을 논의했으며, 코드 리뷰를 통해 보안 취약점을 최소화했습니다. 특히 교수님의 피드백을 적극 반영하여 암호화 알고리즘의 안전성을 검증했습니다.",
      learning: "암호화 알고리즘의 이론적 지식을 실제 코드로 구현하는 과정에서 정보보안의 실무적 측면을 배웠습니다. 특히 Elliptic Curve 암호화 방식의 이점과 구현 방법을 이해하게 되었고, 하드웨어 환경에서의 보안 프로그래밍 경험을 쌓았습니다. 또한 팀 프로젝트를 통해 기술 문서 작성과 발표 능력을 향상시켰습니다.",
      results: "학부 졸업 작품으로 우수한 평가를 받았으며, 특히 Elliptic Curve 암호화 방식의 실제 구현과 Raspberry Pi를 활용한 하드웨어 통합이 높은 점수를 받았습니다. 이 프로젝트는 정보보안 분야의 실무적 이해와 암호화 알고리즘 구현 능력을 입증하는 좋은 사례가 되었습니다.",
      features: [
        {
          title: "Elliptic Curve 암호화 구현",
          image: "/images/features/elliptic-curve.png",
          description: "타원곡선 암호화 알고리즘을 C 언어로 구현하여 경량화된 암호화 시스템을 개발했습니다. 기존 RSA 대비 동등한 보안 수준에서 더 짧은 키 길이를 사용합니다.",
          tech: ["C", "Elliptic Curve Cryptography", "Linux"],
          codeSnippet: "struct ECPoint { int x; int y; }; ECPoint multiplyPoint(ECPoint p, int scalar, ECParams params) { ... }"
        },
        {
          title: "상호 인증 프로토콜",
          image: "/images/features/mutual-auth.png",
          description: "두 디바이스 간의 안전한 통신을 위한 상호 인증 프로토콜을 구현했습니다. 중간자 공격을 방지하고 통신의 무결성을 보장합니다.",
          tech: ["C", "Raspberry Pi", "Security Protocols"],
          codeSnippet: "bool authenticateDevice(Device *device, PublicKey pubKey, PrivateKey privKey) { ... }"
        }
      ],
      documents: [
        {
          title: "암호화 알고리즘 설계서",
          description: "Elliptic Curve 암호화 알고리즘의 수학적 원리와 구현 방식을 설명한 문서입니다.",
          url: "/documents/crypto-design.pdf",
          icon: faFileAlt
        },
        {
          title: "보안 취약점 분석 보고서",
          description: "구현된 시스템의 잠재적 보안 취약점 분석과 대응 방안을 담은 보고서입니다.",
          url: "/documents/security-analysis.pdf",
          icon: faCodeBranch
        },
        {
          title: "하드웨어 구성도",
          description: "Raspberry Pi를 활용한 시스템 구성과 하드웨어 연결 다이어그램입니다.",
          url: "/documents/hardware-config.pdf",
          icon: faDesktop
        }
      ],
      architecture: {
        diagram: "/images/architecture-diagram.png",
        description: "프로젝트는 React 기반의 SPA 프론트엔드, Spring Boot REST API 백엔드, MySQL 데이터베이스로 구성된 3-티어 아키텍처를 사용했습니다. 이미지 저장에는 AWS S3를, 배포에는 AWS EC2와 Docker를 활용했습니다."
      },
      performance: {
        before: "페이지 로드 시간 4.5초, API 응답 시간 1.2초, Bundle 크기 2.8MB",
        after: "페이지 로드 시간 1.2초, API 응답 시간 0.3초, Bundle 크기 980KB",
        methods: "이미지 지연 로딩, React.memo와 useMemo를 활용한 렌더링 최적화, DB 인덱스 추가 및 쿼리 최적화, Redis 캐싱 레이어 추가, 코드 스플리팅과 청크 최적화를 통한 번들 크기 감소 등을 구현했습니다."
      }
    },
    {
      id: 6,
      title: '배송지 거리별로 배달비가 달라지는 분식 가게 배달 API',
      category: 'C++',
      image: deliveryBackground,
      position: '대학교 조별 과제',
      role: '지역별, 거리별 배달비 책정 시스템 구현',
      completed: '2019년 2학기',
      description: '대학교 프로그래밍 수업의 일환으로 C++을 활용하여 배달 서비스 API를 구현한 프로젝트입니다. 배송지와 가게 간의 거리를 계산하여 거리별로 차등화된 배달비를 산정하는 알고리즘을 개발했습니다. 지역 코드와 실제 거리 데이터를 매핑하고, 사용자 주문 정보에 따라 자동으로 배달비를 계산하는 시스템을 구축했습니다. 이 프로젝트를 통해 알고리즘 설계 능력을 향상시키고, 실제 비즈니스 로직을 프로그래밍으로 구현하는 경험을 쌓았습니다.',
      challenge: "지역과 거리에 따른 배달비 차등 계산 알고리즘을 설계하고 구현하는 것이 주요 과제였습니다. 복잡한 비즈니스 로직을 프로그래밍으로 구현해야 했습니다.",
      solution: "C++의 객체지향 특성을 활용해 지역 코드와 거리 데이터를 관리하는 클래스를 설계했습니다. 거리 계산 알고리즘과 배달비 책정 로직을 분리하여 구현했으며, 사용자 주문 정보에 따라 자동으로 배달비를 계산하는 시스템을 개발했습니다.",
      problem: "",
      resove: "",
      collaboration: "4인 조별 과제에서 거리별 배달비 책정 시스템을 담당했습니다. 팀원들과 함께 요구사항을 분석하고 클래스 다이어그램을 작성하여 전체 시스템 구조를 설계했습니다. 각자 맡은 모듈을 개발한 후 통합하는 과정에서 발생한 인터페이스 불일치 문제를 해결하기 위해 적극적으로 소통했습니다.",
      learning: "C++ 언어의 객체지향적 특성을 활용한 프로그래밍 능력을 향상시켰습니다. 실제 비즈니스 로직을 코드로 구현하는 과정에서 요구사항 분석과 알고리즘 설계 능력을 키웠습니다. 또한 조별 과제를 통해 코드 통합과 버전 관리의 기초를 배웠으며, 이는 후속 프로젝트에서 큰 도움이 되었습니다.",
      results: "프로그래밍 기초 과목에서 높은 평가를 받았으며, 특히 실제 비즈니스 로직을 프로그래밍으로 구현한 접근 방식이 인정받았습니다. 이 프로젝트는 C++ 언어의 기본 문법을 넘어 실제 문제 해결에 적용하는 능력을 키우는 중요한 경험이 되었습니다.",
      githubLink: "https://github.com/jungyoonn/C-Assignment-Project",
      features: [
        {
          title: "거리 기반 배달비 계산 알고리즘",
          image: "/images/features/distance-calc.png",
          description: "출발지와 도착지 사이의 거리를 계산하고 구간별로 차등화된 배달비를 산정하는 알고리즘입니다. 지역 코드를 활용한 최적화된 계산 방식을 적용했습니다.",
          tech: ["C++", "STL", "Algorithm Design"],
          codeSnippet: "float calculateDeliveryFee(int originCode, int destCode) { float distance = distanceMap[originCode][destCode]; return applyFeeByZone(distance); }"
        },
        {
          title: "지역 코드 매핑 시스템",
          image: "/images/features/region-mapping.png",
          description: "지역별 코드와 실제 거리 데이터를 매핑하는 시스템입니다. 데이터 구조를 최적화하여 빠른 검색과 변환을 가능하게 합니다.",
          tech: ["C++", "Data Structures", "Mapping Algorithms"],
          codeSnippet: "class RegionMapper { private: std::unordered_map<int, Region> regionMap; public: Region getRegionByCode(int code); }"
        }
      ],
      documents: [
        {
          title: "알고리즘 설계서",
          description: "거리 계산 및 배달비 산정 알고리즘의 설계 원리와 의사코드를 담은 문서입니다.",
          url: "/documents/algorithm-design.pdf",
          icon: faCodeBranch
        },
        {
          title: "클래스 구조도",
          description: "객체지향 설계에 따른 C++ 클래스 구조와 상속 관계를 정리한 문서입니다.",
          url: "/documents/class-structure.pdf",
          icon: faSitemap
        },
        {
          title: "성능 테스트 보고서",
          description: "다양한 입력 데이터와 규모에 따른 알고리즘 성능 테스트 결과를 분석한 보고서입니다.",
          url: "/documents/performance-test.pdf",
          icon: faChartLine
        }
      ],
      architecture: {
        diagram: "/images/architecture-diagram.png",
        description: "프로젝트는 React 기반의 SPA 프론트엔드, Spring Boot REST API 백엔드, MySQL 데이터베이스로 구성된 3-티어 아키텍처를 사용했습니다. 이미지 저장에는 AWS S3를, 배포에는 AWS EC2와 Docker를 활용했습니다."
      },
      performance: {
        before: "페이지 로드 시간 4.5초, API 응답 시간 1.2초, Bundle 크기 2.8MB",
        after: "페이지 로드 시간 1.2초, API 응답 시간 0.3초, Bundle 크기 980KB",
        methods: "이미지 지연 로딩, React.memo와 useMemo를 활용한 렌더링 최적화, DB 인덱스 추가 및 쿼리 최적화, Redis 캐싱 레이어 추가, 코드 스플리팅과 청크 최적화를 통한 번들 크기 감소 등을 구현했습니다."
      }
    }
  ],
  // DeveloperJourney.jsx
  journeyEvents: [
    {
      id: 1,
      date: '2018',
      title: '정보통신공학과 입학',
      description: 'C++을 활용한 배달 서비스 API 구현 프로젝트와 정보보안(암호화) 주제의 캡스톤 디자인 등 다양한 조별 과제에 참여하며 이론적 기반을 다지고 기초 기술을 익혔습니다.',
      iconType: 'code',
      technologies: ['C', 'C++', 'Linux', '객체지향 프로그래밍', '알고리즘 설계', 'Elliptic Curve 암호화'],
    },
    {
      id: 2,
      date: '2022',
      title: '대학교 졸업 후 첫 회사 입사',
      description: '졸업 후 교육 기관에서 3개월 훈련을 거쳐 첫 회사에 입사해서 클라우드 엔지니어로서 프로젝트 초기 설계 및 분석 단계에 참여하여 클라우드 환경으로의 마이그레이션, AS-IS 기능 분석 및 TO-BE 기능 설계, 요구사항 정의, 화면 설계 등 이해관계자와의 커뮤니케이션 능력과 설계/분석 능력을 키웠습니다.',
      iconType: 'graduationCap',
      technologies: ['Solution Architecture 훈련', '요구사항 분석', '화면 설계', '커뮤니케이션', '클라우드 인프라'],
    },
    {
      id: 3,
      date: '2023 ~ 2024 상반기',
      title: '백엔드 개발 시작, 첫 걸음',
      description: '프로젝트의 기획/설계에서 더 나아가 개발 단계까지, 전반적인 프로세스에 관심이 생겨 퇴사 후 자격증 준비와 동시에 JAVA, Spring Framework를 학습하고 첫 번째 공지사항 게시판 애플리케이션을 개발하며 웹 개발의 기초를 다졌습니다.',
      iconType: 'server',
      technologies: ['정보처리기사', 'JAVA', 'Spring Framework', 'JSP', 'MariaDB', 'RESTful API', '독학'],
    },
    {
      id: 4,
      date: '2024 하반기 ~ 2025.03',
      title: '객체지향 프로그래밍 전문성, 풀스택 웹 개발',
      description: '독학에 한계를 느낌과 동시에 더 넓은 세상으로 나아가고자 교육 기관에서 두 번째 훈련을 시작하고, 그 과정에서 자격증 준비와 더불어 총 세 개의 프로젝트에 참여해 설계부터 배포까지, 훈련생들과 함께 개발하며 객체지향 설계 패턴과 다양하고 복잡한 로직을 구현했습니다.',
      iconType: 'code',
      technologies: ['SQLD', 'Java Servlet', 'Javascript', 'myBatis', '객체지향 설계 패턴', '콘솔 애플리케이션', 'CSS', 'React', 'AWS', 'RESTful', 'Ubuntu', 'NginX', 'Nodejs'],
    },
    {
      id: 5,
      date: '2025.04 ~ ',
      title: '지속적인 학습',
      description: '교육 과정 수료 후 현재는 클라우드 기술, 모바일 개발, 현대적인 프론트엔드 프레임워크에 대한 지식을 확장하고 있습니다.',
      iconType: 'mobileAlt',
      technologies: ['React Native', 'Docker', 'Kubernetes', 'CI/CD', 'Kotlin'],
    },
  ],
  // Skills.jsx
  skills: [
    { 
      name: 'HTML', 
      value: 97, 
      leftStyle: { transform: 'rotate(169.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' }
    },
    { 
      name: 'C', 
      value: 95, 
      leftStyle: { transform: 'rotate(162deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Spring', 
      value: 92, 
      leftStyle: { transform: 'rotate(151.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'JPA, JPQL', 
      value: 92, 
      leftStyle: { transform: 'rotate(151.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'CSS', 
      value: 91, 
      leftStyle: { transform: 'rotate(147.6deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Nodejs', 
      value: 90, 
      leftStyle: { transform: 'rotate(144deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Javascript', 
      value: 89, 
      leftStyle: { transform: 'rotate(140.4deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'jQuery', 
      value: 89, 
      leftStyle: { transform: 'rotate(140.4deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'MyBatis', 
      value: 88, 
      leftStyle: { transform: 'rotate(136.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Servlet', 
      value: 88, 
      leftStyle: { transform: 'rotate(136.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'C++', 
      value: 88, 
      leftStyle: { transform: 'rotate(136.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'JSP', 
      value: 88, 
      leftStyle: { transform: 'rotate(136.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'SQL', 
      value: 87, 
      leftStyle: { transform: 'rotate(133.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Java', 
      value: 85, 
      leftStyle: { transform: 'rotate(126deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Ubuntu', 
      value: 85, 
      leftStyle: { transform: 'rotate(126deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'AWS', 
      value: 82, 
      leftStyle: { transform: 'rotate(115.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'React', 
      value: 80, 
      leftStyle: { transform: 'rotate(108deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'NginX', 
      value: 79, 
      leftStyle: { transform: 'rotate(104.4deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Mustache', 
      value: 76, 
      leftStyle: { transform: 'rotate(93.6deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'NoSQL', 
      value: 72, 
      leftStyle: { transform: 'rotate(79.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Kotlin', 
      value: 71, 
      leftStyle: { transform: 'rotate(75.6deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Querydsl', 
      value: 70, 
      leftStyle: { transform: 'rotate(72deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'C#', 
      value: 68, 
      leftStyle: { transform: 'rotate(64.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Thymeleaf', 
      value: 69, 
      leftStyle: { transform: 'rotate(68.4deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    }
  ],
  // Services.jsx
  services: [
    {
      iconType: 'faCode',
      title: "웹 애플리케이션 개발",
      description: "React, HTML, CSS, JavaScript를 활용한 반응형 웹 사이트 및 애플리케이션 개발"
    },
    {
      iconType: 'faServer',
      title: "백엔드 시스템 구축",
      description: "Spring Framework, Java를 활용한 안정적이고 확장 가능한 서버 시스템 구현"
    },
    {
      iconType: 'faDatabase',
      title: "데이터베이스 설계",
      description: "SQL, JPA, MyBatis를 활용한 효율적인 데이터베이스 모델링 및 쿼리 최적화"
    },
    {
      iconType: 'faCloud',
      title: "클라우드 인프라 구축",
      description: "AWS, Ubuntu, NginX를 활용한 확장 가능한 클라우드 환경 설정 및 배포"
    },
    {
      iconType: 'faExchangeAlt',
      title: "API 개발 및 통합",
      description: "RESTful API 설계 및 개발, 외부 시스템과의 효율적인 데이터 통합"
    },
    {
      iconType: 'faMobileAlt',
      title: "반응형 웹 구현",
      description: "다양한 디바이스와 화면 크기에 최적화된, 사용자 중심의 직관적이고 매력적인 반응형 웹 인터페이스 설계 및 구현"
    },
    {
      iconType: 'faSitemap',
      title: "프로젝트 기획 및 설계",
      description: "요구사항 분석, 기능 정의, 화면 설계 등 프로젝트의 초기 단계 기획 지원"
    },
    {
      iconType: 'faTools',
      title: "시스템 유지 보수",
      description: "기존 시스템의 성능 최적화, 버그 수정 및 새로운 기능 추가"
    }
  ],
  // Portfolio.jsx
  portfolios: [
    {
      id: 1,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_1.jpg'
    },
    {
      id: 2,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_2.jpg'
    },
    {
      id: 3,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_3.jpg'
    }
  ]
};

// 리듀서 정의
const siteReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    case 'ADD_BLOG':
      return { ...state, blogs: [...state.blogs, action.payload] };
    case 'UPDATE_BLOG':
      return {
        ...state,
        blogs: state.blogs.map(blog =>
          blog.id === action.payload.id ? { ...blog, ...action.payload } : blog
        )
      };
    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog.id !== action.payload)
      };
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id ? { ...project, ...action.payload } : project
        )
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload)
      };
    default:
      return state;
  }
};

// Context 생성
const SiteContext = createContext();

// Context Provider 컴포넌트
export const SiteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(siteReducer, initialState);

  // 다크 모드 상태가 변경될 때 body 클래스에 적용
  useEffect(() => {
    if (state.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [state.isDarkMode]);

  // 페이지 로드 시 로딩 상태 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // 스크롤 시 액티브 섹션 결정
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        dispatch({ type: 'SET_ACTIVE_SECTION', payload: sectionId });
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 초기 실행
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // 블로그 관련 함수들
  const getBlogById = useCallback((id) => {
    return state.blogs.find(blog => blog.id === parseInt(id));
  }, [state.blogs]);

  // 프로젝트 관련 함수들
  const getProjectById = useCallback((id) => {
    return state.projects.find(project => project.id === parseInt(id));
  }, [state.projects]);

  // Context 값
  const contextValue = {
    state,
    dispatch,
    getBlogById,
    getProjectById
  };

  return (
    <SiteContext.Provider value={contextValue}>
      {children}
    </SiteContext.Provider>
  );
};

// Context를 사용하기 위한 커스텀 훅
export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};