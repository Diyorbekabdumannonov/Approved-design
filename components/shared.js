import { Typography, Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@mui/material"

export function Title({ children, className }) {
    return <Typography
        variant="body1"
        fontWeight={600}
        className={"lg:text-4xl text-2xl " + className}>
        {children}
    </Typography>
}

export function TitleLg({ children, className }) {
    return <Typography
        className={'lg:text-[48px] text-2xl md:text-3xl lg:leading-[1] '+className}
        fontWeight={700}>
        {children}
    </Typography>
}

export function Subtitle({ children, className }) {
    return <Typography
        variant="body1"
        className={'lg:text-[18px] md:text-sm text-xs '+className}
        marginTop={'14px'}>
        {children}
    </Typography>

}

export function SubtitleMd({ children, className }) {
    return <Typography
        variant="body1"
        fontWeight={500}
        className={"text-ancient " + className}>
        {children}
    </Typography>
}

export function Btn({ children, small }) {
    return (
        <Button
            className={"bg-primary hover:bg-primary px-6 rounded-2xl text-white lg:text-[18px] text-sm lg:py-4 py-2 cursor-pointer " +
                (small ? 'lg:px-10' : 'lg:px-16')}>
            {children}
        </Button>
    )
}

export function ImageMd({ src, wide }) {
    return <Image
        src={src}
        width={300}
        height={wide ? 250 : 450}
        alt='about'
    />
}

export function SocialMedia({ children }) {
    return <Link href="#" className="bg-gray rounded-full text-white w-10 h-10 flex items-center justify-center">
        {children}
    </Link>
}