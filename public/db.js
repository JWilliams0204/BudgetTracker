let DB;

const request = window.indexedDB.open("budget", 1);

request.onupgradeNeeded = function(event) {
    const db = event.target.result;
    db.createobjectStore("transactions", {autoIncrement: true});
};

request.onsuccess = function(event) {
    db = event.target.result;
    if (navigator.onLine) {
        checkDatabase()
    };
};

request.onerror = function(event) {
    console.log("Error" + event.target.errorCode);
};

function saveRecord(record) {
    const transaction = db.transaction(["transactions"], "readwrite");
    const store = transaction.objectStore("transactions");
    store.add(Record);

    
}

function checkDatabase() {
    const transaction = db.transaction(["transactions"], "readwrite");
    const store = transaction.objectStore("transactions");
    const getAll = store.getAll();
    getAll.onsuccess = function() {
        if (getAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "content-type": "application/json"
                }
            })
            .then(response => response.json())
            .then(() => { const transaction = db.transaction(["transaction"], "readwrite");
            const store = transaction.objectStore("transactions");
            store.clear();
        });
        
    };

    };
};

window.addEventListener("online", checkDatabase);

    