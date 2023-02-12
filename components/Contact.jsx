import { Box } from '@mui/material'
import React from 'react'
import { Button, SocialMedia, Subtitle, Title } from './shared'

export default function Contact() {
  return (
    <Box className="cont flex items-start mt-20 bg-secondary pb-16" id="client">
      <Box className="flex-1 py-16 mr-10">
        <Title>
          <span className='text-primary'>Get expert assistance today</span> Contact us
        </Title>
        <Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id in laudantium quae eveniet tempore est sint minus ipsam recusandae molestiae laboriosam vel voluptatum cumque, tempora.</Subtitle>
        <Box className="flex items-center gap-5 mt-5">
          <SocialMedia>f</SocialMedia>
          <SocialMedia>f</SocialMedia>
          <SocialMedia>f</SocialMedia>
          <SocialMedia>f</SocialMedia>
        </Box>
        <Subtitle>hello.info@gmail.com</Subtitle>
        <Subtitle className='mt-4'>hello.info@gmail.com</Subtitle>
        <Subtitle className='mt-4'>hello.info@gmail.com</Subtitle>
      </Box>
      <Box className="flex-1">
        <form className="bg-white shadow-filter -mt-16 rounded-3xl p-8">
          <Box className="flex flex-col">
            <label htmlFor="name">Enter Name</label>
            <input className="bg-secondary p-4 rounded-2xl outline-none mt-2" type="text" id="name" />
          </Box>
          <Box className="flex flex-col mt-5">
            <label htmlFor="name">Enter Name</label>
            <input className="bg-secondary p-4 rounded-2xl outline-none mt-2" type="text" id="name" />
          </Box>
          <Box className="flex flex-col mt-5">
            <label htmlFor="name">Enter Name</label>
            <textarea className="bg-secondary p-4 h-48 rounded-2xl outline-none mt-2" id="name" />
          </Box>
          <Box className="text-center mt-8">
            <Button>Contact us</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}