import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Subtitle, TitleLg, Btn } from './shared'
import Navbar from './Navbar'

export default function Header() {
    return (
        <Box className="bg-secondary relative pb-48 max-w-xl mx-auto">
            <Image
                src="/circle.png"
                width={600}
                height={600}
                alt="circle"
                className='absolute right-0 top-0'
            />
            <Box className="flex items-center justify-center">
                <Box className="fixed max-w-xl w-screen py-7 top-0 px-16 z-50 ">
                    <Navbar />
                </Box>
            </Box>
            <Box className="pt-48 py-7 px-16 relative flex items-center">
                <Box className="flex-1 mr-7">
                    <Box className="relative z-30">
                        <TitleLg>
                            <span className="text-ancient">Transform the way </span>
                            you manage building data
                        </TitleLg>
                        <Subtitle>
                            GeoMaus is a leading provider of building data management services and software solutions. We are dedicated to transforming the way you manage your building data, making it easier, more accessible, and more efficient.
                            <br /> <br />
                            With our bespoke software platform, you can access all of your building data from anywhere in the world, with an unlimited number of stakeholders and users for effective communication and collaboration. Our platform provides an all-in-one solution for managing all aspects of buildings, from floor plans and photographs to measurements, legal information, and more.
                        </Subtitle>
                        <Box className="mt-7 flex items-center justify-start">
                            <Btn small>Get in touch</Btn>
                        </Box>
                    </Box>
                    <Image
                        src="/circle2.png"
                        width={250}
                        height={250}
                        alt="circle2"
                        className='absolute left-0 bottom-0 z-10 -mb-44'
                    />
                </Box>
                <Box className="flex-1 relative">
                    <Image
                        src="/dots.png"
                        width={270}
                        height={200}
                        alt="circle2"
                        className='absolute left-0 bottom-0 z-10 -mb-20 -ml-32'
                    />
                    <Image
                        src="/hero.png"
                        width={585}
                        height={578}
                        alt="hero"
                        className='z-30 relative'
                    />
                </Box>
            </Box>
        </Box>
    )
}