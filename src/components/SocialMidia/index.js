import React from 'react';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Telegram } from '@styled-icons/boxicons-logos/Telegram';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';

import { ListSocial, ItemSocial } from './styles';

const SocialMidia = () => {
  return (
    <ListSocial>
      <ItemSocial
        className={"twitter"}
        href="https://twitter.com/codder404"
        title="Twitter"
      >
        <Twitter />
        @codder404
      </ItemSocial>
      <ItemSocial
        className={"instagram"}
        href="https://instagram.com/codder404"
        title="Instagram"
      >
        <InstagramAlt />
        @codder404
      </ItemSocial>

      <ItemSocial
        className={"github"}
        href="https://github.com/codder404"
        title="Giithub"
      >
        <Github />
        @codder404
      </ItemSocial>

      <ItemSocial
        className={"telegram"}
        href="https://web.telegram.org/codder404"
        title="Telegram"
      >
        <Telegram />
        @codder404
      </ItemSocial>
      
       <ItemSocial
        className={"likedin"}
        href="https://linkedin.com/in/fernandosantosc"
        title="Linkedin"
      >
        <Linkedin />
        /fernandodos
      </ItemSocial>
    </ListSocial>
  )
}

export default SocialMidia;