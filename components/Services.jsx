import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Subtitle, SubtitleMd, Title, TitleLg, shared, Btn } from './shared'

export default function Services({ services }) {
    return (
        <Box className="bg-white cont -mt-12 z-40 relative rounded-3xl py-8" id="project">
            <SubtitleMd className='text-center'>Everything you need all in one place</SubtitleMd>
            <Title className="text-center">Our <span className="text-primary">Services</span> </Title>
            <Box className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-6 mt-14">
                {services?.length && services.map(service => (
                    <Box className="shadow-card flex justify-between p-5 flex-col rounded-2xl pb-10" key={service.title}>
                        <Box className="lg:block flex flex-col items-center">
                            <Image
                                src={service.img}
                                width={369}
                                height={305}
                                alt={service.img}
                            />
                            <Title className="mt-8 text-center text-3xl">{service.title}</Title>
                            <Subtitle className='text-center'>{service.subtitle}</Subtitle>
                        </Box>
                        <Box className="text-center mt-4">
                            <Btn>Learn More</Btn>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}