import { Typography, Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export function Title({ children, className }) {
    return <Typography
        variant="body1"
        fontWeight={600}
        className={"text-4xl " + className}>
        {children}
    </Typography>
}

export function TitleLg({ children, className }) {
    return <Typography
        variant="h3"
        className={className}
        fontWeight={700}>
        {children}
    </Typography>
}

export function Subtitle({ children, className }) {
    return <Typography
        variant="body1"
        fontSize={18}
        className={className}
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

export function Button({ children, small }) {
    return (
        <Box
            className={"bg-primary rounded-xl text-white text-[18px] py-4 cursor-pointer " +
                (small ? 'px-10' : 'px-16')}>
            {children}
        </Box>
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
    return <Link href="#" className="bg-dark rounded-full text-white w-10 h-10 flex items-center justify-center">
        {children}
    </Link>
}