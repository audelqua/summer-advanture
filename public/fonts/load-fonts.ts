import { continueRender, delayRender, staticFile } from "remotion";
import config from '../../config.json'

const waitForFont = delayRender()
const mainFont = new FontFace(
  `${config.main_font[0]}.woff2`,
  `url(${staticFile(`${config.main_font[0]}.woff2`)}) format('woff2')`
)
const secFont = new FontFace(
  `${config.secondary_font[0]}.woff2`,
  `url(${staticFile(`${config.secondary_font[0]}.woff2`)}) format('woff2')`
)
 
mainFont
  .load()
  .then(() => {
    document.fonts.add(mainFont);
    continueRender(waitForFont);
  })
  .catch((err) => console.log("Error loading font", err));

  secFont
  .load()
  .then(() => {
    document.fonts.add(secFont);
    continueRender(waitForFont);
  })
  .catch((err) => console.log("Error loading font", err));