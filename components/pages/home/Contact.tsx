import { useAppDispatch, useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { homeActions } from '@app/store/slices/home.slice';
import { postGoogleSheetContact } from '@app/store/thunks/home.thunk';
import Button from '@components/common/Button';
import contact from '@public/images/contact.svg';
import classnames from 'classnames';
import { useFormik } from 'formik';
import Image from 'next/image';
import { FC, useEffect } from 'react';
import { SpinnerCircular } from 'spinners-react';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const Contact: FC = () => {
  const { t } = useTranslate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.home.contact);

  useEffect(() => {
    dispatch(
      homeActions.setContactNotices({
        success: t('app.home.contact-success'),
        error: t('app.home.contact-error'),
      }),
    );
  }, [dispatch, t]);

  const formik = useFormik({
    initialValues: { fullName: '', email: '', message: '' },
    validationSchema: schema,
    onSubmit: (formValues) => {
      dispatch(
        postGoogleSheetContact({
          fullName: formValues.fullName,
          email: formValues.email,
          message: formValues.message,
        }),
      );
    },
  });

  return (
    <section className="container mx-auto flex flex-col-reverse mt-16 md:mt-20 md:flex-row">
      <div className="w-full md:w-1/2">
        <form
          className="flex flex-col items-center md:items-start"
          onSubmit={formik.handleSubmit}
        >
          <input
            className={classnames(
              'w-full border-2 rounded-lg p-3 mb-5 outline-none transition-all duration-200',
              {
                'border-red-500':
                  formik.touched.fullName && formik.errors.fullName,
                'border-primary':
                  !formik.touched.fullName || !formik.errors.fullName,
              },
            )}
            type="text"
            name="fullName"
            placeholder={t('app.home.contact-full-name')}
            required
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          <input
            className={classnames(
              'w-full border-2 rounded-lg p-3 mb-5 outline-none transition-all duration-200',
              {
                'border-red-500': formik.touched.email && formik.errors.email,
                'border-primary': !formik.touched.email || !formik.errors.email,
              },
            )}
            type="text"
            name="email"
            placeholder={t('app.home.contact-email')}
            required
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <textarea
            className={classnames(
              'w-full border-2 rounded-lg p-3 mb-5 outline-none transition-all duration-200 resize-none',
              {
                'border-red-500':
                  formik.touched.message && formik.errors.message,
                'border-primary':
                  !formik.touched.message || !formik.errors.message,
              },
            )}
            name="message"
            rows={8}
            placeholder={t('app.home.contact-message')}
            required
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <Button disabled={loading} type="submit" className="w-28">
            <div className="flex justify-center items-center h-full w-full">
              {!loading ? (
                t('app.home.contact-submit')
              ) : (
                <SpinnerCircular color="#fff" size={24} />
              )}
            </div>
          </Button>
        </form>
      </div>
      <div className="w-full pr-4 pl-14 mb-8 md:w-1/2">
        <Image src={contact} alt="contact" />
      </div>
    </section>
  );
};

export default Contact;
