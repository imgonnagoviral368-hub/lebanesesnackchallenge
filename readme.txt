LEBANESE SNACK CHALLENGE — TOTAL COMPLETED PLAYS COUNTER

WHAT IT DOES
- Shows the shared total at the top of the game.
- Adds 1 each time somebody finishes all five snack ratings and reaches the results screen.
- Counts every completed play, including replays by the same person.
- The counter label is translated when the player switches between English and Arabic.
- The total is stored with Netlify Blobs, so it is shared across visitors/devices and persists between deployments.

DEPLOY
1. Open your Netlify site dashboard.
2. Open the site's Deploys page.
3. Upload/deploy the contents of this folder as the new site version (index.html, package.json, and netlify/functions/play-count.mjs must keep these paths).
4. Netlify should install @netlify/blobs and deploy the function automatically.
5. After deployment, open the site and finish one full game to test the counter.

IMPORTANT
This is a completed-play counter, not a unique-person counter. Refreshing or opening the site does not add a play; finishing the five ratings does. Every replay that reaches the results screen adds another play.

The existing live site is not changed until these files are deployed to Netlify.
