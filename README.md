# express-force-domain

Force an express app to use a particular domain by 301 redirecting none matching requests.

## Install

```bash
npm install --save express-force-domain
```

## Usage

Add to your express application before all other routes.

```js
var express = require('express');
var app = express();
var forceDomain = require('express-force-domain');

// add middleware to force requests to orcascan.com
app.use(forceDomain('orcascan.com'));

// typical route
app.get('/docs/integrations/scan-barcodes-into-microsoft-excel', function(req, res) {
    res.send('How to scan barcodes into spreadsheets!');
});
```

Based on the above example, a request to http://www.orcascan.com/docs/integrations/scan-barcodes-into-microsoft-excel would be 301 redirected to http://orcascan.com/docs/integrations/scan-barcodes-into-microsoft-excel.

## Contributing

Feel free to contribute, either by [raising an issue](https://github.com/orca-scan/express-force-domain/issues) or:

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## History

For change-log, check [releases](https://github.com/orca-scan/express-force-domain/releases).

## License

Licensed under [MIT License](LICENSE) &copy; [Orca Scan](https://orcascan.com)