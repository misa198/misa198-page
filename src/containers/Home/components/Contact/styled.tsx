import styled from "styled-components";
import { Container, Button } from "@material-ui/core";
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

export const ContactInputField = styled.input<{ isError: boolean }>`
  width: 100%;
  font-size: 1rem;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.colorPrimary};
  ${(props) => (props.isError ? "border-color: red;" : "")}
  outline: none;
  transition: all 300ms;
`;

export const ContactMessageField = styled.textarea<{ isError: boolean }>`
  width: 100%;
  font-size: 1rem;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.colorPrimary};
  ${(props) => (props.isError ? "border-color: red;" : "")}
  outline: none;
  font-family: "Roboto", sans-serif;
  resize: none;
  transition: all 300ms;
`;

export const ContactFormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  ${down("sm")} {
    justify-content: center;
  }
`;

export const ContactFormButton = styled(Button)`
  width: 100px;
  height: 40px;
  font-weight: 400 !important;
  text-transform: none !important;
`;
