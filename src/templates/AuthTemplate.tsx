import React, { Children, ReactChild, ReactChildren } from 'react'
import styled from '@emotion/styled'

const Header = styled.div``

const AuthTemplateWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AuthTemplateContents = styled.div`
  width: 640px;
`

const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
`

interface AuthTemplateProps {
  title: string
  children: React.ReactNode
}

const Hr = styled.div`
  height: 1px;
  border: 1px solid #000;
`

const AuthTemplate = ({ title, children }: AuthTemplateProps) => {
  return (
    <AuthTemplateWrapper>
      <AuthTemplateContents>
        <Title>{title} </Title>
        <Hr />
        {children}
        <Hr />
      </AuthTemplateContents>
    </AuthTemplateWrapper>
  )
}

export default AuthTemplate
