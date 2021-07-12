import { FC } from "react";

import {
  ContactWrapper,
  ContactContainer,
  ContactThumbWrapper,
  ContactThumb,
  ContactFormWrapper,
  ContactForm,
  ContactControlField,
  ContactInputField,
  ContactMessageField,
} from "./styled";

const Contact: FC = () => {
  return (
    <ContactWrapper>
      <ContactContainer>
        <ContactFormWrapper>
          <ContactForm>
            <ContactControlField>
              <ContactInputField placeholder="Full name*" required />
            </ContactControlField>
            <ContactControlField>
              <ContactInputField placeholder="Email*" required />
            </ContactControlField>
            <ContactControlField>
              <ContactMessageField placeholder="Message*" rows={6} required />
            </ContactControlField>
          </ContactForm>
        </ContactFormWrapper>
        <ContactThumbWrapper>
          <ContactThumb />
        </ContactThumbWrapper>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
