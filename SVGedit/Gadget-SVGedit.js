if (mw.config.get('wgNamespaceNumber') === 6 && /SVG/i.test(mw.config.get('wgTitle').slice(-3))) // SVGedit on SVG files only
    mw.loader.load( '//commons.wikimedia.org/w/index.php?title=User:Rillke/SVGedit.js&action=raw&ctype=text/javascript' );
