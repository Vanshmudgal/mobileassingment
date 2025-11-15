Project Summary

This project is a fully modular, visually polished React Native profile UI, built directly from a provided Figma design. The focus was on clean layout, consistent spacing, modern design patterns, and performance-friendly components. The app is entirely UI-driven using mocked data, enabling fast iteration and accurate representation of the original Figma layout.

🔹 Design Decisions

Built strictly following the Figma UI, matching layout, spacing, and color theme.

Structured the screen with modular components (Header, Bio, Stats, Grid, BottomNav).

Used expo-image for optimized rendering, caching, and fast image load performance.

Followed a clean, modern design language with the accent color #0F766E.

Implemented Ionicons for a consistent icon system across the interface.

🔹 Mocking Approach

Used a local mockData object to simulate posts, clips, and tagged images.

Used Unsplash image URLs to create realistic placeholder content.

Handled tab switching with useState to imitate real UX interactions.

Entire screen is built with static data, no backend dependency.

🔹 Tradeoffs

No backend or API integration — everything is UI + static mock data.

No fallback UI for image failures or slow networks.

Custom bottom navigation instead of a full navigation system.

Grid and components are static/not optimized for large datasets.

🔹 Future Improvements

Add real notification features (alerts, badges, activity).

Create fallback UI for images (skeleton loaders, retry, placeholder states).

Add performance optimizations (memoization, lazy image loading, better caching).

Integrate an actual backend (Supabase/Firebase) for real profile data.

Add advanced scalability optimizations like asset preloading and network-aware image handling.

▶️ How to Run the Project
1️⃣ Install Dependencies
npm install


or

yarn

2️⃣ Start the Expo Development Server
npx expo start

3️⃣ Run on a Device or Emulator

iPhone (Recommended):
Install Expo Go → Scan the QR code

Android Emulator:
Press a in the terminal

Web Preview:
Press w in the terminal
