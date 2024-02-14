import { memo } from "react";

import { Input } from "../../../shared/ui/Input/Input";
import styled from "styled-components";
import { Textarea } from "../../../shared/ui/Textarea/Textarea";

import { Button } from "../../../shared/ui/Button/Button";
import { Icon } from "../../../shared/ui/Icon/Icon";
import { Text } from "../../../shared/ui/Text/Text";

interface ContactMeFormProps {
 className?: string;
}

export const ContactMeForm = memo(
 (props: ContactMeFormProps) => {
  const { className } = props;
  return (
   <ContactMeFormStyled className={className}>
    <StyledForm>
     <StyledField label="Name" />
     <StyledField label="Email" />
     <StyledTextarea label="Message" />
     <StyledButton variant="filled">Submit</StyledButton>
    </StyledForm>
    <StyledIFormnfo>
     <StyledFormInfoItem>
      <Icon
       width="50"
       height="50"
       viewBox="0 0 70 70"
       iconId="programmer"
      />
      <div>
       <Text text={"Location"} />
       <Text text={"Moscow"} />
      </div>
     </StyledFormInfoItem>
     <StyledFormInfoItem>
      <Icon
       width="50"
       height="50"
       viewBox="0 0 70 70"
       iconId="programmer"
      />
      <div>
       <Text text={"Phone"} />
       <Text text={"+7-911-888-77-77"} />
      </div>
     </StyledFormInfoItem>
     <StyledFormInfoItem>
      <Icon
       width="50"
       height="50"
       viewBox="0 0 70 70"
       iconId="programmer"
      />
      <div>
       <Text text={"Email"} />
       <Text text={"libertycodeg@gmail.com"} />
      </div>
     </StyledFormInfoItem>
    </StyledIFormnfo>
   </ContactMeFormStyled>
  );
 }
);
const ContactMeFormStyled = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 width: 930px;
`;
const StyledForm = styled.form`
 width: 430px;
`;
const StyledField = styled(Input)`
 margin-bottom: 20px;
`;
const StyledTextarea = styled(Textarea)`
 height: 165px;
 margin-bottom: 20px;
`;
const StyledButton = styled(Button)`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
`;
const StyledIFormnfo = styled.div`
 display: flex;
 flex-direction: column;
`;
const StyledFormInfoItem = styled.div`
 display: flex;
 align-items: center;
`;
