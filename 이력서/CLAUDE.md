# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS로 제작하는 정적 반응형 개발자 웹 이력서 프로젝트다.
백엔드나 별도 빌드 서버 없이 정적 페이지로 완결하는 것이 목표이며, 아직 코드는 작성되지 않은 계획 단계(ROADMAP.md 참고)다.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 기술 스택 및 아키텍처 방향

- HTML5(시맨틱 마크업) + CSS3 + Vanilla JavaScript(ES6+) + TailwindCSS
- TailwindCSS 연결 방식은 CDN과 npm 빌드(CLI) 중 아직 미결정 상태 — 코드를 추가하기 전에 이 선택부터 확정해야 함(ROADMAP.md Phase 1 참고). CDN 방식이면 별도 빌드 명령이 없고, npm 빌드 방식이면 `tailwindcss` CLI로 CSS를 빌드하는 스텝이 추가된다.
- 계획된 폴더 구조:
  ```
  index.html
  css/style.css   (Tailwind 커스텀 스타일 또는 빌드 결과물)
  js/main.js
  assets/images, assets/icons
  ```
- 단일 페이지 구성이며 섹션은 헤더/프로필 → About → Skills → Experience → Projects → Education → 푸터 순서로 배치한다(ROADMAP.md "이력서 구성" 참고).
- 인터랙션 요소(예정): 스무스 스크롤 내비게이션, localStorage 기반 다크모드 토글, Intersection Observer 기반 스크롤 등장 애니메이션, 모바일 메뉴 토글.

## 참고 문서

- `ROADMAP.md`: 개발 단계(Phase 1~5)와 이력서 콘텐츠 구성이 정의되어 있다. 새 작업을 시작하기 전 현재 어느 Phase인지 확인할 것.
