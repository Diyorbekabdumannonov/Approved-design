import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Subtitle, SocialMedia } from './shared'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    const links = [
        'About Us', 'Services', 'Projects', 'Clients', 'Blog', 'Scan to BIM', 'Scan to CAD', 'Floor Plans', '3D laser Scanning', '3D Virtual Tour', '3D design Renders',
    ]
    return (
        <Box className="cont pt-16">
            <Box className="flex items-start justify-between">
                <Box className="flex-[2.5] mr-16">
                    <Image
                        src="/logo.png"
                        width={140}
                        height={54}
                        alt="logo"
                    />
                    <Subtitle className='font-bold text-xl mt-4 text-gray'>GeoMaus - Your Partner in Building Success</Subtitle>
                    <Subtitle className={'text-gray'}>
                        Experience the full potential of a digital twin with GeoMaus! Our comprehensive building management platform creates a complete turnkey solution for managing your entire portfolio. Harness the power of a digital twin and simplify the process of keeping your buildings running smoothly and efficiently with GeoMaus
                    </Subtitle>
                </Box>
                <Box className="flex-1">
                    <Subtitle className='font-bold mb-8'>Company</Subtitle>
                    {links.slice(0, 5).map(link => {
                        return <Subtitle>{link}</Subtitle>
                    })}
                </Box>
                <Box className="flex-1">
                    <Subtitle className='font-bold mb-8'>Services</Subtitle>
                    {links.slice(5, 10).map(link => {
                        return <Subtitle>{link}</Subtitle>
                    })}
                </Box>
                <Box className="flex-1">
                    <Subtitle className='font-bold mb-8'>Contact us at</Subtitle>
                    <Subtitle className={'flex items-center'}>
                        <MailOutlineIcon className="text-primary mr-4" />
                        <span>mkiernan@geomaus.com</span>
                    </Subtitle>
                    <LocationOnOutlinedIcon className="text-primary my-4" />
                    <SocialMedia>
                        <LinkedInIcon />
                    </SocialMedia>
                </Box>
            </Box>
            <hr className='mt-16' />
            <Subtitle className='text-center my-8 text-base'>COPYRIGHT ©2023 ALL RIGHTS RESERVED | GEOMAUS | BUILT BY GEOMAUS</Subtitle>
        </Box>
    )
}