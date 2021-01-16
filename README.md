# BudgetTracker
For the budget Tracker app, I created, and manifest.webmanifest, service-worker.js, and a db.js file. In the webmanifest file i created an object which held the name of the app, the images used in the app, and the color theme for the app, that would be inserted into the index.html of the app. The next file i created was the service-worker.js. In the service-worker.js file i cached the index.js, index.html, api.js, and styles.css files. After that i created 3 self.addEventlistener functions. The first one for the "install" event. This installs the needed cached files, while the  "activate" event activates the service worker. The final self.addEventlistener is for fetch. The fetch event, gets the cached files, and updates them with the new versions of the files that have been updated. The final file that i created was the db.js file. This file creates a database using indexedDB to store information directly into the web browser of the users choice. The onupgradeNeeded method upgrades the database, when the creatObjectStore creates a new store called transactions. After that function i created the request.onsuccess for if the navigator.onLine, is online. The database will be checked using the checkDataBase() function. If not onLine the request.onerror function will console.log an error message. My next function is the saveRecord function. Which saves the newly made transaction into the ObjectStore, and adds it using the store.add(record) function. The checkDatabase function checks the transactions that were made, and stored into the ObjectStore. then uses the getAll variable to take the stored transactions. Once all the transactions have been received. The getAll.onsuccess = function() uses an if statement for if a transaction is greater than 0. The information can be fetched and posted in the app. The .then functions are used for if you the transaction was successful you can open it in your database. The store.clear() function clears your transactions out of the database. Finally the window.addEventListener("online", checkDatabase). Returns the app back to an online state.
