import styled from "styled-components";
import { Container } from "@material-ui/core";
import { ReactComponent as ContactBackground } from "src/assets/images/contact-background.svg";
import { down } from "styled-breakpoints";

export const ContactWrapper = styled.section`
  width: 100%;
  margin-top: 5rem;
`;

export const ContactContainer = styled(Container)`
  display: flex !important;
  align-items: center;

  ${down("sm")} {
    flex-direction: column-reverse;
  }
`;

export const ContactThumbWrapper = styled.div`
  flex: 1;

  ${down("sm")} {
    width: 80%;
    margin-left: 10%;
  }
`;

export const ContactThumb = styled(ContactBackground)`
  width: 100%;
`;

export const ContactFormWrapper = styled.div`
  flex: 1;
  margin-top: 2rem;

  ${down("sm")} {
    width: 100%;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  padding-right: 3rem;

  ${down("sm")} {
    padding-right: 0;
  }
`;

export const ContactControlField = styled.div`
  width: 100%;
  margin: 1.5rem 0;
`;

export const ContactInputField = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.colorPrimary};
  outline: none;
`;

export const ContactMessageField = styled.textarea`
  width: 100%;
  font-size: 1rem;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.colorPrimary};
  outline: none;
  font-family: "Roboto", sans-serif;
  resize: none;
`;
