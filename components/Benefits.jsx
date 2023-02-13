import { Box } from '@mui/material'
import React from 'react'
import { ImageMd, Subtitle, Title } from './shared'

export default function Benefits() {
  const headings = [
    { title: 'Access to all building data from anywhere globally :', subtitle: 'Our platform allows for easy access to all building data, including floor plans, photographs, measurements, legal information, and more, globally.' },
    { title: 'Unlimited stakeholders and users :', subtitle: 'The platform allows for an unlimited number of stakeholders or users to be added, enabling effective communication and collaboration across teams and projects.' },
    { title: 'All-in-one solution for managing buildings :', subtitle: 'Your platform provides an all-in-one solution for managing all aspects of buildings, making it a convenient and streamlined solution for managing and collaborating on building data.' },
    { title: 'User-friendly, secure and efficient :', subtitle: 'The platform is easy to use, secure and efficient, making it easy for you to manage, share and collaborate on your building data.' },
    { title: 'Timely delivery and budget :', subtitle: 'The platform ensures that your projects are completed on time and within budget while providing the highest level of precision.' },
  ]

  return (
    <Box className="flex items-center py-4 cont mt-48">
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
      <Box className="ml-20 flex-[1.3]">
        <Title>
          <span className="text-primary">Benefits </span> of GeoMaus software
        </Title>
        {headings.map(heading => {
          return <>
            <Subtitle className="text-primary font-bold">
              {heading.title}
            </Subtitle>
            <Subtitle className='-mt-0.5'>
              {heading.subtitle}
            </Subtitle>
          </>
        })}
      </Box>
    </Box>
  )
} 