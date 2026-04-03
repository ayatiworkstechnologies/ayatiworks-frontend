const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('d:\\ayati\\ayatiworks-frontend\\src\\app');

let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Very naive regex for <video ...> missing a track
    // If <video> exists, but no <track, let's just do a basic warning.
    // Actually, let's do a simple regex:
    // replacing <video ... /> with <video ...><track kind="captions" /></video>
    
    // Find all <video ... /> self closing tags
    const selfClosingVideoRegex = /<video([^>]*)?\/>/gi;
    content = content.replace(selfClosingVideoRegex, '<video$1><track kind="captions" /></video>');

    // Find <video>...</video> blocks that DON'T have <track
    // This is harder with regex, but we know most were self closing.
    
    // Also iframe missing title:
    const iframeMissingTitleRegex = /<iframe(?!.*?\btitle=.*?)([^>]*)?\/>/sgi;
    content = content.replace(iframeMissingTitleRegex, '<iframe title="Embedded Content" $1/>');
    
    // For normal iframe closing tag
    const iframeMissingTitleRegex2 = /<iframe(?!.*?\btitle=.*?)([^>]*)>(.*?)<\/iframe>/sgi;
    content = content.replace(iframeMissingTitleRegex2, '<iframe title="Embedded Content" $1>$2</iframe>');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
        console.log(`Updated video/iframe accessibility: ${file}`);
    }
});

console.log(`\nComplete! Modified ${modifiedCount} files.`);
