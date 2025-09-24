# Development Setup - Madurai Golden Oils

## CSS Warnings (Tailwind CSS)

If you see warnings like "Unknown at rule @tailwind" or "Unknown at rule @apply" in your IDE, these are **expected and harmless**. They occur because:

1. **Standard CSS parsers** don't recognize Tailwind's custom directives
2. **PostCSS with Tailwind plugin** processes these directives during build
3. **The application works perfectly** despite these warnings

## Recommended VS Code Setup

### Required Extensions
Install these extensions to eliminate CSS warnings:

1. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
   - Provides autocomplete for Tailwind classes
   - Eliminates @tailwind/@apply warnings
   - Shows color previews and documentation

2. **Prettier** (`esbenp.prettier-vscode`)
   - Code formatting
   - Consistent code style

3. **TypeScript** (`ms-vscode.vscode-typescript-next`)
   - Enhanced TypeScript support

### VS Code Settings (Optional)
To eliminate CSS warnings locally, you can create a `.vscode/settings.json` file with:

```json
{
  "css.validate": false,
  "css.lint.unknownAtRules": "ignore"
}
```

**Note**: This file is gitignored to avoid conflicts between different development environments.

## Project Structure

```
src/
├── contexts/          # React Context (Cart, etc.)
├── components/        # Reusable UI components
├── pages/            # Page components
├── utils/            # Utility functions
├── assets/           # Images and static files
└── index.css         # Tailwind CSS + Custom styles
```

## Build Process

1. **Development**: `npm run dev`
   - Vite dev server with hot reload
   - PostCSS processes Tailwind directives
   - CSS warnings are normal in IDE

2. **Production**: `npm run build`
   - Tailwind CSS is properly processed
   - All @tailwind/@apply directives are resolved
   - Generated CSS is standard CSS

## Troubleshooting CSS Warnings

If CSS warnings persist:

1. **Install Tailwind CSS extension** (most effective)
2. **Restart VS Code** after installing extensions
3. **Reload window**: Ctrl+Shift+P → "Developer: Reload Window"
4. **Check extension is active**: Look for Tailwind icon in status bar

## Technical Notes

- **PostCSS Config**: `postcss.config.js` includes Tailwind plugin
- **Tailwind Config**: `tailwind.config.ts` with custom theme
- **CSS Processing**: Vite + PostCSS handles Tailwind directives
- **Line-clamp**: Custom Tailwind plugin for text truncation

The application is fully functional regardless of IDE CSS warnings!
