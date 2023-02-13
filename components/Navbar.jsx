import { Box, InputLabel, MenuItem, Select } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Btn } from './shared'

export default function Navbar() {
  return (
    <Box className="bg-white rounded-xl py-4 px-9 shadow-filter flex items-center justify-between relative">
      <Box>
        <Image
          src="/logo.png"
          width={140}
          height={54}
          alt="logo"
        />
      </Box>
      <Box className="flex items-center gap-6 font-xl">
        <Link href="#about">About</Link>
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={"Services"}
          sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
          <MenuItem value="Services" selected>Services</MenuItem>
        </Select>
        <Link href="#project">Projects</Link>
        <Link href="#client">Clients</Link>
        <Btn>
          Login
        </Btn>
      </Box>
    </Box>
  )
}
