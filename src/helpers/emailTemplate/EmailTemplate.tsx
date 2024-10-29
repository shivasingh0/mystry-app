import React from "react";
import { Html, Container, Text } from "@react-email/components";

interface EmailTemplateProps {
    username: string;
    otp: string;
}

const EmailTemplate:React.FC<EmailTemplateProps> = ({ username, otp }) => {
  return (
    <Html lang="en">
      <Container className="bg-gray-400">
        <Text className="px-[12px] text-white">
          Hello, {username}. 
          Your verification otp is {otp}
        </Text>
      </Container>
    </Html>
  );
};

export default EmailTemplate;


