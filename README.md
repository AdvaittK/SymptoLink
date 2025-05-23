# SymptoLink 🏥

<div align="center">
  
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

</div>

## 📋 Overview

SymptoLink is a comprehensive healthcare platform that helps users understand their symptoms, find potential diagnoses, locate nearby healthcare providers, and access emergency information. It leverages AI for symptom analysis and provides a user-friendly interface for managing health-related information.

<div align="center">
  
  <!-- You can add a screenshot/GIF of your application here -->
  <!-- ![SymptoLink Demo](public/images/demo.gif) -->
  
</div>

## ✨ Features

- **🔍 Symptom Checker:** Get AI-powered analysis of possible conditions, recommendations, and descriptions
- **👨‍⚕️ Find Doctors:** Search for healthcare providers based on location, specialty, and other criteria
- **🚨 Emergency Information:** Quick access to emergency contacts and resources
- **🔐 User Authentication:** Secure login and registration using Firebase Authentication
- **🌐 Internationalization:** Multi-language support for global accessibility
- **🌓 Theme Switching:** Light and dark mode for comfortable viewing
- **📱 Responsive Design:** Adapts seamlessly to various screen sizes

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Authentication:** Firebase Authentication
- **Database:** Firestore
- **AI:** OpenAI (via Vercel AI SDK)
- **State Management:** React Context API
- **Package Manager:** pnpm

## 📁 Project Structure

```
symptolink/
├── app/                    # Next.js App Router directories
│   ├── api/                # API routes (AI diagnosis, etc.)
│   ├── emergency/          # Emergency information page
│   ├── find-doctors/       # Doctor search functionality
│   ├── login/              # Authentication pages
│   └── symptoms/           # Symptom analysis page
├── components/             # React components
│   ├── ui/                 # UI component library (shadcn/ui)
│   ├── auth-provider.tsx   # Authentication context provider
│   ├── doctor-list.tsx     # Doctor search results list
│   └── ...                 # Other components
├── lib/                    # Utility functions and services
│   ├── api/                # API client functions
│   ├── firebase/           # Firebase configuration and helpers
│   └── utils.ts            # General utility functions
├── public/                 # Static assets
└── styles/                 # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.0.0 or later)
- pnpm (version 8.0.0 or later)
- Firebase project with Authentication enabled
- OpenAI API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/symptolink.git
   cd symptolink
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
   NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID

   # OpenAI API Key
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY

   # Optional: Google Maps API Key
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Available Scripts

- `pnpm dev` - Run the development server
- `pnpm build` - Build for production
- `pnpm start` - Start the production server
- `pnpm lint` - Lint the codebase

## 🚢 Deployment Options

### Vercel (Recommended)

1. Create an account on [Vercel](https://vercel.com/)
2. Connect your GitHub repository
3. Configure environment variables
4. Deploy with a single click

### Docker

```bash
# Build the Docker image
docker build -t symptolink .

# Run the container
docker run -p 3000:3000 -e NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_KEY -e OPENAI_API_KEY=YOUR_KEY symptolink
```

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init
pnpm build
firebase deploy
```

## 🔧 Customization

### Adding Languages

Update the translator component in `components/translator.tsx` to add support for additional languages.

### Theme Customization

Modify `tailwind.config.ts` to customize colors, fonts, and other design elements.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Firebase](https://firebase.google.com/) - Backend services
- [OpenAI](https://openai.com/) - AI capabilities
