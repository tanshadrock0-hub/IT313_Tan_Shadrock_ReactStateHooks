# IT 313 - Lab Timer & Practice Tracker

## Problem

Students need an application to track solved practice problems
and the time spent working during laboratory sessions.

## Features

- Increment the solved counter.
- Reset the solved counter without resetting the timer.
- Display "Great job!" after solving five problems.
- Start and stop the stopwatch.
- Display elapsed time in MM:SS format.
- Display Running or Paused status.

## React Concepts

- useState: Manages application state.
- useEffect: Runs the stopwatch interval.
- Cleanup function: Clears the interval.
- Conditional rendering: Displays messages based on state.
- Event handling: Responds to button presses.
- Lifting state up: Shares state through the parent component.
- Custom hook: useStopwatch manages timer logic.

## Project Structure

- App.js
- components/PracticeTracker.js
- components/Stopwatch.js
- hooks/useStopwatch.js

## How to Run

1. Install Node.js and npm.
2. Open a terminal in the project folder.
3. Run npm install.
4. Run npx expo start.
5. Open Expo Go on your phone.
6. Scan the QR code.

## Testing

1. Verify the initial counter is zero.
2. Solve five problems and verify "Great job!" appears.
3. Reset the counter.
4. Start the stopwatch and verify it counts up.
5. Stop the stopwatch and verify it pauses.
6. Verify that Reset does not affect the timer.
