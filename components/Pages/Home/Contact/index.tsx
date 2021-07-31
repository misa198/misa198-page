import { FC, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";

import { postContact } from "services/sheet.service";
import ContactBackgroundDraw from "../../../../assets/images/contact-background-draw.svg";
import {
  ContactWrapper,
  ContactContainer,
  ContactThumbWrapper,
  ContactFormWrapper,
  ContactForm,
  ContactControlField,
  ContactInputField,
  ContactMessageField,
  ContactFormButtonWrapper,
  ContactFormButton,
} from "./styled";

const schema = yup.object().shape({
  fullName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message: yup.string().required("Required"),
});

const Contact: FC = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { fullName: "", email: "", message: "" },
    validationSchema: schema,
    onSubmit: (formValues) => {
      if (!loading) {
        setLoading(true);
        postContact(formValues)
          .then(() => {
            setLoading(false);
            toast.success("Successfully", {
              position: "top-right",
            });
          })
          .catch(() => {
            setLoading(false);
            toast.error("Error", {
              position: "top-right",
            });
          });
      }
    },
  });

  return (
    <ContactWrapper>
      <ContactContainer>
        <ContactFormWrapper>
          <ContactForm onSubmit={formik.handleSubmit}>
            <ContactControlField>
              <ContactInputField
                placeholder="Full name*"
                required
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                isError={
                  formik.errors.fullName !== "" &&
                  formik.errors.fullName !== undefined &&
                  formik.touched.fullName === true
                }
              />
            </ContactControlField>
            <ContactControlField>
              <ContactInputField
                placeholder="Email*"
                required
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
                isError={
                  formik.errors.email !== "" &&
                  formik.errors.email !== undefined &&
                  formik.touched.email === true
                }
              />
            </ContactControlField>
            <ContactControlField>
              <ContactMessageField
                placeholder="Message*"
                rows={6}
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                isError={
                  formik.errors.message !== "" &&
                  formik.errors.message !== undefined &&
                  formik.touched.message === true
                }
                required
              />
            </ContactControlField>
            <ContactFormButtonWrapper>
              <ContactFormButton
                variant="contained"
                color="primary"
                type="submit"
              >
                {loading ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : (
                  "Submit"
                )}
              </ContactFormButton>
            </ContactFormButtonWrapper>
          </ContactForm>
        </ContactFormWrapper>
        <ContactThumbWrapper>
          <ContactBackgroundDraw alt="contact" />
        </ContactThumbWrapper>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
