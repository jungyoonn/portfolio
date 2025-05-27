import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import lottomateBackground from '../img/lottomate_index.png';
import pilllawBackground from '../img/PILLLAW.jpg';
import cookieBackground from '../img/cookie.jpg';
import boardBackground from '../img/board_project.png';
import miniBackground from '../img/mini_project.png';
import publicKeyBackground from '../img/elliptic_1.png';
import publicKeyDecrypt from '../img/elliptic_curve.png';
import publicKeyAuth from '../img/elliptic_authenticate.png';
import publicKeyArchitecture from '../img/ecc-authentication-diagram.svg'
import deliveryBackground from '../img/first_project.png';
import deliveryDistance from '../img/first_project_1.png'
import deliveryOrder from '../img/first_project_2.png'
import deliveryArchitecture from '../img/delivery-system-architecture.svg'
import pilllawSignin from "../img/PILLLAW_Signin.jpg";
import pilllawCategory from "../img/PILLLAW_Category.jpg";
import pilllawArchitecture from "../img/PILLLAW_system_architecture.svg";
import cookieOneday from '../img/cookie_oneday.png'
import cookieCommunity from '../img/cookie_community.png'
import cookieArchitecture from '../img/cookie-architecture.svg'
import kioskArchitecture from '../img/kiosk-architecture.svg'
import kioskPay from '../img/kiosk_pay.png'
import kioskCart from '../img/kiosk_cart.png'
import boardArchitecture from '../img/board-architecture.svg'
import boardList from '../img/board_list.png'
import boardWrite from '../img/board_write.png'
import lottomateArchitecture from '../img/lottomate_systemarchitecture.svg';
import { 
  faDatabase, 
  faDesktop, 
  // faCodeBranch, 
  faFileAlt,
  // faChartLine,
  faSitemap,
  faPencilRuler
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
      title: `동행복권 구매 대행 서비스 'LottoMate'`,
      category: 'Spring Framework, React, AWS Aurora RDS, Docker, CI/CD',
      deploy: 'AWS, Docker, GitHub Actions, Aurora RDS, NginX',
      image: lottomateBackground,
      position: '팀원',
      role: '초기 기획 및 설계, 전반적인 프론트엔드 디자인 및 컴포넌트 설계, 백엔드 CI/CD 파이프라인 구성, 인프라 구축, 구독과 결제',
      completed: '개발 진행 중 (2025.04 ~ )',
      description: '동행복권 구매의 불편함을 해소하고 데이터 기반의 인사이트를 제공하는 온라인 구매 대행 서비스입니다. 사용자는 직접 번호를 선택하거나 시스템이 추천하는 번호로 복권을 구매할 수 있으며, 역대 당첨 번호 분석을 통한 통계 정보와 각 번호의 출현 빈도를 제공합니다. 구독 기반의 정기 구매 서비스를 통해 주 1~3회 자동 구매가 가능하며, 당첨 결과 자동 확인 및 알림 기능을 제공합니다. Docker와 GitHub Actions을 활용한 CI/CD 파이프라인으로 개발부터 배포까지 완전 자동화된 DevOps 환경을 구축했으며, AWS Aurora RDS를 통해 대용량 당첨 데이터 처리와 확장 가능한 서비스 아키텍처를 구현했습니다. 현재 핵심 기능인 복권 구매, 당첨 조회, 데이터 분석 기능이 완료되었으며, 구독 서비스와 결제 시스템 고도화 작업을 진행 중입니다.',
      challenge: "복권 구매의 물리적 제약과 당첨 확률에 대한 정보 부족 문제를 해결하고, 사용자가 편리하게 복권을 관리할 수 있는 플랫폼을 구축하는 것이 목표였습니다. 특히 20년 이상의 역대 당첨 데이터를 효율적으로 처리하고, 정기 구매 스케줄링, 실시간 당첨 확인 등 복잡한 비즈니스 로직을 안정적으로 구현해야 했습니다.",
      solution: "현대적인 클라우드 네이티브 아키텍처와 마이크로서비스 지향적 설계를 적용했습니다. 프론트엔드는 React로 사용자 친화적인 SPA를 구현하고, 백엔드는 Spring Boot로 RESTful API를 설계했습니다. 프론트엔드와 백엔드를 독립적인 도메인으로 분리하여 개발하고, Docker 컨테이너화를 통해 배포 환경의 일관성을 확보했습니다. GitHub Actions을 활용한 CI/CD 파이프라인으로 코드 푸시부터 배포까지 완전 자동화했으며, AWS Aurora RDS를 통해 확장 가능한 데이터베이스 환경을 구축했습니다.",
      problem: "개발 초기 단계에서 대용량 당첨 데이터 처리 시 성능 저하 문제가 발생했습니다. 20년치 당첨 번호 데이터를 조회할 때 초기 로딩 시간이 5초 이상 소요되었고, CI/CD 파이프라인 구성 과정에서 Docker 컨테이너 간 환경 변수 관리와 네트워크 설정에 어려움을 겪었습니다. 또한 프론트엔드와 백엔드의 도메인 분리 과정에서 CORS 이슈와 쿠키/세션 관리 문제가 발생했습니다.",
      resolve: "데이터베이스 성능 최적화를 위해 당첨 번호 테이블에 복합 인덱스를 생성하고, Spring Boot의 JPA 캐싱 기능을 활용하여 자주 조회되는 데이터를 메모리에 캐싱했습니다. CI/CD 파이프라인에서는 Docker Compose를 활용해 환경 변수를 체계적으로 관리하고, GitHub Secrets를 통해 민감한 정보를 안전하게 처리했습니다. 도메인 분리 이슈는 Spring Security의 CORS 설정을 상세히 구성하고, JWT 기반 인증으로 세션 의존성을 제거하여 해결했습니다. 이러한 최적화를 통해 데이터 조회 시간을 1초 이내로 단축하고 배포 안정성을 크게 향상시켰습니다.",
      collaboration: "팀원으로서 초기 기획 단계부터 참여하여 서비스 아이디어 구체화와 기술 스택 선정에 기여했습니다. 프론트엔드 개발과 인프라 구축을 주로 담당하면서 팀원들과 Discord와 GitHub을 통해 지속적으로 소통했습니다. 주 2회 온라인 회의를 통해 진행 상황을 공유하고, 각자 담당 파트의 이슈와 해결 방안을 논의했습니다. 특히 CI/CD 파이프라인 구축과 AWS 인프라 설정 과정에서 팀원들에게 기술 가이드를 제공하고, 코드 리뷰를 통해 프로젝트 품질 향상에 기여했습니다.",
      deploymentDetails: "AWS EC2 인스턴스에 Docker 컨테이너로 배포하고, NginX를 리버스 프록시 및 정적 파일 서버로 구성했습니다. 프론트엔드(lottomate.eeerrorcode.com)와 백엔드 API(lottomateapi.eeerrorcode.com)를 독립적인 도메인으로 분리하여 서비스하고 있습니다. GitHub Actions을 통한 자동 배포 파이프라인으로 main 브랜치 푸시 시 Docker Hub에 이미지를 빌드하고 EC2 인스턴스에 자동 배포됩니다. SSL 인증서를 적용하여 HTTPS 통신을 보장하고, 데이터베이스는 AWS Aurora RDS의 자동 백업과 스케일링 기능을 활용하고 있습니다.",
      learning: "팀 프로젝트를 통해 협업 기반의 클라우드 네이티브 개발 경험을 쌓을 수 있었습니다. 팀원들과 함께 Docker 컨테이너화, GitHub Actions을 통한 CI/CD 파이프라인 구축, AWS 클라우드 서비스 활용 등 현대적인 개발 및 배포 기술을 학습하고 적용했습니다. 프론트엔드 개발을 주도하면서 사용자 경험 최적화와 컴포넌트 설계에 대한 깊은 이해를 얻었고, 인프라 구축 과정에서 DevOps 실무 역량을 크게 향상시켰습니다. 또한 팀원들과의 기술 공유와 코드 리뷰를 통해 다양한 관점에서 문제를 해결하는 능력을 기를 수 있었습니다.",
      results: "팀원으로서 담당한 프론트엔드와 인프라 부분이 성공적으로 구현되어 현재 70% 완성도에 도달했습니다. 구축한 CI/CD 파이프라인을 통해 팀 전체의 개발 효율성이 크게 향상되었고, Docker 컨테이너화로 모든 팀원이 일관된 개발 환경에서 작업할 수 있게 되었습니다. 프론트엔드 컴포넌트 설계와 사용자 인터페이스 최적화를 통해 직관적이고 사용하기 쉬운 서비스를 구현했으며, AWS 인프라 구축으로 확장 가능하고 안정적인 서비스 기반을 마련했습니다. 현재 팀원들과 함께 베타 테스트를 진행하며 사용자 피드백을 수집하고 있고, 완성 후 실제 서비스 런칭을 목표로 하고 있습니다.",
      githubLink: "https://github.com/jungyoonn/lotto_mate_backend", 
      projectLink: "https://lottomate.eeerrorcode.com/",
      features: [
        {
          title: "복권 번호 생성 및 구매 시스템",
          image: `${pilllawSignin}`, // 실제 이미지 변수로 교체 필요
          description: "사용자가 직접 번호를 선택하거나 시스템이 랜덤으로 생성한 번호로 복권을 구매할 수 있는 기능입니다. 당첨 확률 기반 추천 알고리즘을 통해 통계적으로 유리한 번호 조합을 제안합니다.",
          tech: ["React", "Spring Boot", "JPA", "알고리즘"],
          codeSnippet: `@Service
public class LottoNumberService {
    
    @Autowired
    private WinningNumberRepository winningNumberRepository;
    
    // 랜덤 번호 생성
    public List<Integer> generateRandomNumbers() {
        Set<Integer> numbers = new HashSet<>();
        Random random = new Random();
        
        while (numbers.size() < 6) {
            numbers.add(random.nextInt(45) + 1);
        }
        
        return numbers.stream()
                      .sorted()
                      .collect(Collectors.toList());
    }
    
    // 통계 기반 추천 번호 생성
    public List<Integer> generateRecommendedNumbers() {
        // 최근 100회 당첨 번호 분석
        List<WinningNumber> recentWinnings = 
            winningNumberRepository.findTop100ByOrderByDrawDateDesc();
        
        Map<Integer, Long> frequencyMap = recentWinnings.stream()
            .flatMap(w -> w.getNumbers().stream())
            .collect(Collectors.groupingBy(
                Function.identity(), 
                Collectors.counting()
            ));
        
        // 빈도가 적은 번호 우선 선택 (확률론적 접근)
        return frequencyMap.entrySet().stream()
            .sorted(Map.Entry.comparingByValue())
            .limit(6)
            .map(Map.Entry::getKey)
            .sorted()
            .collect(Collectors.toList());
    }
}`
        },
        {
          title: "당첨 번호 조회 및 통계 분석",
          image: `${pilllawSignin}`, // 실제 이미지 변수로 교체 필요
          description: "역대 당첨 번호 데이터를 기반으로 각 번호의 출현 빈도, 연속 출현 패턴, 홀짝 비율 등 다양한 통계 정보를 제공합니다. 동행복권 사이트에서 크롤링한 실시간 데이터를 활용합니다.",
          tech: ["React", "Chart.js", "Spring Boot", "Web Crawling"],
          codeSnippet: `// React 컴포넌트 - 통계 차트
const StatisticsChart = () => {
  const [frequencyData, setFrequencyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('/api/statistics/frequency');
        setFrequencyData(response.data);
      } catch (error) {
        console.error('통계 데이터 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  const chartData = {
    labels: frequencyData.map(item => \`\${item.number}번\`),
    datasets: [{
      label: '출현 빈도',
      data: frequencyData.map(item => item.frequency),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  if (loading) return <div>로딩 중...</div>;

  return (
    <div className="statistics-container">
      <h3>번호별 출현 빈도 분석</h3>
      <Bar data={chartData} options={{
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: '최근 100회 당첨 번호 분석' }
        }
      }} />
    </div>
  );
};`
        },
      ],
      documents: [
        {
          title: "ERD 다이어그램",
          description: "데이터베이스 설계 구조와 테이블 간 관계를 보여주는 ERD 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/lottomate_erd.pdf",
          icon: faDatabase
        },
        {
          title: "API 문서 (Swagger-UI)",
          description: "복권 구매, 당첨 조회, 구독 관리 등 모든 REST API의 상세 명세서입니다.",
          url: "https://lottomateapi.eeerrorcode.com/swagger-ui/index.html",
          icon: faFileAlt
        },
        {
          title: "시스템 아키텍쳐 다이어그램",
          description: "프로젝트의 시스템 구조를 한눈에 볼 수 있는 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/lottomate_systemarchitecture.svg",
          icon: faSitemap
        }
      ],
      architecture: {
        diagram: `${lottomateArchitecture}`,
        description: "LottoMate는 클라우드 네이티브 아키텍처와 현대적인 DevOps 방법론을 적용한 동행복권 구매 대행 서비스입니다. 프론트엔드와 백엔드를 분리하여 개발하고 각각 독립적인 CI/CD 파이프라인을 구축했습니다. 단일 EC2 인스턴스에서 NginX를 통해 React 앱을 서빙하고, Spring Boot API 서버와 통신하는 구조로 설계했습니다. 데이터베이스는 AWS Aurora RDS(MariaDB 호환)를 사용하여 확장성과 안정성을 확보했으며, Docker 컨테이너화를 통해 배포 환경의 일관성을 보장했습니다. GitHub Actions를 활용한 자동 배포 시스템으로 main 브랜치 푸시 시 Docker Hub를 거쳐 EC2 인스턴스에 자동으로 배포되는 완전 자동화된 파이프라인을 구현했습니다. 외부 서비스로는 동행복권 공식 사이트에서 당첨 데이터를 크롤링하고, 포트원과 토스페이먼츠를 연동하여 안전한 결제 시스템을 구축했습니다."
      },
      // performance: {
      //   before: "페이지 로드 시간 4.5초, API 응답 시간 1.2초, Bundle 크기 2.8MB",
      //   after: "페이지 로드 시간 1.2초, API 응답 시간 0.3초, Bundle 크기 980KB",
      //   methods: "이미지 지연 로딩 기법을 도입하여 초기 로딩 속도를 개선했습니다. DB 인덱스 추가 및 쿼리 최적화를 통해 API 응답 시간을 단축했으며, 불필요한 라이브러리 제거와 코드 스플리팅을 적용해 번들 크기를 효과적으로 줄였습니다. 또한 정적 자원에 적절한 캐싱 전략을 적용하고 성능 병목 지점을 지속적으로 모니터링하여 사용자 경험을 향상시켰습니다."
      // }
    },
    {
      id: 2,
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
        description: "프로젝트는 React 기반의 SPA 프론트엔드와 Spring Framework REST API 백엔드, MariaDB 데이터베이스로 구성된 3-티어 아키텍처를 사용했습니다. 백엔드와 프론트엔드를 분리하여 개발하고 각각의 빌드 파일을 별도로 관리했습니다. 이미지 관리는 AWS S3을 활용했고, 배포에는 AWS EC2(Ubuntu)와 NginX, Nodejs를 활용하여 안정적인 서비스 환경을 구축했습니다."
      },
      performance: {
        before: "페이지 로드 시간 4.5초, API 응답 시간 1.2초, Bundle 크기 2.8MB",
        after: "페이지 로드 시간 1.2초, API 응답 시간 0.3초, Bundle 크기 980KB",
        methods: "이미지 지연 로딩 기법을 도입하여 초기 로딩 속도를 개선했습니다. DB 인덱스 추가 및 쿼리 최적화를 통해 API 응답 시간을 단축했으며, 불필요한 라이브러리 제거와 코드 스플리팅을 적용해 번들 크기를 효과적으로 줄였습니다. 또한 정적 자원에 적절한 캐싱 전략을 적용하고 성능 병목 지점을 지속적으로 모니터링하여 사용자 경험을 향상시켰습니다."
      }
    },
    {
      id: 3,
      title: `주변 취미 공유 및 원데이 클래스 추천 커뮤니티 플랫폼 'Cookie'`,
      category: 'Java Servlet, JSP, CSS, Javascript, myBatis, MariaDB',
      deploy: 'AWS, Nodejs, tomcat, Ubuntu',
      image: cookieBackground,
      position: '팀원',
      role: 'DB 설계, 메인 페이지 및 공통 컴포넌트, 회원가입 및 로그인, 원데이 클래스, 리뷰 파트',
      completed: 'December 2024',
      description: '사용자들이 취미를 공유하고 원데이 클래스를 쉽게 접할 수 있는 커뮤니티 플랫폼입니다. 별도의 커뮤니티 게시판을 통해 사용자 간 취미 정보를 교환하고, 다양한 이벤트를 제공하여 사용자 경험을 향상시켰습니다. 취미 공유를 통한 원데이 클래스 활성화와 지속적인 사용자 참여를 유도하는 서비스를 구현했습니다.',
      challenge: "지역 기반 취미 활동과 원데이 클래스를 연결하는 커뮤니티 플랫폼을 구축하는 것이 목표였습니다. 사용자들이 취미를 공유하고 클래스를 쉽게 찾을 수 있는 인터페이스가 필요했습니다.",
      solution: "Java Servlet과 JSP를 활용하여 사용자 중심의 인터페이스를 구현했습니다. 데이터베이스 설계부터 시작해 MyBatis를 통한 효율적인 데이터 접근 계층을 구축했습니다. 특히 메인 페이지와 로그인/회원가입, 원데이 클래스와 리뷰 부분을 담당하여 사용자가 원데이 클래스를 신청하고 참여하게 하여 취미 활동에 도움을 주고, 리뷰를 남기고 커뮤니티 게시판에서 관련 정보를 공유하며 원데이 클래스에 대한 관심이 높아지게 했습니다.",
      problem: "원데이 클래스 목록 페이지에서 최신순/인기순 정렬 로직을 구현하던 시점에서 정렬 버튼을 클릭하면 페이지가 다시 로딩되면서 데이터 또한 재 로딩되어 딜레이가 많이 체감되었습니다.",
      resolve: "이런 현상은 사용자 경험 최적화에 맞지 않다고 생각해서 해결점을 찾던 중 비동기 방식의 ajax를 알게 되어, 이를 공부하고 적용하여 데이터가 재 로딩 되며 페이지가 새로고침 되는 것 같이 보이는 현상을 해결했습니다.",
      collaboration: "팀원으로서 데이터베이스 설계와 메인 페이지, 회원가입/로그인, 원데이 클래스, 리뷰 파트 개발을 담당했습니다. 팀원들과 Discord를 활용해 작업 진행 상황을 공유하고, 주 2회 코드 리뷰를 통해 품질을 향상시켰습니다. 특히 UI/UX 설계 과정에서 팀원들과의 지속적인 소통과 적극적인 피드백으로 사용자 중심의 인터페이스를 구현했습니다.",
      deploymentDetails: "AWS EC2 인스턴스와 Ubuntu 환경에서 NginX를 리버스 프록시로 설정하고 Tomcat 서버를 구성했습니다. NginX는 정적 파일 서빙과 요청 라우팅을 담당하고, Tomcat은 JSP와 서블릿 처리를 맡았습니다. Nodejs를 활용하여 추가 기능을 구현했으며, 데이터베이스는 MariaDB를 사용했습니다. 전체 시스템을 체계적으로 구성하여 안정적이고 확장 가능한 서비스 환경을 마련했습니다.",
      learning: "JSP와 Servlet 기반의 웹 애플리케이션 개발 경험을 통해 웹의 기본 동작 원리를 깊이 이해하게 되었습니다. 데이터베이스 설계부터 구현까지 전체 과정을 경험하며 데이터 모델링 능력을 향상시켰고, 사용자 인증 및 세션 관리와 같은 보안 관련 지식을 습득했습니다. 특히 비동기 처리 방식을 공부하고 활용하면서 백엔드의 데이터를 json 형식으로 주고받는 것이 편리하다는 것을 배웠습니다.",
      results: "교육 과정 내 최종 프로젝트 발표에서 우수한 성적을 거두었으며, 특히 지역 기반 취미 커뮤니티라는 아이디어의 독창성과 구현 완성도를 인정받았습니다. 사용자 경험을 중심으로 한 설계 접근법이 좋은 평가를 받았습니다.",
      githubLink: "https://github.com/jungyoonn/cookie",
      projectLink: "https://cookie.eeerrorcode.com/",
      features: [
        {
          title: "클래스 검색 및 조회 시스템",
          image: `${cookieOneday}`,
          description: "전체 원데이 클래스 조회 기능과 사용자가 관심 있는 키워드로 원데이 클래스를 검색하면 해당 키워드가 포함된 클래스가 필터링되는 기능입니다. 최신순과 인기순 정렬이 가능하며, 평점, 조회수, 메인 썸네일 등의 기본 정보를 제공합니다.",
          tech: ["ajax", "Javascript", "myBatis", "jQuery"],
          codeSnippet: `const boardClassService = (function() {
  function sortCbno(cp, cri, param, callback) {
  let url = "oneday/list/api"
  url = cp + url;
  
  if(cri) {
    if(cri.keyword) {
      
    }
  }
      if(param && param.cbno) { 
    url += "/cbno/" + param.cbno;
  }
  if(param && param.viewCount) {
    url += "/vc/" + param.viewCount;
  }

  $.ajax({
    url,
    data : cri
  }).done(function(data) {
          if(callback) callback(data);
      });
  
  }
  
  return {sortCbno};
})();

$(".latest-list").click(function() {
  event.preventDefault();
  $(this).hasClass("fw-bold") ? '' : $(this).addClass("fw-bold");
  $(".trend-list").removeClass("fw-bold");
  
  const cbno = 99999999;
  
  $(".show-lists").html("");
  list(cri, {cbno});
  
  $(".show-lists > div .stars").html(scoreStr($(".show-lists > div").data("cbno")));
});

// 인기순
$(".trend-list").click(function() {
  event.preventDefault();
  $(this).hasClass("fw-bold") ? '' : $(this).addClass("fw-bold");
  $(".latest-list").removeClass("fw-bold");
  
  const viewCount = 99999999;
  
  $(".show-lists").html("");
  list(cri, {viewCount});
});
`
        },
        {
          title: "취미 커뮤니티 게시판",
          image: `${cookieCommunity}`,
          description: "사용자들이 취미 활동에 대한 경험과 정보를 공유할 수 있는 커뮤니티 게시판입니다. 카테고리별 분류와 인기 게시글 하이라이트 기능을 제공합니다.",
          tech: ["Java Servlet", "JSP", "myBatis", "jstl"],
          codeSnippet: `<c:forEach items="\${listLikes}" var="like">
<tr >
    <td class="text-center bg-cookie"><i class="fa-solid fa-fire text-danger"></i> </td>
    <td class="text-left bg-cookie"><span class="badge bg-secondary ">인기</span> <a href="view?pno=\${like.pno}&\${pageDto.cri.qs2}">\${like.title}</a></td>
    <td class="text-center bg-cookie">\${like.writer}</td>
    <td class="text-center bg-cookie">\${like.regdate}</td>
    <td class="text-center bg-cookie">\${like.viewCount}</td>
</tr>

</c:forEach>



<c:forEach items="\${boards}" var="b">

<tr>
    <td class="text-center">\${b.pno}</td>
    <td class="text-left"><a href="view?pno=\${b.pno}&\${pageDto.cri.qs2}" class="text-cookie-secondary text-decoration-none ">\${b.title}</a></td>
    <td class="text-center">\${b.writer}</td>
    <td class="text-center">\${b.regdate}</td>
    <td class="text-center">\${b.viewCount}</td>
</tr>
</c:forEach>
`
        }
      ],
      documents: [
        {
          title: "ERD 다이어그램",
          description: "데이터베이스 설계 구조와 테이블 간 관계를 보여주는 ERD 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/cookie_ERD.pdf",
          icon: faDatabase
        },
        {
          title: "요구사항 정의서",
          description: "프로젝트 요구사항 명세와 기능 목록이 담긴 문서입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/cookie_software_requirements.xlsx",
          icon: faFileAlt
        },
        {
          title: "화면 설계서",
          description: "UI/UX와 기능을 연결한 화면 설계 자료입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/cookie_%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%EC%84%9C.pptx",
          icon: faPencilRuler
        },
        {
          title: "발표 자료",
          description: "프로젝트 최종 발표에 사용된 프레젠테이션 자료입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/cookie+%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C.pptx",
          icon: faDesktop
        }
      ],
      architecture: {
        diagram: `${cookieArchitecture}`,
        description: "프로젝트는 JSP 기반의 프론트엔드와 Java Servlet 백엔드가 단일 Maven 프로젝트로 통합된 모놀리식 아키텍처를 사용했습니다. 데이터 접근 계층으로는 MyBatis를 활용했으며, MariaDB 데이터베이스를 사용했습니다. 배포에는 AWS EC2(Ubuntu)와 NginX, Nodejs를 활용하여 안정적인 서비스 환경을 구축했습니다."
      },
      performance: {
        before: "페이지 초기 로딩 시간 3.8초, AJAX 요청 응답 시간 750ms, DOM 렌더링 완료 시간 2.2초",
        after: "페이지 초기 로딩 시간 1.6초, AJAX 요청 응답 시간 230ms, DOM 렌더링 완료 시간 0.9초",
        methods: "이미지 지연 로딩, jQuery 선택자 최적화, myBatis 쿼리 튜닝, 서버 사이드 캐싱 구현, CSS/JS 파일 압축 및 병합, JSP 페이지 조각화를 통한 부분 로딩 적용 등의 기법으로 성능을 개선했습니다."
      },
    },
    {
      id: 4,
      title: 'Java 기반의 키오스크 서비스를 콘솔 출력으로 구현',
      category: 'Java, Singleton Pattern',
      deploy: '',
      image: miniBackground,
      position: '팀원',
      role: '장바구니 담기, 담긴 상품 갯수 추가/삭제 및 결제 (일괄 결제와 분할 결제)',
      completed: 'October 2024',
      description: '실생활에서 마주한 기술에 대한 호기심과 프로그래밍 구현방식에 대한 탐구심으로 Java 기반의 키오스크 시스템을 구현했습니다. 상품 출력부터 장바구니 기능, 분할결제와 일괄결제 옵션, 관리자 모드 등 실제 매장에서 사용되는 기능을 콘솔 환경에서 구현하여 객체지향 프로그래밍의 이해도를 높였습니다.',
      challenge: "콘솔 환경에서 실제 키오스크 시스템의 핵심 기능을 구현하는 것이 과제였습니다. 특히 다양한 결제 방식을 객체지향적으로 설계하는 것이 도전 과제였습니다.",
      solution: "Java의 객체지향 특성을 활용하여 상품, 장바구니, 결제 시스템을 모듈화했습니다. 특히 분할 결제와 일괄 결제라는 두 가지 결제 방식을 전략 패턴을 적용하여 구현했습니다. 사용자 인터페이스는 콘솔 기반이지만 알아보기 쉽게 직관적으로 설계하여 사용성을 높였습니다.",
      problem: "팀원들이 독립적으로 만든 각 모듈을 통합하여 테스트를 진행할 때 서비스 간 참조 오류가 생기고, 반복적인 참조를 할 경우에 인스턴스가 새로 생성되면서 기존에 상품이 담겨 있던 장바구니가 초기화되거나 상품 담기/삭제 로직이 적용되지 않는 등의 문제가 발생하였습니다.",
      resolve: "인스턴스 참조 오류의 근본적인 이유를 찾아 해결하고자 방법을 모색하던 중, 디자인 패턴의 하나인 싱글톤 패턴을 알게 되었습니다. 이후 싱글톤 패턴에 대해 찾아보고 공부하여 이를 통합 테스트 시 적용해 보았더니 인스턴스 상호 참조 오류 이슈가 해결되었습니다.",
      collaboration: "3인 팀에서 장바구니 및 결제 시스템 부분을 담당했습니다. 모듈화된 설계를 통해 각자 맡은 파트를 독립적으로 개발하면서도 통합 테스트를 통해 전체 시스템의 일관성을 유지했습니다. 매일 짧은 스탠드업 미팅을 통해 진행 상황과 이슈를 공유했습니다.",
      learning: "객체지향 프로그래밍의 실제 적용과 디자인 패턴 활용 능력을 키웠습니다. 특히 결제 시스템이라는 복잡한 비즈니스 로직을 모듈화하여 구현하는 과정에서 추상화와 인터페이스 설계의 중요성을 깨달았습니다. 또한 팀 프로젝트를 통해 협업 능력과 코드 문서화의 중요성을 배웠습니다.",
      results: "콘솔 환경에서도 실제 키오스크와 유사한 사용자 경험을 제공하는 완성도 높은 시스템을 구현했습니다. 특히 분할 결제 기능은 실제 상용 키오스크에도 적용 가능한 수준으로 개발되었으며, 객체지향 설계 원칙을 잘 적용한 사례로 평가받았습니다.",
      githubLink: "https://github.com/jungyoonn/main1",
      features: [
        {
          title: "결제 전략 패턴 구현",
          image: `${kioskPay}`,
          description: "메모리 절약을 위해, 인스턴스가 필요할 때 똑같은 인스턴스를 새로 만들지 않고 기존의 인스턴스를 가져와 활용하는 싱글톤 패턴을 활용하여 일괄결제와 분할결제를 유연하게 처리하는 시스템입니다. 결제 방식에 따라 동적으로 알고리즘을 선택하여 실행합니다.",
          tech: ["Java", "Singleton Pattern", "OOP"],
          codeSnippet: `/**
  *  결제 진행
  * @param total - 최종 결제 금액
  * @param bag - 장바구니 리스트
  */
public void pay(int total, List<Product> bag) {
    int pay = Utils.next("1. 분할 결제  2. 일괄 결제  3. 결제 취소"
            , Integer.class, i -> i > 0 && i < 4, "입력 오류입니다 다시 시도해 주세요");
    if(pay == 1) {
        int cnt = Utils.next("인원 수를 입력해 주세요"
                , Integer.class, i -> i > 1, "2명 이상의 인원 수를 입력해 주세요");
        System.out.println("1인당 결제할 금액은 " + format.format(total / cnt) + "원입니다");
        paySuccess(bag);
    } else if(pay == 2) {
        paySuccess(bag);
    } else {
        System.out.println("! 결제 취소 ! 메뉴판으로 돌아갑니다");
        productService.printProducts();
    }
}

/**
 * 결제 완료 및 내역 저장
 * @param bag - 장바구니 리스트
 */
public void paySuccess(List<Product> bag) {
    buy = new ArrayList<>(bag);

    setOrderLists();
    Order order = orders.get(orders.size()-1);

    System.out.println("총 " + format.format(order.getTotalPrice())
            + "원 결제가 완료되었습니다 :: 주문 번호 [" + order.getOrderNum() + "]");

    orderService.cleanBag();
}
`
        },
        {
          title: "장바구니 관리 시스템",
          image: `${kioskCart}`,
          description: "마찬가지로 싱글톤 패턴을 활용하여 사용자가 선택한 상품을 장바구니에 추가, 수정, 삭제할 수 있는 기능입니다. 전체 주문 금액 계산과 결제 진행 가능 여부 등의 비즈니스 로직을 처리합니다.",
          tech: ["Java", "Singleton Pattern", "OOP"],
          codeSnippet: `/**
  *  메뉴 담기
  */
public void pickMenu() {
    Product p;
    while (true) {
        int id = Utils.next("담을 메뉴를 골라 주세요 (주문을 완료하려면 0을 누르세요)"
                , Integer.class, i -> findById(i) != null || i == 0, "잘못된 입력입니다.");
        if(id == 0) {
            System.out.println("주문을 완료합니다");
            break;
        }
        p = findById(id);

        int cnt = Utils.next("담을 갯수를 입력해 주세요 (뒤로 가기: 0)"
                , Integer.class, i -> i >= 0, "유효한 갯수를 입력해 주세요");
        if(cnt == 0) {
            System.out.println("메뉴 선택으로 돌아갑니다");
            continue;
        }

        p.setAmount(p.getAmount() + cnt);
        System.out.println(p.getProductName() + " 상품을 " + cnt + "개 담았습니다");
        bag = findByAmount();
        productService.save(products);

        // 총 주문 금액
        for(Product pro : products) {
            if(id == pro.getProductId()) {
                total += pro.getPrice() * cnt;
            }
        }
    }
}

/**
 *  장바구니 목록 조회
 */
public void printBag() {
    bag = findByAmount();

    System.out.println("========== 장바구니 ==========");
    System.out.println("   No.\t  상품명\t  갯수  ");
    for(Product p : bag) {
        System.out.printf("%5d  %5s  %3d개\n", p.getProductId(), p.getProductName(), p.getAmount());
    }
    System.out.println("============================");
    System.out.println("총 " + format.format(total) + "원");
    System.out.println("============================");
}

/**
 *  장바구니 목록 삭제
 */
public void removeProduct() {
    if(bag.isEmpty()) {
        System.out.println("장바구니가 비어 있습니다");
        return;
    }

    Product product = findById(Utils.next("삭제할 메뉴의 번호를 입력하세요"
            , Integer.class, i -> findById(i) != null && findById(i).getAmount() != 0
            , "잘못된 상품 번호 혹은 목록에 없는 상품입니다 다시 시도해 주세요"));
    int cnt = Utils.next("삭제할 개수를 입력하세요"
            , Integer.class, i -> i <= product.getAmount() && i > 0
            , "삭제할 개수가 0개 혹은 담긴 개수보다 많습니다");
    int rm = Utils.next("해당 상품을 삭제하시겠습니까? (1. 예  / 2. 아니오)"
            , Integer.class, i -> i < 3 && i > 0
            , "오류가 발생했습니다 다시 시도해 주세요");
    if(rm == 1){
        System.out.println(product.getProductName() + " 상품 " + cnt + "개 삭제를 완료했습니다");
        product.setAmount(product.getAmount() - cnt);
        total = total - product.getPrice() * cnt;
    } else if(rm == 2){
        System.out.println("장바구니 목록으로 돌아갑니다");
    }

    productService.save(products);
    bag = findByAmount();
    printBag();
}

/**
 *  주문 금액 확인 및 결제 진행 여부 판단
 */
public void setOrder() {
    PayService payService = PayService.getInstance();
    if(bag.isEmpty()) {
        System.out.println("장바구니가 비어 있습니다");
        return;
    }

    for(Product p : bag) {
        System.out.printf("[%5s %d개] ", p.getProductName(), p.getAmount());
    }
    System.out.println();
    System.out.println("총 주문 금액은 " + format.format(total) + "원입니다");
    int goPay = Utils.next("결제를 진행하시겠습니까? (1. 예  / 2. 아니오)"
            , Integer.class, i -> i > 0 && i < 3
            , "예 또는 아니오만 입력해 주세요");
    if(goPay == 1) {
        payService.pay(total, bag);
    } else if(goPay == 2) {
        System.out.println("주문을 취소합니다 메뉴판으로 돌아갑니다");
        System.out.println(products);
    }
}`
        }
      ],
      documents: [
        {
          title: "발표 자료",
          description: "프로젝트 최종 발표에 사용된 프레젠테이션 자료입니다. 프로젝트 개발 과정, 주요 기능 및 시연 영상이 포함되어 있습니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/kiosk_%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C.pptx",
          icon: faDesktop
        },
        {
          title: "시스템 아키텍쳐 다이어그램",
          description: "프로젝트의 시스템 구조를 한눈에 볼 수 있는 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/kiosk-architecture.svg",
          icon: faSitemap
        }
      ],
      architecture: {
        diagram: `${kioskArchitecture}`,
        description: "프로젝트는 Java 기반의 콘솔 애플리케이션으로, 객체지향 설계 원칙에 따라 UI 계층, 서비스 계층, 모델 계층으로 구성된 3-티어 아키텍처를 사용했습니다. 디자인 패턴으로는 서비스 클래스들에 싱글톤 패턴을 적용하여 인스턴스 참조 오류를 해결하고, 결제 시스템에 전략 패턴을 도입하여 일괄 결제와 분할 결제를 유연하게 처리할 수 있도록 구현했습니다."
      },
      performance: {
        before: "메뉴 출력 시간 1.2초, 주문 처리 시간 0.8초, 결제 처리 지연 0.9초",
        after: "메뉴 출력 시간 0.3초, 주문 처리 시간 0.2초, 결제 처리 지연 0.3초",
        methods: "싱글톤 패턴 도입으로 불필요한 객체 생성 방지 및 데이터 일관성 유지, 상품 조회 및 장바구니 관리 로직 최적화, 사용자 입력 검증 과정 간소화, 결제 프로세스의 전략 패턴 적용을 통한 응답 시간 단축을 구현했습니다."
      },
    },
    {
      id: 5,
      title: 'Spring Framework 기반의 공지사항 게시판',
      category: 'Spring Framework, JSP, Javascript, CSS, MariaDB',
      deploy: '',
      image: boardBackground,
      position: '개인 프로젝트',
      role: '공지사항 목록과 상세 조회 및 카테고리별 필터링, 글 작성, 수정, 삭제',
      completed: 'March 2024',
      description: '처음 배웠던 Spring Framework를 제대로 익히고 활용해 보기 위해서 어떤 걸 만들까 고민하다가 웹 사이트 개발의 가장 기본이라고 생각하는 게시판 기능을 구현해 보았습니다. Spring MVC 구조와 JPA를 활용하여 게시글 CRUD, 카테고리별 필터링 등을 구현하고 CSS를 이용해 간단한 디자인을 적용했습니다. 이론으로 배운 내용을 실제 프로젝트에 적용함으로써 Spring의 핵심 개념과 웹 애플리케이션 개발 과정을 이해할 수 있었습니다.',
      challenge: "Spring Framework의 기본 개념을 실제 애플리케이션에 적용하고 CRUD 기능과 카테고리 필터링이 가능한 게시판을 구현하는 것이 목표였습니다.",
      solution: "Spring MVC 아키텍처를 적용하고 JPA를 활용하여 데이터 접근 계층을 구현했습니다. 이후 JSP에 CSS를 적용해서 UI를 만들고 JSTL을 이용해 데이터를 화면에 보여 줌으로써 게시판의 CRUD 기능을 구현했으며, 카테고리별 필터링을 위한 쿼리 메소드를 개발했습니다.",
      problem: "Spring이라는 프레임워크를 처음 사용해 봐서 전체적인 구현 과정에서 많은 어려움을 겪었습니다. 특히 카테고리 필터링 부분이 까다로웠는데, 백엔드에서 프론트엔드로 데이터를 전달하는 것은 순조로웠으나 프론트엔드에서 백엔드로의 데이터(선택된 카테고리) 전달에서 구현에 시간이 많이 걸렸습니다.",
      resolve: "컨트롤러에서 필터링된 데이터만을 전달하는 모델을 하나 더 선언하고, 필터링 전용 dto를 만든 다음 서비스 로직에서 데이터를 필터링하는 메서드를 작성하여 프론트엔드와 연결하는 방식으로 해결했습니다.",
      learning: "Spring Framework의 핵심 개념과, 특히 의존성 주입, lombok, 스프링 데이터 JPA와 같은 기술을 실제로 적용해볼 수 있었습니다. 게시판이라는 기본적인 기능을 구현하면서도 확장성과 유지보수성을 고려한 설계의 중요성을 배웠습니다. 또한 개인 프로젝트를 완성하면서 자기주도적 학습 능력과 문제 해결 능력을 키웠습니다.",
      results: "Spring Framework의 핵심 기능을 활용한 기본적이지만 구조적이고 확장이 용이한 게시판 시스템을 개발했습니다. 이 프로젝트는 이후 더 복잡한 웹 애플리케이션을 개발하는 기반이 되었으며, Spring 기반 웹 개발의 전체 흐름을 이해하는 데 큰 도움이 되었습니다.",
      githubLink: "https://github.com/jungyoonn/notice",
      features: [
        {
          title: "카테고리별 게시글 필터링",
          image: `${boardList}`,
          description: "공지사항을 카테고리별로 분류하고 필터링할 수 있는 기능입니다. 백엔드에서 게시글을 필터링해서 프론트엔드로 가져오므로 사용자는 원하는 카테고리만 선택하여 볼 수 있습니다.",
          tech: ["Spring MVC", "JPA", "JSP", "Javascript"],
          codeSnippet: `// backend - service 
  public Page<BoardDto.SearchResult> list(BoardDto.Search search, Pageable pageable){
    Page<Board> result = null;

    if(search.getType() != null){
        result = boardRepository.findByType(search.getType(), pageable);
    } else {
        result = boardRepository.findAll(pageable);
    }
    return result.map(data -> data.toSearchResultDto());
}

// JSP   
<form class="searchForm" name="searchForm" method="get" action="/board/main">
    <select name="type" id="type" onchange="this.form.submit()">
        <option value="">전체</option>
        <c:forEach var="boardTypes" items="\${boardTypeList}" varStatus="status">
            <option value="\${boardTypes.val}" <c:if test="\${search.type == boardTypes.val}"> selected</c:if>>\${boardTypes.name}</option>
        </c:forEach>
    </select>
</form>`
        },
        {
          title: "게시글 CRUD 시스템",
          image: `${boardWrite}`,
          description: "관리자가 공지사항을 작성, 수정, 삭제하고 사용자가 조회할 수 있는 기능입니다. 게시글을 수정/삭제할 시 옳은 비밀번호(등록 시 입력했던 비밀번호)를 입력해야 다음 로직이 처리됩니다. RESTful API 설계 원칙을 따라 구현했습니다.",
          tech: ["Spring Boot", "JPA", "JSP", "MariaDB", "Javascript"],
          codeSnippet: `// 등록
<form id="newNotification" name="newNotification" method="post" oninput="boardApp.maxLength()" action="/board/save">
  <div class="board-write">
      <div class="title">
          <dl>
              <dt>제목</dt>
              <dd>
                  <input type="text" name="title" id="title" maxlength="20" placeholder="제목을 입력해 주세요"/>
                  <p class="required-alert" style="margin: 0; color: red; display: none;">필수입력입니다.</p>
                  <p class="title-max-alert" style="margin: 0; color: red; display: none;">제목은 20자를 넘을 수 없습니다.</p>
              </dd>
          </dl>
          <dl>
              <dt>말머리</dt>
              <dd>
                  <select name="type">
                      <c:forEach var="boardTypes" items="\${boardTypeList}" varStatus="status">
                          <option value="\${boardTypes.val}">\${boardTypes.name}</option>
                      </c:forEach>
                  </select>
              </dd>
          </dl>
      </div>
      <div class="info">
          <dl>
              <dt>작성자</dt>
              <dd>
                  <input type="text" name="name" id="name" maxlength="10" placeholder="작성자"/>
                  <p class="required-alert" style="margin: 0; color: red; display: none;">필수입력입니다.</p>
                  <p class="name-max-alert" style="margin: 0; color: red; display: none;">이름은 10자를 넘을 수 없습니다.</p>
              </dd>
          </dl>
          <dl>
              <dt>비밀번호</dt>
              <dd>
                  <input type="password" name="password" id="password" placeholder="비밀번호를 입력하세요"/>
                  <p class="required-alert" style="margin: 0; color: red; display: none;">필수입력입니다.</p>
              </dd>
          </dl>
      </div>
      <div class="cont">
          <textarea name="contents" id="contents" placeholder="내용을 입력해 주세요"></textarea>
      </div>
  </div>
  <div class="btn-wrap">
      <button type="button" onclick="boardApp.create(event, 0)" class="btn-on">등록</button>
      <a href="/board/main">취소</a>
  </div>
</form>

// 수정/조회/삭제
<form id="updateNotification" method="post" oninput="boardApp.maxLength()" action="/board/update">
  <div class="board-write">
      <div class="title">
          <dl>
              <dt>제목</dt>
              <dd>
                  <input type="text" id="id" maxlength="20" name="id" hidden="hidden" value="<c:out value="\${detailDto.id}"/>"/>
                  <input type="text" name="title" id="title" value="<c:out value="\${detailDto.title}"/>"/>
                  <p class="required-alert" style="margin: 0; color: red; display: none;">필수입력입니다.</p>
                  <p class="title-max-alert" style="margin: 0; color: red; display: none;">제목은 20자를 넘을 수 없습니다.</p>
              </dd>
          </dl>
          <dl>
              <dt>말머리</dt>
              <dd>
                  <select name="type">
                      <c:forEach var="boardTypes" items="\${boardTypeList}" varStatus="status">
                          <option value="\${boardTypes.val}" <c:if test="\${detailDto.type == boardTypes.val}"> selected</c:if>>\${boardTypes.name}</option>
                      </c:forEach>
                  </select>
              </dd>
          </dl>
      </div>
      <div class="info">
          <dl>
              <dt>작성자</dt>
              <dd>
                  <input type="text" maxlength="10" name="name" id="name" value="<c:out value="\${detailDto.name}"/>"/>
                  <p class="required-alert" style="margin: 0; color: red; display: none;">필수입력입니다.</p>
                  <p class="name-max-alert" style="margin: 0; color: red; display: none;">이름은 10자를 넘을 수 없습니다.</p>
              </dd>
          </dl>
          <dl>
              <dt>비밀번호</dt>
              <dd>
                  <input type="password" name="password" id="password" data-pw="\${detailDto.password}" placeholder="비밀번호를 입력하세요"/>
                  <p class="required-alert" style="margin: 0; color: red; display: none;">필수입력입니다.</p>
                  <p class="password-alert" style="margin: 0; color: red; display: none;">비밀번호를 확인해주세요.</p>
              </dd>
          </dl>
      </div>
      <div class="cont">
          <textarea id="contents" name="contents"><c:out value="\${detailDto.contents}"/></textarea>
      </div>
  </div>
  <div class="btn-wrap">
      <button type="button" onclick="boardApp.update(event, \${detailDto.id})" class="btn-on">수정</button>
      <a href="/board/detail?id=\${detailDto.id}">취소</a>
      <button type="button" onclick="boardApp.delete(event, \${detailDto.id})" style="background: #777777">삭제</button>
  </div>
</form>

Message.confirm("수정하시겠습니까?")
  .then(() => {
    let data = BoardData.of(id, e.target.parentElement.parentElement);
    fetch("/board/update", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
  .then((response) =>{
    if(!response.ok){
        throw response.json();
    }
    return response.json()
  })
  .then(() => Message.alert("수정되었습니다."))
  .catch((error) => {
    console.log(error);
    //error.then(e => Message.alert(Object.values(e.errors)));
  }).then(() => location.href="/board/main");
  
  Message.confirm("삭제하시겠습니까?")
    .then(() =>
    fetch(\`/board/delete?id=\${id}\`))
    .then((response) => {
      if(!response.ok){
        throw response.json();
      }
      return response.json()
    })
    .then(() => Message.alert("삭제되었습니다."))
    .catch((error) => {
      //error.then(e => Message.alert(Object.values(e.errors)))
      console.log(error)
    }).then(() => location.href="/board/main");`
        }
      ],
      documents: [
        {
          title: "Spring MVC 구조 설계서",
          description: "MVC 패턴에 따른 프로젝트 구조와, 컨트롤러, 서비스, 레포지토리 계층의 설계 문서입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/board_Spring+MVC+%EA%B5%AC%EC%A1%B0+%EC%84%A4%EA%B3%84%EC%84%9C.pdf",
          icon: faFileAlt
        },
        {
          title: "데이터 접근 계층 설계",
          description: "JPA를 활용한 데이터 접근 계층 설계와 쿼리 최적화 방안을 담은 문서입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/board_%EB%8D%B0%EC%9D%B4%ED%84%B0+%EC%A0%91%EA%B7%BC+%EA%B3%84%EC%B8%B5+%EC%84%A4%EA%B3%84.pdf",
          icon: faDatabase
        },
        {
          title: "시스템 아키텍쳐 다이어그램",
          description: "프로젝트의 시스템 구조를 한눈에 볼 수 있는 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/board-architecture.svg",
          icon: faSitemap
        }
      ],
      architecture: {
        diagram: `${boardArchitecture}`,
        description: "프로젝트는 Spring Framework를 기반으로 한 MVC 아키텍처를 사용했습니다. 프레젠테이션 계층은 JSP와 JavaScript, CSS로 구현하고, 컨트롤러 계층에서 클라이언트 요청을 처리합니다. 서비스 계층에서는 게시판의 핵심 비즈니스 로직을 담당하며, 데이터 접근 계층에서는 Spring Data JPA를 활용하여 MariaDB와 통신합니다. DTO와 엔티티를 명확히 분리하여 계층 간 데이터 전달을 효율적으로 처리하고, JSTL을 이용해 서버 측 데이터를 화면에 표시했습니다."
      },
      performance: {
        before: "페이지 로드 시간 2.3초, API 응답 시간 850ms, 데이터베이스 조회 시간 650ms",
        after: "페이지 로드 시간 0.9초, API 응답 시간 320ms, 데이터베이스 조회 시간 180ms",
        methods: "Spring Data JPA의 쿼리 메소드 최적화, 필요한 컬럼만 선택적으로 조회하는 프로젝션 적용, 불필요한 N+1 쿼리 제거, 인덱스 추가 및 DB 구조 최적화, 서비스 계층 로직 개선을 통한 불필요한 조회 감소 등을 적용했습니다."
      }
    },
    {
      id: 6,
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
      problem: "Elliptic Curve 암호화 구현 과정에서 여러 기술적 어려움에 직면했습니다. 특히 유한체에서의 타원곡선 연산을 최적화하는 과정이 복잡했고, 키 교환 프로토콜 구현 시 메모리 제한적인 Raspberry Pi 환경에서 성능 저하 문제가 발생했습니다. 또한 중간자 공격(MITM)에 대한 취약점을 발견했는데, 이는 인증서 검증 과정에서의 로직 오류 때문이었습니다.",
      resolve: "성능 최적화를 위해 Montgomery ladder 알고리즘을 도입하여 타원곡선 연산 속도를 개선했습니다. Raspberry Pi의 자원 제약을 고려해 메모리 사용량을 줄이는 코드 리팩토링을 진행했으며, 특히 큰 정수 연산을 위한 자체 라이브러리를 경량화했습니다. 중간자 공격 취약점은 인증서 체인 검증 로직을 개선하고 타임스탬프 기반의 challenge-response 메커니즘을 추가하여 해결했습니다. 이러한 과정을 통해 보안성과 성능이 모두 향상된 상호 인증 시스템을 구현할 수 있었습니다.",
      collaboration: "3인 팀에서 상호 인증 프로토콜 구현을 담당했습니다. 정기적인 미팅을 통해 알고리즘 설계와 구현 방향을 논의했으며, 코드 리뷰를 통해 보안 취약점을 최소화했습니다. 특히 교수님의 피드백을 적극 반영하여 암호화 알고리즘의 안전성을 검증했습니다.",
      learning: "암호화 알고리즘의 이론적 지식을 실제 코드로 구현하는 과정에서 정보보안의 실무적 측면을 배웠습니다. 특히 Elliptic Curve 암호화 방식의 이점과 구현 방법을 이해하게 되었고, 하드웨어 환경에서의 보안 프로그래밍 경험을 쌓았습니다. 또한 팀 프로젝트를 통해 기술 문서 작성과 발표 능력을 향상시켰습니다.",
      results: "학부 졸업 작품으로 우수한 평가를 받았으며, 특히 Elliptic Curve 암호화 방식의 실제 구현과 Raspberry Pi를 활용한 하드웨어 통합이 높은 점수를 받았습니다. 이 프로젝트는 정보보안 분야의 실무적 이해와 암호화 알고리즘 구현 능력을 입증하는 좋은 사례가 되었습니다.",
      features: [
        {
          title: "Elliptic Curve 암호화 구현",
          image: `${publicKeyDecrypt}`,
          description: "타원곡선 암호화 알고리즘을 C 언어로 구현하여 경량화된 암호화 시스템을 개발했습니다. 기존 RSA 대비 동등한 보안 수준에서 더 짧은 키 길이를 사용합니다.",
          tech: ["C", "Elliptic Curve Cryptography", "Linux", "encrypt"],
          codeSnippet: `struct ECPoint { 
    unsigned long x; 
    unsigned long y; 
    bool isInfinity;
}; 

ECPoint multiplyPoint(ECPoint p, unsigned long scalar, ECParams params) {
    ECPoint result = {0, 0, true}; // 무한대 점으로 초기화
    ECPoint addend = p;
    
    while (scalar > 0) {
        if (scalar & 1) { // 이진수에서 1인 비트에 대해
            result = ecPointAdd(result, addend, params);
        }
        addend = ecPointDouble(addend, params);
        scalar >>= 1;
    }
    
    return result;
}`
        },
        {
          title: "상호 인증 프로토콜",
          image: `${publicKeyAuth}`,
          description: "두 디바이스 간의 안전한 통신을 위한 상호 인증 프로토콜을 구현했습니다. 중간자 공격을 방지하고 통신의 무결성을 보장합니다.",
          tech: ["C", "Raspberry Pi", "Elliptic Curve Cryptography", "decrypt"],
          codeSnippet: `bool authenticateDevice(Device *device, ECPoint pubKey, ECPrivKey privKey) {
    // 1. 난수 생성
    unsigned char challenge[32];
    generateSecureRandom(challenge, sizeof(challenge));
    
    // 2. 챌린지 전송
    sendChallenge(device, challenge, sizeof(challenge));
    
    // 3. 서명된 응답 수신
    unsigned char signature[64];
    receiveSignature(device, signature, sizeof(signature));
    
    // 4. 서명 검증
    bool validSig = verifyECDSASignature(pubKey, challenge, sizeof(challenge), signature);
    
    // 5. 자신의 신원 증명
    if (validSig) {
        unsigned char deviceChallenge[32];
        receiveChallenge(device, deviceChallenge, sizeof(deviceChallenge));
        
        unsigned char mySignature[64];
        signECDSA(privKey, deviceChallenge, sizeof(deviceChallenge), mySignature);
        
        sendSignature(device, mySignature, sizeof(mySignature));
    }
    
    return validSig;
}`
        }
      ],
      documents: [
        {
          title: "암호화 알고리즘 설계서",
          description: "Elliptic Curve 암호화 알고리즘의 수학적 원리와 구현 방식을 설명한 문서입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/%ED%83%80%EC%9B%90%EA%B3%A1%EC%84%A0+%EC%95%94%ED%98%B8%ED%99%94+%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98+%EC%84%A4%EA%B3%84%EC%84%9C.pdf",
          icon: faFileAlt
        },
        {
          title: "하드웨어 구성도",
          description: "Raspberry Pi를 활용한 시스템 구성과 하드웨어 연결 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/ecc_hardware-diagram.svg",
          icon: faDesktop
        },
        {
          title: "시스템 아키텍쳐 다이어그램",
          description: "프로젝트의 시스템 구조를 한눈에 볼 수 있는 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/ecc-authentication-diagram.svg",
          icon: faSitemap
        }
      ],
      architecture: {
        diagram: `${publicKeyArchitecture}`,
        description: "이 프로젝트의 아키텍처는 두 개의 Raspberry Pi 디바이스 간 상호 인증 시스템을 구현했습니다. 각 디바이스는 키 생성 모듈, 암호화/서명 모듈, 인증 프로토콜 모듈로 구성되어 있습니다. 시스템의 핵심은 Elliptic Curve 암호화 알고리즘을 기반으로 하며, Montgomery Ladder 최적화 기법을 통해 제한된 하드웨어 환경에서도 효율적인 암호화 연산을 수행합니다. 디바이스 간 통신은 공개키 교환 후 Challenge-Response 방식으로 진행되며, 타임스탬프 기반 메커니즘을 통해 중간자 공격을 방지합니다. 모든 구성요소는 C 언어로 구현되었으며 Linux 환경에서 실행됩니다."
      },
      performance: {
        before: "타원곡선 연산 처리 시간 850ms, 인증 프로토콜 완료 시간 2.3초, 메모리 사용량 82MB",
        after: "타원곡선 연산 처리 시간 210ms, 인증 프로토콜 완료 시간 0.7초, 메모리 사용량 46MB",
        methods: "Montgomery ladder 알고리즘을 도입하여 타원곡선 스칼라 곱셈 연산 효율성을 75% 개선했습니다. 큰 정수 연산을 위한 자체 라이브러리를 경량화하여 메모리 사용량을 44% 절감했습니다. 상호 인증 과정에서 불필요한 암호화 단계를 제거하고 프로토콜 최적화를 통해 전체 인증 시간을 70% 단축했습니다. 또한 타임스탬프 기반 challenge-response 메커니즘을 효율적으로 구현하여 보안성은 유지하면서도 연산 부하를 최소화했습니다."
      }
    },
    {
      id: 7,
      title: '배송지 거리별로 배달비가 달라지는 분식 가게 배달 API',
      category: 'C++, OOP',
      image: deliveryBackground,
      position: '대학교 조별 과제',
      role: '지역별, 거리별 배달비 책정 시스템 구현',
      completed: '2019년 2학기',
      description: '대학교 프로그래밍 수업의 일환으로 C++을 활용하여 배달 서비스 API를 구현한 프로젝트입니다. 배송지와 가게 간의 거리를 계산하여 거리별로 차등화된 배달비를 산정하는 알고리즘을 개발했습니다. 지역 코드와 실제 거리 데이터를 매핑하고, 사용자 주문 정보에 따라 자동으로 배달비를 계산하는 시스템을 구축했습니다. 이 프로젝트를 통해 알고리즘 설계 능력을 향상시키고, 실제 비즈니스 로직을 프로그래밍으로 구현하는 경험을 쌓았습니다.',
      challenge: "지역별로 차등화된 배달비를 계산하고 최소 주문 금액을 충족하는 주문 시스템을 구현하는 것이 과제였습니다. 사용자가 입력한 주소를 파싱하여 지역을 식별하고, 해당 지역에 맞는 배달비를 적용해야 했으며, 배달 불가 지역도 처리해야 했습니다.",
      solution: "C++의 상속과 가상 함수를 활용한 다형성으로 문제를 해결했습니다. 기본 배달 클래스를 생성하고 각 지역별로 자식 클래스를 구현하여 지역에 따라 다른 배달비를 적용했습니다. 포인터와 동적 메모리 할당을 통해 적절한 지역 클래스를 실행 시간에 결정하고, 문자열 처리 함수를 활용해 사용자 입력 주소에서 지역명을 추출하여 분류했습니다. 또한 최소 주문 금액 체크 로직을 구현하여 주문 요건을 충족하는지 확인했습니다.",
      problem: "프로젝트 개발 중 두 가지 주요 문제에 직면했습니다. 첫째, 주소 파싱 로직이 단순하여 첫 공백 전까지의 문자만 지역으로 인식하는 한계가 있었습니다. 이 방식은 주소 입력 형식이 '지역명 + 상세주소'로 정확히 입력되어야만 작동했습니다. 둘째, 메뉴 처리 과정에서 메뉴 번호를 체크할 때 불필요하게 0부터 127까지 반복문을 돌리는 비효율적인 코드 구조가 있었습니다.",
      resolve: "주소 파싱 문제는 사용자에게 정확한 입력 가이드라인을 제공하고, 입력 예시를 명확히 보여주는 방식으로 해결했습니다. 메뉴 처리 비효율성은 반복문의 범위를 실제 메뉴 수(1~6)에 맞게 조정하여 불필요한 연산을 줄였습니다. 또한 원래 계획했던 지역 코드와 거리 데이터 매핑 시스템을 단순화하여, 직접적인 조건문으로 지역별 배달비를 결정하는 방식을 채택했습니다. 이러한 실용적인 접근으로 프로그램의 성능을 개선하고 사용자 경험을 향상시켰습니다.",
      collaboration: "4인 조별 과제에서 거리별 배달비 책정 시스템을 담당했습니다. 팀원들과 함께 시스템 체계를 분석하고 클래스 다이어그램을 작성하여 전체 시스템 구조를 설계했습니다. 각자 맡은 모듈을 개발한 후 통합하는 과정에서 발생한 인터페이스 불일치 문제를 해결하기 위해 적극적으로 소통했습니다.",
      learning: "C++ 언어의 객체지향적 특성을 활용한 프로그래밍 능력을 향상시켰습니다. 실제 비즈니스 로직을 코드로 구현하는 과정에서 요구사항 분석과 알고리즘 설계 능력을 키웠습니다. 또한 조별 과제를 통해 코드 통합과 버전 관리의 기초를 배웠으며, 이는 후속 프로젝트에서 큰 도움이 되었습니다.",
      results: "프로그래밍 기초 과목에서 높은 평가를 받았으며, 특히 실제 비즈니스 로직을 프로그래밍으로 구현한 접근 방식이 인정받았습니다. 이 프로젝트는 C++ 언어의 기본 문법을 넘어 실제 문제 해결에 적용하는 능력을 키우는 중요한 경험이 되었습니다.",
      githubLink: "https://github.com/jungyoonn/C-Assignment-Project",
      features: [
        {
          title: "거리 기반 배달비 계산 알고리즘",
          image: `${deliveryDistance}`,
          description: "출발지와 도착지 사이의 거리를 계산하고 구간별로 차등화된 배달비를 산정하는 알고리즘입니다. 배달비를 미포함한 전체 상품 금액만으로 결제액을 책정한 기본 클래스에 거리별로, 지역별로 자식 클래스가 상속되어 배달비가 책정되는 시스템입니다.",
          tech: ["C++", "STL", "Algorithm Design"],
          codeSnippet: `class A : public delivery { //A동네 배달료 1000원
public:
	virtual int setpay(char dis[20], int total) {
		fee = 1000;

		strcmp(dis, this->dis);
		this->total = total;

		int price = setprice();
		cout << "해당 지역(" << dis << ")은 배달료가 1000원 추가됩니다." << endl;
		cout << "총 결제 금액 : " << price << endl;
		return price;
	}
};

class B : public delivery { //B동네 배달료 1000원 부과
public:
	virtual int setpay(char dis[20], int total) {
		fee = 2000;

		strcmp(dis, this->dis);
		this->total = total;

		int price = setprice();
		cout << "해당 지역(" << dis << ")은 배달료가 2000원 추가됩니다." << endl;
		cout << "총 결제 금액 : " << price << endl;
		return price;
	}
};

class C : public delivery { //C동네 배달료 2000원 부과
public:
	virtual int setpay(char dis[20], int total) {
		fee = 3000;

		strcmp(dis, this->dis);
		this->total = total;

		int price = setprice();
		cout << "해당 지역(" << dis << ")은 배달료가 3000원 추가됩니다." << endl;
		cout << "총 결제 금액 : " << price << endl;
		return price;
	}
};

class others : public delivery { //가맹점과 거리가 너무 멀어서 배달 불가능
public:
	virtual int setpay(char dis[20], int total) {
		strcmp(dis, this->dis);
		this->total = total;
		cout << "지역이 너무 멀어 주문이 접수되지 않았습니다." << endl;
		return 0;
	}
};`
        },
        {
          title: "메뉴를 골라 담은 후 주문",
          image: `${deliveryOrder}`,
          description: "최소 주문 금액을 채우지 않으면 주문으로 넘어가지 않고, 주문 시 배송지를 입력하여 거리에 따른 배송비가 책정되는 메인 메서드입니다. 배송지가 가게와 너무 먼 거리에 있으면 주문이 접수되지 않았다는 안내 메시지를 띄웁니다.",
          tech: ["C++", "OOP(객체지향 프로그래밍)", "다형성", "메모리 관리", "문자열 처리"],
          codeSnippet: `while (1) {
		if (sum1 < MIN) {
			cout << endl << "최소 주문 금액은 8000원입니다. 메뉴를 추가해 주세요. 현재 주문 금액은 " << total << "원" << endl << endl;
			order();
			while (1) {
				cin >> menu;
				if (menu == 7) break;
				vc.push_back(menu);
			}
			for (int i = cnt; i < vc.size(); i++) {
				for (int t = 0; t < 127; t++) {
					if (t == vc[i])
						sum2 += price[t];
				}
			}
			total = sum1 + sum2;
			cnt++;
		}
		if (total >= MIN)
			break;
	}
	cout << endl << "현재 주문 금액은 " << total << "원입니다." << endl;
	cout << endl << "주소를 입력하세요 : ";
	string address; //주소를 입력받는 string 타입 변수
	cin.ignore();
	getline(cin, address);

	char home[20] = { 0 };
	for (int i = 0; ; i++)
	{
		if (address[i] == ' ')
			break;
		else if (address[i] != ' ')
			home[i] = address[i];
	}

	int money;
	if (!strcmp(home, "덕명동")) {
		delivery *pdelivery = new A();
		money = pdelivery->setpay(home, total);
		delete pdelivery;
	}
	else if (!strcmp(home, "노은동")) {
		delivery *pdelivery = new B();
		money = pdelivery->setpay(home, total);
		delete pdelivery;
	}
	else if (!strcmp(home, "궁동")) {
		delivery *pdelivery = new C();
		money = pdelivery->setpay(home, total);
		delete pdelivery;
	}
	else {
		delivery *pdelivery = new others();
		money = pdelivery->setpay(home, total);
		delete pdelivery;
		return 0;
	}

	cout << endl << "------------------------------------------------------------------------" << endl << endl;
	cout << "주소는 " << address << ", 총 주문 금액은 " << money << "원 입니다!" << endl << "★ 결제를 진행하시겠습니까?(Y/N)";
	char c;
	cin >> c;
	cout << endl;
	if (c == 'N') {
		cout << "주문을 취소합니다. " << endl;
		return 0;
	}
	else if (c == 'Y')
		cout << "결제 페이지로 넘어갑니다. 잠시만 기다려 주세요." << endl << endl;`
        }
      ],
      documents: [
        {
          title: "알고리즘 설계서",
          description: "거리 계산 및 배달비 산정 알고리즘의 설계 원리와 의사코드를 담은 문서입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/%EB%B0%B0%EB%8B%AC%EB%B9%84+%EA%B3%84%EC%82%B0+%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98+%EC%84%A4%EA%B3%84%EC%84%9C.pdf",
          icon: faFileAlt
        },
        {
          title: "클래스 구조도",
          description: "객체지향 설계에 따른 C++ 클래스 구조와 상속 관계를 정리한 문서입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/delivery-class-structure-diagram-svg.svg",
          icon: faSitemap
        },
        {
          title: "시스템 아키텍쳐 다이어그램",
          description: "프로젝트의 시스템 구조를 한눈에 볼 수 있는 다이어그램입니다.",
          url: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%82%B0%EC%B6%9C%EB%AC%BC/delivery-system-architecture.svg",
          icon: faSitemap
        }
      ],
      architecture: {
        diagram: `${deliveryArchitecture}`,
        description: "이 다이어그램은 배달 서비스 시스템의 아키텍처를 나타냅니다. 3계층 구조(사용자 인터페이스 계층, 비즈니스 로직 계층, 데이터 계층)로 구성되어 있으며, 객체지향 설계 원칙을 따릅니다. 사용자 인터페이스에서는 메뉴 선택, 주소 입력, 결제 확인 기능을 제공하고, 비즈니스 로직에서는 주문 처리와 지역 기반 배달비 계산을 담당합니다. 데이터 계층은 메뉴, 지역, 가격 정보를 관리하며, 우측 하단에는 배달 서비스의 클래스 계층 구조(기본 클래스인 delivery와 지역별 자식 클래스)를 보여줍니다. 이 시스템은 특히 다형성을 활용하여 지역별로 다른 배달비 계산 로직을 효율적으로 구현했습니다."
      },
      // performance: {
      //   before: "페이지 로드 시간 4.5초, API 응답 시간 1.2초, Bundle 크기 2.8MB",
      //   after: "페이지 로드 시간 1.2초, API 응답 시간 0.3초, Bundle 크기 980KB",
      //   methods: "이미지 지연 로딩, React.memo와 useMemo를 활용한 렌더링 최적화, DB 인덱스 추가 및 쿼리 최적화, Redis 캐싱 레이어 추가, 코드 스플리팅과 청크 최적화를 통한 번들 크기 감소 등을 구현했습니다."
      // }
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
    // === 90-100: 전문가/마스터 수준 ===
    { 
      name: 'HTML', 
      value: 90, 
      category: ['Frontend'],
      leftStyle: { transform: 'rotate(144deg)' },
      rightStyle: { transform: 'rotate(180deg)' }
    },
    
    // === 80-89: 실무 숙련 수준 ===
    { 
      name: 'Spring', 
      value: 85, 
      category: ['Backend', 'Java Framework'],
      leftStyle: { transform: 'rotate(126deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Java', 
      value: 85, 
      category: ['Languages', 'Backend'],
      leftStyle: { transform: 'rotate(126deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'CSS', 
      value: 85, 
      category: ['Frontend'],
      leftStyle: { transform: 'rotate(126deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'JPA, JPQL', 
      value: 82, 
      category: ['Backend', 'Database'],
      leftStyle: { transform: 'rotate(115.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'C', 
      value: 82, 
      category: ['Languages'],
      leftStyle: { transform: 'rotate(115.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Javascript', 
      value: 80, 
      category: ['Frontend', 'Languages'],
      leftStyle: { transform: 'rotate(108deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'JSP', 
      value: 80, 
      category: ['Frontend', 'Java Framework'],
      leftStyle: { transform: 'rotate(108deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'SQL', 
      value: 80, 
      category: ['Database', 'Languages'],
      leftStyle: { transform: 'rotate(108deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'MyBatis', 
      value: 80, 
      category: ['Database', 'Java Framework'],
      leftStyle: { transform: 'rotate(108deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    
    // === 70-79: 중급 수준 ===
    { 
      name: 'Servlet', 
      value: 78, 
      category: ['Backend', 'Java Framework'],
      leftStyle: { transform: 'rotate(100.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'C++', 
      value: 75, 
      category: ['Languages'],
      leftStyle: { transform: 'rotate(90deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'React', 
      value: 75, 
      category: ['Frontend', 'Javascript Framework'],
      leftStyle: { transform: 'rotate(90deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'jQuery', 
      value: 75, 
      category: ['Frontend', 'Javascript Framework'],
      leftStyle: { transform: 'rotate(90deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Ubuntu', 
      value: 72, 
      category: ['Infrastructure'],
      leftStyle: { transform: 'rotate(79.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'AWS', 
      value: 70, 
      category: ['Infrastructure', 'Cloud'],
      leftStyle: { transform: 'rotate(72deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'NginX', 
      value: 70, 
      category: ['Infrastructure', 'Web Server'],
      leftStyle: { transform: 'rotate(72deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    
    // === 60-69: 기초-중급 ===
    { 
      name: 'Nodejs', 
      value: 68, 
      category: ['Backend', 'Javascript Framework'],
      leftStyle: { transform: 'rotate(64.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Docker', 
      value: 65, 
      category: ['Infrastructure', 'DevOps'],
      leftStyle: { transform: 'rotate(54deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Mustache', 
      value: 65, 
      category: ['Frontend', 'Template Engine'],
      leftStyle: { transform: 'rotate(54deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Thymeleaf', 
      value: 62, 
      category: ['Frontend', 'Template Engine', 'Java Framework'],
      leftStyle: { transform: 'rotate(43.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Querydsl', 
      value: 60, 
      category: ['Backend', 'Database', 'Java Framework'],
      leftStyle: { transform: 'rotate(36deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    
    // === 50-59: 기초 수준 ===
    { 
      name: 'NoSQL', 
      value: 58, 
      category: ['Database'],
      leftStyle: { transform: 'rotate(28.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Kotlin', 
      value: 55, 
      category: ['Backend', 'Languages'],
      leftStyle: { transform: 'rotate(18deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'C#', 
      value: 52, 
      category: ['Languages'],
      leftStyle: { transform: 'rotate(7.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    }
  ],
  // Services.jsx
  services: [
    {
      iconType: 'faCode',
      title: "웹 애플리케이션 개발",
      description: "React, HTML, CSS, Javascript 활용한 반응형 웹 사이트 및 애플리케이션 개발"
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