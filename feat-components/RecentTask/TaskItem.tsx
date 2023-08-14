import React from "react";
import Image from "next/image";
import Text from "@/components/Text";
import { colors } from "@/constants/style";
import styled from "styled-components";
import Link from "next/link";

interface TaskItemProps {
  date: string;
  title: string;
  skills: string[];
  field: string;
  thumbnail: string;
}

const TaskItem = ({ date, title, skills, field, thumbnail }: TaskItemProps) => {
  return (
    <Link href="/">
      <IntroLine>
        <Text color={colors.primary} size="13px" weight={500}>
          {field}
        </Text>

        <DotIcon />

        <Text size="13px" weight={500}>
          {date}
        </Text>
      </IntroLine>
      <Container>
        <div>
          <TitleLine>
            <Text size="16px" weight={500}>
              {title}
            </Text>
          </TitleLine>

          <SkillLine>
            {skills.map((skill, index) => (
              <SkillIcon key={`skill-icon-${index}`}>
                <Text size="10px" weight={500}>
                  {skill}
                </Text>
              </SkillIcon>
            ))}
          </SkillLine>
        </div>

        <ImageBox>
          <Image src={thumbnail} alt={title} width={64} height={64} />
        </ImageBox>
      </Container>
    </Link>
  );
};

export default TaskItem;

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 40px;
  padding-right: 16px;
`;

const IntroLine = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const DotIcon = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
`;

const TitleLine = styled.div`
  word-break: keep-all;
  margin-bottom: 10px;
`;

const SkillLine = styled.div`
  display: flex;
  gap: 5px;
`;

const SkillIcon = styled.span`
  color: #000;
  border-radius: 4px;
  padding: 0 7px 2px 7px;
  background-color: ${colors.secondary};
`;

const ImageBox = styled.div`
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 4px;
  width: 64px;
  height: 64px;
`;
