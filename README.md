# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, inspired by professional portfolio designs.

## Features

- 🎨 **Modern Design**: Clean and professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized for speed and performance
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML
- 📧 **Contact Form**: Functional contact form with validation
- 🌙 **Dark Theme**: Beautiful dark theme with accent colors

## Sections

1. **Hero Section**: Introduction with profile image and call-to-action buttons
2. **About Section**: Personal information, skills, and experience
3. **Projects Section**: Showcase of featured and all projects
4. **Contact Section**: Contact form and contact information

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic HTML structure
- **CSS3**: Custom styles and animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):

   - Replace "Your Name" with your actual name
   - Update the profile image URL
   - Modify the title and description
   - Update social media links

2. **About Section** (`src/components/About.js`):

   - Update the about text
   - Modify skills and their proficiency levels
   - Update experience statistics
   - Add/remove technologies

3. **Projects Section** (`src/components/Projects.js`):

   - Replace project data with your own projects
   - Update project images, descriptions, and links
   - Add/remove projects as needed

4. **Contact Section** (`src/components/Contact.js`):
   - Update email address
   - Modify location information
   - Update social media links

### Styling

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Main accent color
      secondary: '#1F2937',  // Secondary color
      accent: '#10B981',     // Accent color
    },
  },
},
```

### Images

Replace placeholder images with your own:

- Profile photo in the Hero section
- Project screenshots in the Projects section
- Any other images used throughout the site

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build your project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure your domain

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/portfolio"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## File Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or contact me.

---

**Happy coding! 🚀**
