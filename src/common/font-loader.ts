import WebFont  from 'webfontloader';

/**
 * Webfont loader https://github.com/typekit/webfontloader
 * Helps with cross browser issues encountered when using regular @font-face
 * in IE https://github.com/typekit/webfontloader#browser-support
 */
export default load;

function load() {
  WebFont.load({
    custom: {
      families: ['Poppins:300,400,500:latin'],
      urls: ['//west.cdn.mathletics.com/html/fonts/Poppins/font.css']
    }
  });
}
