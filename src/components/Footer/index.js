import React from 'react';

import { Foo, Copy, CopyLink } from './styles';

const Footer = () => {
  return (
    <Foo>
      <Copy>
        © 2020 - Fernando dos Santos, <CopyLink>Politicas de privacidade</CopyLink> <CopyLink>Termos de uso</CopyLink>
      </Copy>
    </Foo>
  )
}

export default Footer;