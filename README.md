# JotaiAndroidDestroyed

This project is the minimum reproducible project for the Jotai issue with atomWithStorage inside a Provider on Android when the activity is destroyed.

# Setup

Follow this Android dev setup in: https://reactnative.dev/docs/environment-setup

# How to run the app

- `yarn`
- `yarn start`
- `yarn android`

# How to repro the Jotai issue

- Turn on `Don't keep activities` developer settings (this simulates the app being killed by the OS to free up memory every time you move away from the app e.g. back, open other app, sleep, etc...)
- Open the app
- Increment both counters
- Press the back button (or swipe left if no OS back button)
- Open the app again
- Notice the "Count" in Inside Provider is 0 but the "Count from storage" is 1, while both counts are correct for the Outside Counter
- Force close the app
- Open the app again
- Now all counts are 1

# Demo

https://user-images.githubusercontent.com/1479283/196188664-d211a8cd-1811-4c0b-9028-20b47d9dde5e.mp4

# Used libraries

- [MMKV](https://github.com/mrousavy/react-native-mmkv) v2.4.3 for sync storage
- Jotai v1.8.5
