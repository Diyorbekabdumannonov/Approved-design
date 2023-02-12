import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Services({ services }) {
    return (
        <Box className="bg-white mx-16 -mt-12 z-40 relative rounded-3xl py-8">
            <Typography variant="body1" className="text-ancient font-medium text-center">Everything you need all in one place</Typography>
            <Typography variant="body1" className="mt-3 text-center text-4xl font-semibold">Our <span className="text-primary">Services</span> </Typography>
            <Box className="grid grid-cols-3 gap-16 mt-14">
                {services.map(service => (
                    <Box className="shadow-card flex justify-between flex-col rounded-2xl pb-10" key={service.title}>
                        <Box>
                            <Image
                                src={service.img}
                                width={369}
                                height={305}
                                alt={service.img}
                            />
                            <Typography variant="body1" className="mt-8 text-center text-3xl font-bold">{service.title}</Typography>
                            <Typography variant="body1" className="mt-3 mx-4 text-center">{service.subtitle}</Typography>
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