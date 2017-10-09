# WalmartDataViz

This is a React Redux and D3.js-based data visualization tool using Walmart Open API!

![alt text](https://github.com/albertchanged/WalmartDataViz/blob/master/src/images/WalmartDataViz_Screenshot.png)

### How It Works

Upon a search for specific products, this application performs an AJAX call via Walmart's Search API to retrieve the Top 10 Bestselling ones on Walmart.com, and displays them in a horizontal bar chart (Bestselling Rank vs. Product Price). You may also hover over/tap on the bars to see the full product name and prices.

Technologies used: React JS, Redux, D3.js, Webpack, Walmart Open API, Bootstrap, HTML, CSS, JavaScript

### How To Set It Up

First download the zip or clone this repository.

Navigate to your terminal / command line and run:

1. `npm install --save axios redux-promise`

2. `npm install`

3. `npm start`

### Disclaimer

Because I am hosting this application from an 'htt*ps*' domain, and the API call is to an 'htt*p*' domain, my application is currently not supported in most major browsers without using plugins. See [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

To use in Chrome, please consider installing [this plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US). It is completely safe and used by developers to carry out AJAX calls to external servers!

This also means that it cannot retrieve data on mobile phone browsers. Please run it locally on your laptop or desktop device.

### Thank you so much for checking out my Walmart Data Viz tool!

