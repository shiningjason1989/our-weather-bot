module.exports = (input) =>
  input
    .trim()
    .replace(/(\w)[ \t][ \t]+(?=\w)|([!,.:;?~])[ \t][ \t]+(?=\S)|([^\x00-\xff])(?:[ \t]{2,})?(?=\w)|(\w)(?:[ \t]{2,})?(?=[^\x00-\xff])/g, '$1$2$3$4 ')
    .replace(/([^\x00-\xff])[ \t]+(?=[^\x00-\xff])|([\uFF00-\uFFFF])[ \t]+(?=\S)|(\S)[ \t]+(?=[\uFF00-\uFFFF]|[!,.:;?~])|([\S\n])[ \t]+(?=[\n])|(\n)[ \t]+(?=\S)/g, '$1$2$3$4$5');
