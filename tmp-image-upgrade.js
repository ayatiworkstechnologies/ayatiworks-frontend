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
        } else if (file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('d:\\ayati\\ayatiworks-frontend\\src\\app\\components');

let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Check if there is an <img tag
    if (/<img\b/i.test(content)) {
        // Replace <img with <Image width={800} height={800}
        content = content.replace(/<img\b/gi, '<Image width={800} height={800}');
        
        // Ensure "next/image" is imported
        if (!content.includes('next/image')) {
            // Find the last import statment and add it after
            const lastImportIndex = content.lastIndexOf('import ');
            if (lastImportIndex !== -1) {
                const endOfLine = content.indexOf('\n', lastImportIndex);
                content = content.substring(0, endOfLine + 1) + 'import Image from "next/image";\n' + content.substring(endOfLine + 1);
            } else {
                // If no imports, add at the top after "use client" if it exists
                if (content.includes('"use client"')) {
                    content = content.replace('"use client";', '"use client";\nimport Image from "next/image";');
                } else {
                    content = 'import Image from "next/image";\n' + content;
                }
            }
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
        console.log(`Updated: ${file}`);
    }
});

console.log(`\nComplete! Modified ${modifiedCount} files.`);
