# No Sweets App

An Expo React Native app that tracks your location in the background and sends a push notification whenever you're within **100 meters** of a grocery store or restaurant — reminding you of your no-sweets goal and suggesting **low-cholesterol, no-heartburn** healthy snacks.

---

## Features

- Background GPS tracking using `expo-location` + `expo-task-manager`
- Detects grocery stores and restaurants via Google Places API
- Push notifications with snack suggestions (tap to open full list)
- 30-minute cooldown per location to avoid alert spam
- Day counter and progress bar for your 30-day challenge
- All snacks are low-cholesterol and avoid heartburn triggers

---

## Requirements

- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- A physical iOS or Android device (background location does not work on simulators)
- A **Google Places API key** (free tier works for personal use)

---

## Setup

### 1. Install dependencies

```bash
cd no-sweets-app
npm install
```

### 2. Add your Google Places API key

Create a `.env` file in the project root:

```
GOOGLE_PLACES_API_KEY=your_key_here
```

Or edit `src/constants.ts` and replace `'YOUR_GOOGLE_PLACES_API_KEY'` directly.

To get a key:
1. Go to https://console.cloud.google.com
2. Create a project and enable the **Places API**
3. Generate an API key under Credentials

### 3. Install Expo Go on your phone

Download **Expo Go** from the App Store (iOS) or Google Play (Android).

### 4. Start the development server

```bash
npx expo start
```

Scan the QR code with your phone camera (iOS) or the Expo Go app (Android).

---

## Building for Production (optional)

To install as a standalone app on your phone:

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to your Expo account
eas login

# Build for iOS (requires Apple Developer account)
eas build --platform ios

# Build for Android (generates APK you can sideload)
eas build --platform android
```

---

## Important: Background Location on iOS

iOS requires explicit permission for background location. When prompted:
1. Choose **"Allow Always"** — not "While Using"
2. If you chose "While Using" by mistake, go to:
   `Settings > Privacy > Location Services > No Sweets > Always`

---

## Adding `@react-native-async-storage/async-storage`

This package is required for cooldown tracking. Install it:

```bash
npx expo install @react-native-async-storage/async-storage
```

---

## File Structure

```
no-sweets-app/
├── App.tsx                  # Root app, navigation, notification listeners
├── app.json                 # Expo config (permissions, plugins)
├── package.json
├── babel.config.js
└── src/
    ├── constants.ts         # Geofence radius, cooldown, API key, challenge dates
    ├── snacks.ts            # Snack data (low-cholesterol, no heartburn)
    ├── locationTask.ts      # Background location task + Places API query
    ├── notifications.ts     # Push notification setup and sending
    ├── HomeScreen.tsx       # Main screen: progress, toggle, tips
    └── SnacksScreen.tsx     # Snack suggestions screen (opened via notification tap)
```

---

## Challenge Details

- **Start date:** March 9, 2026
- **Duration:** 30 days
- **All snacks:** low-cholesterol, no known heartburn triggers (no fried food, no spicy, no citrus, no chocolate)
