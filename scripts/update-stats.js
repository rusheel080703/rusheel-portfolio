// Import necessary Node.js modules
const https = require('https');
const fs = require('fs');
const path = require('path');

// Your GitHub username
const GITHUB_USERNAME = 'rusheel080703';

// Path to the output JSON file
const OUTPUT_PATH = path.join(__dirname, '..', 'github_stats.json');

// Options for GitHub API request
const options = {
    hostname: 'api.github.com',
    path: `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
    method: 'GET',
    headers: {
        'User-Agent': 'Node.js script', // GitHub API requires a User-Agent header
    }
};

// Main function to execute the task
async function fetchAndSaveStats() {
    console.log('Starting data fetch from GitHub API...');

    // Create a Promise to handle the HTTPS request
    const promise = new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            
            // Receive data in chunks
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            // On end, process all the received data
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(new Error('Failed to parse JSON response from GitHub'));
                    }
                } else {
                    reject(new Error(`GitHub API Error: Status ${res.statusCode}\n${data}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });

    try {
        // Wait for data from API
        const repos = await promise;
        
        if (!Array.isArray(repos)) {
            throw new Error('API response is not an array of repositories.');
        }

        console.log(`Found ${repos.length} repositories.`);

        // Count language usage
        const langStats = {};
        repos.forEach(repo => {
            if (repo.language) {
                // If language exists, increment count; otherwise start at 1
                langStats[repo.language] = (langStats[repo.language] || 0) + 1;
            }
        });

        console.log('Language statistics:', langStats);

        // Write data to github_stats.json
        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(langStats, null, 2));
        console.log(`Successfully saved statistics to ${OUTPUT_PATH}`);

    } catch (error) {
        console.error('An error occurred:', error.message);
        process.exit(1); // Exit with error code
    }
}

// Run the main function
fetchAndSaveStats();