import React from "react";
import { AspectRatio, Box, BoxProps } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface NotificationBadgeProps extends BoxProps {
  children: React.ReactNode;
}

const NotificationBadge = ({ children, ...props }: NotificationBadgeProps) => {
  return (
    <AspectRatio position="absolute" maxW="30px" ratio={1} {...props}>
      <NotiBadgeItem>{children}</NotiBadgeItem>
    </AspectRatio>
  );
};

const NotiBadgeItem = styled(Box)`
  min-width: 16px;
  min-height: 16px;
  border-radius: 50%;
  background-color: #ea6c00;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-family: "Inter";
  line-height: 12px;
  padding: 8px;
`;

export default NotificationBadge;
