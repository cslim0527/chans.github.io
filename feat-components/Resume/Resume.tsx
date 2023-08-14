"use client";

import React from "react";
import styled from "styled-components";
import { colors } from "@/constants/style";

const Resume = () => {
  return (
    <StyledResumeWrapper>
      <StyledName>
        Web Developer. <br />
        <b>LIM CHANSOO</b>
      </StyledName>

      <div>
        <StyledSubject>Tech Stack</StyledSubject>
        <StyledBox>
          <StyledDivider />

          <StyledDesc>
            <li>
              React.js / Next.js / Typescript / Sass / HTML / CSS / jQuery /
              Turborepo / yarn workspace
            </li>
          </StyledDesc>
        </StyledBox>

        <StyledSubject>Work Experience</StyledSubject>
        <StyledBox>
          <StyledHStack>
            <StyledTitle>한샘</StyledTitle>
            <StyledPeriod>2022.10 - 현재</StyledPeriod>
          </StyledHStack>
          <StyledDivider />

          <StyledDesc>
            <li>인테리어 프로젝트 PL</li>
            <li>신규 입사자 리액트 인큐베이팅 담당</li>
            <li>인테리어 상품 영역 개발</li>
            <li>인테리어 매장 영역 유지보수</li>
            <li>인테리어 어드민 개발</li>
          </StyledDesc>
        </StyledBox>

        <StyledBox>
          <StyledHStack>
            <StyledTitle>오늘식탁</StyledTitle>
            <StyledPeriod>2022.03 - 2022.08</StyledPeriod>
          </StyledHStack>
          <StyledDivider />

          <StyledDesc>
            <li>풀필먼트 파트 화면 개발</li>
            <li>WMS 프로젝트 모노레포 도입</li>
            <li>TMS 어드민, 고객사 프론트 프로젝트 설계</li>
            <li>TMS 오늘러쉬 고객사 페이지 리뉴얼</li>
            <li>TMS 지도기반 권역설정 페이지 성능 개선</li>
          </StyledDesc>
        </StyledBox>

        <StyledBox>
          <StyledHStack>
            <StyledTitle>주식회사 인썰</StyledTitle>
            <StyledPeriod>2019.12 - 2021.06</StyledPeriod>
          </StyledHStack>
          <StyledDivider />

          <StyledDesc>
            <li>1인 크리에이터 영상 컨텐츠 거래소 프론트엔드 개발</li>
            <li>채팅 기능 개발</li>
            <li>Google Auth API 기반 유튜버 인증 기능 구현</li>
            <li>Full Responsive 웹 퍼블리싱</li>
          </StyledDesc>
        </StyledBox>

        <StyledBox>
          <StyledHStack>
            <StyledTitle>주식회사 선호디지털</StyledTitle>
            <StyledPeriod>2017.03 - 2019.07</StyledPeriod>
          </StyledHStack>
          <StyledDivider />

          <StyledDesc>
            <li>재고관리 시스템 프로젝트 화면작업</li>
            <li>고객관리 어드민 프로젝트 화면작업</li>
            <li>자사 홈페이지 화면작업</li>
            <li>Bootstrap, jQuery를 사용한 PC - Mobile 반응형 웹 제작</li>
            <li>크로스브라우징을 고려한 웹 제작</li>
            <li>시멘틱 웹 제작</li>
          </StyledDesc>
        </StyledBox>

        <StyledSubject>Activities</StyledSubject>
        <StyledBox>
          <StyledHStack>
            <StyledTitle>스파르타 코딩클럽 항해99 멘토 활동</StyledTitle>
            <StyledPeriod>2022.10 - 2023.10</StyledPeriod>
          </StyledHStack>
          <StyledDivider />

          <StyledDesc>
            <li>프론트엔드 담당 멘토링</li>
            <li>HTML, CSS, Javascript, React.js 관련 기초학습 리딩</li>
            <li>포트폴리오 제작 가이드 담당</li>
            <li>취업관련 개별 지도 담당</li>
          </StyledDesc>
        </StyledBox>

        <StyledBox>
          <StyledHStack>
            <StyledTitle>천호 하이미디어 웹퍼블리싱 강사 활동</StyledTitle>
            <StyledPeriod>2021.10 - 2022.10</StyledPeriod>
          </StyledHStack>
          <StyledDivider />

          <StyledDesc>
            <li>HTML, CSS, jQuery 교육</li>
            <li>반응형 웹 제작 교육</li>
          </StyledDesc>
        </StyledBox>

        <StyledSubject>Others</StyledSubject>
        <StyledBox>
          <StyledDivider />

          <StyledDesc>
            <li>
              &quot;KISA 보안나라&quot; 반응형 이벤트 페이지 제작 (2023-04)
            </li>
            <li>&quot;나래 커뮤니케이션&quot; 반응형 페이지 제작 (2021-06)</li>
          </StyledDesc>
        </StyledBox>
      </div>
    </StyledResumeWrapper>
  );
};

export default Resume;

const StyledResumeWrapper = styled.section`
  max-width: 768px;
  margin: 0 auto;
  padding: 40px 16px 40px 16px;
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const StyledName = styled.div`
  display: inline-block;
  color: white;
  font-size: 1.3rem;
  margin-bottom: 40px;
  position: relative;
  letter-spacing: 0.12rem;

  b {
    font-size: 1.5rem;
    letter-spacing: 0;
    color: ${colors.secondary};
  }
`;

const StyledSubject = styled.strong`
  display: inline-block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${colors.secondary};
    position: absolute;
    top: 0;
    right: -10px;
  }
`;

const StyledBox = styled.div`
  margin-bottom: 80px;
`;

const StyledHStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const StyledTitle = styled.b`
  font-size: 1rem;
  color: white;
  font-weight: 500;
`;

const StyledPeriod = styled.span`
  color: #aaa;
  font-weight: 300;
  font-size: 0.85rem;
`;

const StyledDesc = styled.ul`
  margin-top: 20px;

  li {
    font-size: 0.9rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 7px;

    &::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: white;
      margin-right: 10px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
