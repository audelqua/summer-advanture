import { continueRender, delayRender, staticFile } from "remotion"
import config from '../../config.json'

export const fontLoader = () => {
  const waitForFont = delayRender()
  const mainFont = new FontFace(
    `${config.main_font[0]}`,
    `url(${staticFile(`fonts/${config.main_font[0]}.woff2`)}) format('woff2')`
  )
  const secFont = new FontFace(
    `${config.secondary_font[0]}`,
    `url(${staticFile(`fonts/${config.secondary_font[0]}.woff2`)}) format('woff2')`
  )
  
  mainFont
    .load()
    .then(() => {
      document.fonts.add(mainFont);
      continueRender(waitForFont);
    })
    .catch((err) => console.error("Error loading font", err));
  
  secFont
    .load()
    .then(() => {
      document.fonts.add(secFont);
      continueRender(waitForFont);
    })
    .catch((err) => console.error("Error loading font", err));
}
