var http = require("http");
var url = require("url");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    let vidpos;
    if (url.parse(req.url, true).query.img == "") {
      vidpos = "https://cdn.spco.xyz/assets/img/imagedoc-darknoise.png";
    } else {
      vidpos = url.parse(req.url, true).query.img;
    }
    let vidsrc = url.parse(req.url, true).query.url;
    res.write(
      '<html lang="en">' +
        "<head>" +
        '<meta http-equiv="content-type" content="text/html; charset=UTF-8">' +
        '<meta charset="UTF-8">' +
        '<meta name="viewport" content="width=device-width; height=device-height;"></meta>' +
        '<link rel="shortcut icon" href="https://cdn.spco.xyz/assets/img/home/favicon.png"></link>' +
        '<link rel="stylesheet" href="https://cdn.spco.xyz/video/c/videocontrols.css" />' +
        "<link" +
        '  rel="stylesheet"' +
        '  href="https://cdn.spco.xyz/video/c/TopLevelVideoDocument.css"' +
        "/>" +
        "<link" +
        '  rel="stylesheet"' +
        '  href="https://cdn.spco.xyz/video/c/BottomLevelVideoDocument.css"' +
        "/>" +
        "<script" +
        '  type="text/javascript"' +
        '  src="https://cdn.spco.xyz/video/j/TopLevelVideoDocument.js"' +
        "></script>" +
        '<meta http-equiv="content-type" content="text/html; charset=UTF-8">' +
        '<meta property="og:image" content="' +
        vidpos +
        '">' +
        '<meta property="og:type" content="video.other" />' +
        '<meta property="og:video:url" content="' +
        vidsrc +
        '" />' +
        '<meta property="og:video:width" content="1280" />' +
        '<meta property="og:video:height" content="720" />' +
        "</head>" +
        "<body>" +
        '<video controls="controls" autoplay="autoplay" loop="" src="' +
        vidsrc +
        '" poster="' +
        vidpos +
        '" height="100%%"></video>' +
        "</body>" +
        "</html>"
    );
    res.end();
  })
  .listen(8984);
