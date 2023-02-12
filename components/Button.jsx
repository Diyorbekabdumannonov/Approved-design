import { Box } from '@mui/material'
import React from 'react'

export default function Button({ children, small }) {
    return (
        <Box className={"bg-primary rounded-xl text-white font-medium text-[18px] py-4 cursor-pointer " + (small ? 'px-10' : 'px-16')}>{children}</Box>
    )
}
