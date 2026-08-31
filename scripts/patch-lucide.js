const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../node_modules/lucide-react/dist/cjs/lucide-react.js');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Revert previous mock if present
  const mockTarget = 'const LucideContext = (react.createContext || (() => ({ Provider: ({ children }) => children })))({});';
  const originalTarget = 'const LucideContext = react.createContext({});';
  if (content.includes(mockTarget)) {
    content = content.replace(mockTarget, originalTarget);
  }
  
  // Prepend "use client"; to the top of the file
  if (!content.startsWith('"use client";') && !content.startsWith("'use client';")) {
    content = '"use client";\n' + content;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully patched lucide-react with "use client"; directive!');
  } else {
    console.log('lucide-react is already patched with "use client";');
  }
} else {
  console.log('lucide-react entry point not found at:', filePath);
}
