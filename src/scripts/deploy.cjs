// Simple deploy script for GitHub Pages
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// Ensure dist directory exists
const distPath = path.join(__dirname, "../../dist");
if (!fs.existsSync(distPath)) {
  console.error("Error: dist directory does not exist. Run build first.");
  process.exit(1);
}

// Create .nojekyll file to prevent GitHub from ignoring files that begin with an underscore
fs.writeFileSync(path.join(distPath, ".nojekyll"), "");

// Copy index.html to 404.html for SPA routing
fs.copyFileSync(
  path.join(distPath, "index.html"),
  path.join(distPath, "404.html")
);

// Deploy using gh-pages
const ghPages = require("gh-pages");
ghPages.publish(
  distPath,
  {
    branch: "gh-pages",
    message: "Auto-deployed to GitHub Pages",
  },
  (err) => {
    if (err) {
      console.error("Error deploying to GitHub Pages:", err);
      process.exit(1);
    }
    console.log("Successfully deployed to GitHub Pages!");
  }
);
