# Modern Portfolio

A sleek, modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Sanity CMS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 📝 Content managed through Sanity CMS
- 🎨 Styled with Tailwind CSS
- 🔍 Image optimization with Next.js Image
- 🌙 Dark mode by default
- 📱 Mobile-first approach

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **CMS:** [Sanity](https://www.sanity.io/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Sanity account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AhmedQassemDev2004/Portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Sanity Studio Setup

1. Start the Sanity Studio:
```bash
npm run sanity dev
# or
yarn sanity dev
```

2. Open [http://localhost:3333](http://localhost:3333) to access the Sanity Studio.

## Project Structure

```
├── app/                 # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions and types
├── public/            # Static assets
├── sanity/            # Sanity configuration and schemas
└── styles/            # Global styles
```

## Customization

### Content Management
All content is managed through Sanity CMS. You can modify:
- About section
- Projects
- Skills
- Contact information

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Typography
- Layout components
- Animations

## Deployment

The easiest way to deploy your portfolio is using Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Ahmed Qassem - [@qassem041](https://instagram.com/qassem041) - ahmedqasem043@gmail.com

Project Link: [https://github.com/AhmedQassemDev2004/portfolio](https://github.com/AhmedQassemDev2004/portfolio)
