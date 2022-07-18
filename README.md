# React-GenshinimpactWebPage-Project

##

메인화면 이미지

##

### Made by 이유승.
### contact to 010-3629-3686 / akows141@gmail.com
### GitPage :　https://akows.github.io/LYSPrivateProject/

##

## :: 목차 ::

#### 1. 소개
#### 1-1. 프로젝트 소개
#### 1-2. 프로젝트 기능
#### 1-3. 개발환경
#### 1-4. 프로젝트 작동 구조

#### 2. 프론트엔드 (React)
#### 2-1. 프로젝트 구조
#### 2-2. 컴포넌트 구성

#### 3. 백엔드 (Spring Framework)
#### 3-1. 프로젝트 구조
#### 3-2. Database 테이블 설계
#### 3-3. Controller 구성
#### 3-4. DTO 구성
#### 3-5. DAO 구성

#### 4. 마무리
#### 4-1. 모자란 점
#### 4-2. 소감

##

## 1. 소개
## 1-1. 프로젝트 소개.

#### 웹 프로그래밍의 기본 소양인 CRUD가 가능한 간단한 게시판을 목표로 시작하게 된 개인 프로젝트입니다. 
#### React를 독학으로 배워 기술을 익혀가면서 제작한 프로젝트이기에 기술적 완성도가 부족할 지라도 제대로 작동하는 웹 페이지를 만들기 위해 노력하였습니다.

## 1-2. 프로젝트 기능

#### 처음에는 단지 가장 기본적인 기능인 CRUD가 가능한 게시판만을 만들고자 했습니다. 
#### 그러나 게시판의 틀이 잡혀나가면서 프론트엔드적인 요소가 너무 부족하다고 생각되어 HTML과 CSS, Javascript같은 프론트엔드 기술 스택을 연습하면서 몇몇 기능과 프론트엔드 요소들을 추가하였습니다.

#### 초기 기능 목표
#### - 작성된 게시물이 DataBase에 저장된다.
#### - DataBase에 저장된 게시물을 조회하여 웹 페이지에서 출력한다.
#### - DataBase에 저장된 게시물을 삭제한다.
#### - DataBase에 저장된 게시물을 수정한다.

#### 추가된 목표들
#### - 게시물 리스트가 출력될 때, 게시물들을 10개 단위로 끊어 출력한다.
#### - 나누어진 게시물들은 페이징 기능을 통해 모두 조회할 수 있다.
#### - 게임 ‘원신’을 주제로 하는 웹페이지의 성격을 강화한다. (원신의 게임 소개 페이지를 그대로 재현해본다 등.)

## 1-3. 개발환경
#### OS : MS Window 10 Pro
#### IDE : IntelliJ IDEA Community Edition 2022.1
#### Backend : Spring Framework, myBatis, Tomcat
#### Frontend : React 16.12.0
#### DateBase : MariaDB 10.6.7 / MySQL Workbench 8.0 CE
#### Web Browser : Google Chrome

## 1-4. 프로젝트 작동 구조
#### Client Side Rendering 방식으로 동작하는, Single Page Application의 구축을 가능하게 해주는 React의 Create React App을 기반으로 작동합니다.

#### Back-end에서 Spring Framework와 myBatis, Tomcat을 이용하여 DB와 백엔드 사이의 데이터를 주고받도록 제작되었습니다. 백엔드는 데이터를 요청받게 될 경우 mapper 파일의 SQL문을 통해 DB에 접근, 필요한 데이터를 조회하여 JSON 방식으로 프론트엔드단까지 넘기게 됩니다. 프론트엔드는 이를 받아 적절한 형태로 화면에 출력합니다.

#### SPA 구조의 웹 페이지가 가지고 있는 뒤로 가기의 문제점은 react-router-dom의 useNavigate를 사용하여 세션 기록(페이지 방문 기록)에 접근, 뒤로 가기 기능을 구현하였습니다.
