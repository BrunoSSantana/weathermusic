import { type } from 'os'
import React from 'react'

import { Container } from './style'

type HeaderProps = {
  children :React.ReactNode
}

export default function Header(props: HeaderProps) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
