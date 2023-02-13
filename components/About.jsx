import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import { Btn, Subtitle, SubtitleMd, Title } from './shared'

export default function About() {
  return (
    <Box className="flex flex-col lg:flex-row lg:items-start items-center mt-48 cont" id="about">
      <Box className="lg:flex-1 lg:text-left text-center">
        <SubtitleMd>ABOUT US</SubtitleMd>
        <Title>
          Bespoke <span className="text-primary">
            Software Platform
          </span>
        </Title>
        <Subtitle className="max-w-lg">
          With our bespoke software platform, you can access all of your building data from anywhere in the world, with an unlimited number of stakeholders and users for effective communication and collaboration. Our platform provides an all-in-one solution for managing all aspects of buildings, from floor plans and photographs to measurements, legal information, and more.
        </Subtitle>
        <Box className="mt-6 flex items-center lg:justify-start justify-center">
          <Btn small>Learn more</Btn>
        </Box>
      </Box>
      <Box className="flex-1 relative lg:px-0 px-6">
        <Image
          src='/about.png'
          width={600}
          height={500}
          className="mt-6 lg:mt-0"
          alt="about"
        />
        <Box
          className="absolute bg-white shadow-filter p-4 rounded-3xl -ml-8 -mt-32">
          <Image
            src='/humans.png'
            width={150}
            height={30}
            alt="about"
          />
        </Box>
      </Box>
    </Box>
  )
}