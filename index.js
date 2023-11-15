import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
// const port = process.env.PORT
const port = 3000;

// Set up a static route to serve static files (like index.html)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    // Send the HTML file using res.sendFile()
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
