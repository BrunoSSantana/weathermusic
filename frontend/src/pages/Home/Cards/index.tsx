import React from 'react'

import { Container } from './styles'

type HeaderProps = {
  children :React.ReactNode
}

export default function Cards(props: HeaderProps) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
