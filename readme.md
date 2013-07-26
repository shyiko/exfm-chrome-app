# exfm-chrome-app

Unofficial [Exfm](http://ex.fm) Chrome App.

![](http://i.minus.com/jnIpMxWqaFP7e.png)

## Installation

1. Download [latest CRX](https://github.com/shyiko/exfm-chrome-app/releases)
2. Open "chrome://extensions" (in Chrome)
3. Drug and drop CRX package onto the Extensions page

## Development

> PREREQUISITES: [GIT](http://git-scm.com/downloads), [Node.js and NPM](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager), [Grunt](https://github.com/gruntjs/grunt-cli)

    git clone https://github.com/shyiko/exfm-chrome-app.git
    cd exfm-chrome-app
    npm install # this will install all required dependencies

    grunt crx # for the CRX
    grunt zip # for zip distribution

## License

[MIT License](http://opensource.org/licenses/mit-license.php)

> src/chrome-app/images contains artwork by ex.fm, which may be a subject to a different license.