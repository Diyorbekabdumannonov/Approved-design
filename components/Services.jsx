import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Subtitle, SubtitleMd, Title, TitleLg, shared } from './shared'

export default function Services({ services }) {
    return (
        <Box className="bg-white mx-16 -mt-12 z-40 relative rounded-3xl py-8" id="project">
            <SubtitleMd className='text-center'>Everything you need all in one place</SubtitleMd>
            <Title className="text-center">Our <span className="text-primary">Services</span> </Title>
            <Box className="grid grid-cols-3 gap-16 mt-14">
                {services?.length && services.map(service => (
                    <Box className="shadow-card flex justify-between flex-col rounded-2xl pb-10" key={service.title}>
                        <Box>
                            <Image
                                src={service.img}
                                width={369}
                                height={305}
                                alt={service.img}
                            />
                            <TitleLg className="mt-8">{service.title}</TitleLg>
                            <Subtitle>{service.subtitle}</Subtitle>
                        </Box>
                        <Box className="px-5 text-center mt-1">
                            <Button>Learn More</Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}