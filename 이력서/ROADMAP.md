# 개발자 웹 이력서 프로젝트 로드맵

## 개요
HTML, CSS, JavaScript, TailwindCSS로 제작하는 반응형 개발자 웹 이력서.
별도 백엔드나 빌드 툴 없이 정적 페이지로 완성하는 것을 목표로 한다.

## 기술 스택
- HTML5 (시맨틱 마크업)
- CSS3
- JavaScript (Vanilla JS, ES6+)
- TailwindCSS (CDN 방식 또는 CLI 빌드 방식 중 선택)

## 이력서 구성 (일반적인 내용)
1. **헤더 / 프로필**
   - 이름, 직무(예: Frontend Developer), 프로필 사진(선택), 한 줄 소개
   - 연락처: 이메일, 전화번호(선택), GitHub, LinkedIn, 블로그 링크
2. **자기소개(About)**
   - 짧은 소개 문단 2~4줄
3. **기술 스택(Skills)**
   - 카테고리별 태그/아이콘 나열 (언어, 프레임워크, 툴 등)
4. **경력(Experience)**
   - 회사명, 재직 기간, 직책, 주요 업무/성과 bullet list
5. **프로젝트(Projects)**
   - 프로젝트명, 기간, 사용 기술, 한 줄 설명, 링크(GitHub/배포 URL)
6. **학력(Education)**
   - 학교명, 전공, 기간
7. **자격증/수상(선택)**
8. **푸터**
   - 저작권 문구, 맨 위로 이동 버튼

## 개발 단계

### Phase 1. 프로젝트 셋업
- [ ] 프로젝트 폴더 구조 생성 (`index.html`, `css/`, `js/`, `assets/`)
- [ ] TailwindCSS 설치/연결 방식 결정 (CDN vs npm 빌드)
- [ ] 기본 HTML 뼈대 작성 (semantic tag: header, main, section, footer)
- [ ] 폰트/색상 팔레트 등 기본 디자인 톤 결정

### Phase 2. 마크업 & 콘텐츠
- [ ] 섹션별 HTML 구조 작성 (About / Skills / Experience / Projects / Education)
- [ ] 실제(또는 더미) 이력서 텍스트 채우기
- [ ] 아이콘/이미지 리소스 준비 (SVG 아이콘 등)

### Phase 3. 스타일링 (TailwindCSS)
- [ ] 레이아웃 그리드/플렉스 구성
- [ ] 반응형 브레이크포인트 적용 (모바일 → 태블릿 → 데스크탑)
- [ ] 다크모드 지원 여부 결정 및 적용
- [ ] 호버/트랜지션 등 인터랙션 스타일 추가

### Phase 4. 인터랙션 (JavaScript)
- [ ] 네비게이션 스무스 스크롤
- [ ] 다크모드 토글 버튼 (localStorage 저장)
- [ ] 스크롤 시 섹션 등장 애니메이션(Intersection Observer)
- [ ] 모바일 메뉴 토글

### Phase 5. 마무리 & 배포
- [ ] 크로스 브라우저 테스트
- [ ] 반응형 레이아웃 최종 점검 (모바일/태블릿/데스크탑)
- [ ] 접근성(alt 텍스트, 시맨틱 태그, 명도 대비) 점검
- [ ] 이미지 최적화 / 불필요한 코드 정리
- [ ] GitHub Pages / Vercel / Netlify 등으로 배포

## 폴더 구조 예시
```
이력서/
├── index.html
├── css/
│   └── style.css        (Tailwind 커스텀 스타일 또는 빌드 결과물)
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
└── ROADMAP.md
```

## 참고
- 콘텐츠는 우선 더미/일반적인 내용으로 채우고, 추후 실제 정보로 교체
- 섹션 순서나 항목은 필요에 따라 자유롭게 추가/삭제 가능
