# Health Impact Fund

[Health Impact Fund](https://healthimpactfund.org) - decouple the price of drugs from the cost of research.

## About

This repository contains the files for the public website.

## Development

The webstie is built with _Gatsby_ and the _gatsby-starter-default-intl_ starter.

## Caveats

Seems like the `en.json` (and other languages in the `/intl` folder) _must_ be a valid JSON with no errors (no trailing commas for example). If there is an error, none of the text will be rendered; you will instead see the text reference id.

For simplicity, I recommend sorting the JSON alphabetically with [Sort JSON objects](https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json) for _VSCode_.

Images are hosted externally for simplicity.

### If you've not coded but want to start:

0. Starting may be daunting, but you can do it! Follow the instructions for [Gatsby](https://www.gatsbyjs.org/tutorial/part-zero/):
   - install **git**
   - install **node** (comes with **npm**)
   - install a _terminal_ if you don't have one (on Mac try [Hyper](https://hyper.is), on Windows try [FluentTerminal](https://github.com/felixse/FluentTerminal) or [Terminus](https://github.com/Eugeny/terminus))
   - install **gatsby** (`npm install -g gatsby-cli`)
1. When done, _clone_ this repository, enter it (`cd Health-Impact-Fund`) and install (`npm install`).
2. Install [VSCode](https://code.visualstudio.com) and open the folder to see the code.
3. Start (`npm start`) 🎉

Feel free to reach out with questions by going to [Issues](https://github.com/whyboris/Health-Impact-Fund/issues)
