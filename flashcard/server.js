const http = require('http');
const https = require('https');
const fs = require('fs');

const port = 8080;

const requestHandler = (req, res) => {
    if (req.url === '/wikipedia') {
        // Make a request to Wikipedia
        https.get('https://en.wikipedia.org/wiki/List_of_national_capitals', (wikiRes) => {
            let data = '';
            wikiRes.on('data', (chunk) => {
                data += chunk;
            });
            wikiRes.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
        }).on('error', (err) => {
            console.error('Error fetching Wikipedia data:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        });
    } else {
        // Serve your HTML file
        const htmlFile = fs.readFileSync('./index.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlFile);
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.error('Error starting the server:', err);
    }
    console.log(`Server is listening on port ${port}`);
});
