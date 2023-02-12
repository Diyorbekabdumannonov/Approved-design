import { Box } from '@mui/material'
import React from 'react'
import { ImageMd, Subtitle, Title } from './shared'

export default function Benefits() {
  return (
    <Box className="flex items-center py-4 cont">
      <Box className="flex gap-6 flex-1">
        <Box className="gap-6 flex flex-col">
          <ImageMd src='/about1.png' />
          <ImageMd wide src='/about2.png' />
        </Box>
        <Box className="gap-6 flex flex-col">
          <ImageMd wide src='/about3.png' />
          <ImageMd src='/about4.png' />
        </Box>
      </Box>
      <Box className="ml-20 flex-1">
        <Title>
          Bespoke <span className="text-primary"> Software Platform</span>
        </Title>
        <Subtitle className="text-primary font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Subtitle>
        <Subtitle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque atque a sint, soluta sit mollitia? Odit totam ex autem sit.
        </Subtitle>
        <Subtitle className="text-primary font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Subtitle>
        <Subtitle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque atque a sint, soluta sit mollitia? Odit totam ex autem sit.
        </Subtitle>
        <Subtitle className="text-primary font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Subtitle>
        <Subtitle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque atque a sint, soluta sit mollitia? Odit totam ex autem sit.
        </Subtitle>
        <Subtitle className="text-primary font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Subtitle>
        <Subtitle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque atque a sint, soluta sit mollitia? Odit totam ex autem sit.
        </Subtitle>
        <Subtitle className="text-primary font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Subtitle>
        <Subtitle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque atque a sint, soluta sit mollitia? Odit totam ex autem sit.
        </Subtitle>
      </Box>
    </Box>
  )
} 