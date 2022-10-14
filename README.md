# JotaiAndroidDestroyed

This project is the minimum reproducible project for the Jotai issue with atomWithStorage inside a Provider on Android when the activity is destroyed.

# Setup

Follow this Android dev setup in: https://reactnative.dev/docs/environment-setup

# How to run the app

- `yarn`
- `yarn start`
- `yarn android`

# How to repro the Jotai issue

- Turn on `Don't keep activities` developer settings (this simulates the app being killed by the OS to free up memory everytime you move away from the app e.g. back, open other app, sleep, etc...)
- Open the app
- Increment the counter
- Press the back button (or swipe left if no OS back button)
- Open the app again
- Notice the "Count" is 0 but the "Count from storage" is 1
- Force close the app
- Open the app again
- Now "Count" has the proper value (i.e. 1)

