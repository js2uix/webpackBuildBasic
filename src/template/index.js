const commonLink = () => {
  let result = '';
  const hrefs = [
    `https://fonts.googleapis.com/css?family=Josefin+Slab:ital,wght@0,600;0,700;1,600;1,700&Nanum+Myeongjo:wght@400;700;800&display=swap&subset=korean`,
    `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-1/css/all.min.css`
  ];

  for (let i = 0; i < hrefs.length; i++) {
    result +=`<link href="${hrefs[i]}" rel="stylesheet" type="text/css" crossorigin="anonymous">`;
    if (i < hrefs.length - 1) { result += `\n`; }
  }

  return result;
}

const bindMeta = (meta = []) => {
  let result = '';

  for (let i = 0; i < meta.length; i++) {
    result +=`<meta name="${meta[i].name}" content="${meta[i].content}">`;
    if (i < meta.length - 1) { result += `\n`; }
  }

  return result;
};

const bindStyle = (css = []) => {
  let result = `<link href="/assets/css/basic.css" rel="stylesheet" type="text/css">`;

  for (let i = 0; i < css.length; i++) {
    result +=`<link href="${css[i]}" rel="stylesheet" type="text/css">`;
    if (i < css.length - 1) { result += `\n`; }
  }

  return result;
};

const bindScript = (js = []) => {
  let result = '';

  for (let i = 0; i < js.length; i++) {
    result +=`<script src="${js[i]}"></script>`;
    if (i < js.length - 1) { result += `\n`; }
  }

  return result;
};


module.exports = (template = {}) => {
  const location = 'https://www.js2uix.com/'
  const header = [
    `<html lang="en">`,
    `<head>`,
    `<meta charset="utf-8">`,
    `<title>${template.html.title}</title>`,
    `<meta name="author" content="js2uix">`,
    `<meta name="title" content="${template.html.title}">`,
    `<link rel="canonical" href="${location}${template.output}">`,
    bindMeta(template.meta),
    commonLink(),
    bindStyle(template.css),
    `</head>`,
    `<body>`,
  ].join(`\n`);

  const footer = [
    `</body>`,
    bindScript(template.js),
    `</html>`,
  ].join(`\n`);

  return {
    header,
    footer
  };

};
