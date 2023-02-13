import { Box } from '@mui/material'
import React from 'react'
import { Btn, SocialMedia, Subtitle, Title } from './shared'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Form, Formik, Field } from 'formik';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function Contact() {
  const initialValues = {
    name: '',
    email: '',
    note: '',
  }
  const onSubmit = (values) => {
    console.log(values, initialvalues)
  }

  return (
    <Box className="cont flex items-start bg-secondary pb-16 mt-60" id="client">
      <Box className="flex-1 py-16 mr-28">
        <Title className='text-5xl'>
          <span className='text-primary'>Get expert assistance today</span> Contact us
        </Title>
        <Subtitle>
          Take the first step towards transforming the way you manage your building data. Book a call or contact us today to learn more about how GeoMaus can help you.
        </Subtitle>
        <Box className="flex items-center gap-5 mt-5">
          <SocialMedia>
            <FacebookIcon />
          </SocialMedia>
          <SocialMedia>
            <InstagramIcon />
          </SocialMedia>
          <SocialMedia>
            <LinkedInIcon />
          </SocialMedia>
          <SocialMedia>
            <TwitterIcon />
          </SocialMedia>
        </Box>
        <Subtitle>
          <LocalPhoneIcon className='text-gray mr-4' />
          <span>974665 87676</span>
        </Subtitle>
        <Subtitle className='mt-4'>
          <MailOutlineIcon className='text-gray mr-4' />
          <span> hello.info@gmail.com</span>
        </Subtitle>
        <Subtitle className='mt-4'>
          <LocationOnOutlinedIcon className='text-gray mr-4' />
          <span>New Bell Yard , New York</span>
        </Subtitle>
      </Box>
      <Box className="flex-1">
        <Formik
          initialValues
          onSubmit>
          <Form>
            <Box className="bg-white shadow-filter -mt-20 rounded-3xl p-8">
              <Box className="flex flex-col">
                <label htmlFor="name">Enter Name</label>
                <Field className="bg-secondary p-4 rounded-2xl outline-none mt-2" id="name" name="name" />
              </Box>
              <Box className="flex flex-col mt-5">
                <label htmlFor="email">Enter Email</label>
                <Field className="bg-secondary p-4 rounded-2xl outline-none mt-2" id="email" name="email" />
              </Box>
              <Box className="flex flex-col mt-5">
                <label htmlFor="note">Leave Note</label>
                <textarea className="bg-secondary p-4 h-48 rounded-2xl outline-none mt-2" id="note" />
              </Box>
              <Box className="text-center mt-8">
                <Btn>Contact us</Btn>
              </Box>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box >
  )
}