"use client";
import React from "react";
import Text from "@/components/Text";
import TaskItem from "./TaskItem";
import { HEADER_HEIGHT } from "@/constants/common";
import { colors } from "@/constants/style";
import { FaCodeBranch } from "react-icons/fa";
import styled from "styled-components";

const TaskData = [
  {
    date: "2023-04",
    title: "KISA 보안나라 커스텀 게시물",
    skills: ["HTML", "CSS", "JS"],
    field: "퍼블리싱",
    thumbnail: "https://picsum.photos/64",
  },
  {
    date: "2023-01",
    title: "오늘회 메인 리뉴얼",
    skills: ["HTML", "CSS", "JS"],
    field: "개발",
    thumbnail: "https://picsum.photos/64",
  },
  {
    date: "2022-12",
    title: "한샘 리모델링 프로젝트",
    skills: ["Next.js"],
    field: "개발",
    thumbnail: "https://picsum.photos/64",
  },
  {
    date: "2020-12",
    title: "신개념 유튜버 놀이터: 인썰",
    skills: ["JS"],
    field: "개발",
    thumbnail: "https://picsum.photos/64",
  },
  {
    date: "2020-12",
    title: "퍼블리싱",
    skills: ["JS"],
    field: "퍼블리싱",
    thumbnail: "https://picsum.photos/64",
  },
];

const RecentTask = () => {
  return (
    <Container>
      <TitleBar>
        <FaCodeBranch color={colors.primary} size={20} />
        <Text color={colors.primary} weight={700}>
          최근 작업
        </Text>
      </TitleBar>
      <ul>
        {TaskData.map((item, index) => (
          <TaskItem key={`task-item-${index}`} {...item} />
        ))}
      </ul>
      <BottomBar />
    </Container>
  );
};

export default RecentTask;

const Container = styled.article`
  position: fixed;
  top: ${HEADER_HEIGHT + 40}px;
  right: 0;
  height: calc(100% - ${HEADER_HEIGHT + 40}px);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  width: 278px;
  padding: 16px 0 16px 24px;
  overflow: auto;
  overscroll-behavior: none;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const TitleBar = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const BottomBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;
