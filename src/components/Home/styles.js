import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Nunito:wght@400,700&display=swap");
  :root {
    --dark: #191919;
    --light: #ececec;
    --twitterbluelight: #006aad;
    --twitterbluedark: #7cccff;
    --redprimarylight: #FF5757;
    --youtuberedlight: #d40000;
    --redprimarydark: #b90000;
    --youtubereddark: #ff9090;
    --linkedinbluelight: #0077B5;
    --linkedinbluedark: #4fc3ff;
    --telegrambluelight: #0088CC;
    --telegrambluedark: #5cc9ff;
    --twitchpurpledark: #6441a5;
    --twitchpurplelight: #be92ff;
    --Nerd00: #2E3440;
    --Nerd01: #3B4252;
    --Nerd02: #434C5E;
    --Nerd03: #4C566A;
    --Nerd04: #D8DEE9;
    --Nerd05: #E5E9F0;
    --Nerd06: #ECEFF4;
    --Nerd07: #8FBCBB;
    --Nerd08: #88C0D0;
    --Nerd09: #81A1C1;
    --Nerd10: #5E81AC;
    --Nerd11: #BF616A;
    --Nerd12: #D08770;
    --Nerd13: #EBCB8B;
    --Nerd14: #A3BE8C;
    --Nerd15: #B48EAD;
  }
  body, html {
    font-family: 'Nunito', sans-serif;
    background-color: var(--Nerd06);
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    a {
      color: var(--Nerd00);
      transition: all .3s ease-in-out;
      &:hover, &:active {
        color: var(--Nerd00);
      }
      &.btn {
        &.ver-artigos {
          width: 130px;
          height: 40px;
          color: var(--Nerd06);
          display: block;
          margin: 50px auto 20px;
          background: var(--Nerd00);
          text-align: center;
          padding: 10px 20px;
          line-height: 20px;
          font-size: 14px;
          opacity: 1;
          position: relative;
          border-radius: 5px;
          transition: all .3s ease-in-out;
          box-sizing: border-box;
          &:hover {
            opacity: .8;
          }
        }
      }
    }
    img {
      transition: all 300ms ease-in-out;
    }
    @media (prefers-color-scheme: dark) {
      background-color: var(--Nerd00);
      a {
        color: var(--Nerd06);
        &:hover, &:active {
          color: var(--Nerd06);
        }
        &.btn {
          &.ver-artigos {
            color: var(--Nerd00);
            background: var(--Nerd07);
          }
        }
      }
    }
    @media (prefers-color-scheme: light) {
      background-color: var(--Nerd06);
      a {
        color: var(--Nerd00);
        &:hover, &:active {
          color: var(--Nerd00);
        }
        &.btn {
          &.ver-artigos {
            color: var(--Nerd06);
            background: var(--Nerd00);
          }
        }
      }
    }
    @media (prefers-color-scheme: no-preference) {
      background-color: var(--Nerd06);
      a {
        color: var(--Nerd00);
        &:hover, &:active {
          color: var(--Nerd00);
        }
        &.btn {
          &.ver-artigos {
            color: var(--Nerd06);
            background: var(--Nerd00);
          }
        }
      }
    }
  }
  html, body, div, span, applet, object, iframe, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  a {
    text-decoration: none;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote {
    &:before, &:after {
      content: '';
      content: none;
    }
  }
  q {
    &:before, &:after {
      content: '';
      content: none;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  #___gatsby, #gatsby-focus-wrapper, .tl-edges, .tl-wrapper {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: unset;
  }
`
