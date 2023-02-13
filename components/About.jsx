import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import { Button, Subtitle, SubtitleMd, Title } from './shared'

export default function About() {
  return (
    <Box className="flex items-start mt-48 cont" id="about">
      <Box className="flex-1">
        <SubtitleMd>ABOUT US</SubtitleMd>
        <Title>
          Bespoke <span className="text-primary">
            Software Platform
          </span>
        </Title>
        <Subtitle className="max-w-lg">
          With our bespoke software platform, you can access all of your building data from anywhere in the world, with an unlimited number of stakeholders and users for effective communication and collaboration. Our platform provides an all-in-one solution for managing all aspects of buildings, from floor plans and photographs to measurements, legal information, and more.
        </Subtitle>
        <Box className="mt-6 flex items-center justify-start">
          <Button small>Learn more</Button>
        </Box>
      </Box>
      <Box className="flex-1 relative">
        <Image
          src='/about.png'
          width={600}
          height={500}
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