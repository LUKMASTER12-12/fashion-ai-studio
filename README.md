# AI Fashion Studio

![AI Fashion Studio](./public/ai-fashion-studio.png)

## Overview

AI Fashion Studio is a revolutionary SaaS platform that helps fashion brands create professional photoshoots featuring AI-generated models. Upload your clothing items, select diverse AI models, customize backgrounds, and generate high-quality fashion photos in minutes instead of weeks.

## Key Features

- **Product Upload**: Intuitive drag-and-drop upload interface for clothing items
- **AI Model Selection**: Browse and filter diverse AI models by ethnicity, body type, and style
- **Background Customization**: Library of professional settings and backdrops
- **Preview & Generate**: Interactive preview with real-time adjustments
- **Export Options**: Multiple resolution downloads and sharing capabilities

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/onwp/fashion-ai-studio.git
   cd ai-fashion-studio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   VITE_FAL_KEY=your_fal_ai_key
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Create a New Photoshoot**
   - Navigate to the dashboard and click "Create New Photoshoot"
   - Upload your product images
   - Select AI models and backgrounds
   - Preview and adjust as needed
   - Generate your AI fashion photos

2. **Export and Share**
   - Download your generated images in various formats
   - Share directly to social media
   - Get embed codes for your website

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- Fal.ai API for AI image generation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please visit our website.
