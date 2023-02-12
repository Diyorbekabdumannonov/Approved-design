import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Subtitle } from './shared'

export default function Footer() {
    return (
        <Box className="cont pt-16">
            <Box className="flex items-start justify-between">
                <Box className="flex-[2] mr-16">
                    <Image
                        src="/logo.png"
                        width={140}
                        height={54}
                        alt="logo"
                    />
                    <Subtitle className='font-bold'>GeoMaus - Your Partner in Building Success</Subtitle>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quod aliquam corporis exercitationem accusamus aperiam quidem illo necessitatibus quae temporibus repellendus eaque doloribus qui, laboriosam cumque id illum.</Subtitle>
                </Box>
                <Box className="flex-1">
                    <Subtitle className='font-bold'>Company</Subtitle>
                    <Subtitle>About Us</Subtitle>
                    <Subtitle>Services</Subtitle>
                    <Subtitle>Projects</Subtitle>
                    <Subtitle>Clients</Subtitle>
                    <Subtitle>Blog</Subtitle>
                </Box>
                <Box className="flex-1">
                    <Subtitle className='font-bold'>Company</Subtitle>
                    <Subtitle>About Us</Subtitle>
                    <Subtitle>Services</Subtitle>
                    <Subtitle>Projects</Subtitle>
                    <Subtitle>Clients</Subtitle>
                    <Subtitle>Blog</Subtitle>
                </Box>
                <Box className="flex-1">
                    <Subtitle className='font-bold'>Company</Subtitle>
                    <Subtitle>mkiernan@geomous.com</Subtitle>
                    <Subtitle>Ser</Subtitle>
                    <Subtitle>Blo</Subtitle>
                </Box>
            </Box>
            <hr className='mt-16' />
            <Subtitle className='text-center my-8'>COPYRIGHT 2023 ALL RIGHTS RESERVED | GEOMAUS | BUILT BY GEOMAUS</Subtitle>
        </Box>
    )
}