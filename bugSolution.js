The solution involves using Firebase's transaction functionality to ensure atomic updates. Transactions guarantee that either all operations within the transaction succeed, or none do. This prevents partial updates and data inconsistency. The code below demonstrates the use of transactions:

```javascript
// Get a reference to the database location
const dbRef = firebase.database().ref('/data');

dbRef.transaction(function(currentData) {
  if (currentData === null) {
    return {
      counter: 1,
      value: 'initial value'
    };
  } else {
    currentData.counter++;
    return currentData;
  }
});
```
This approach ensures that the updates are executed atomically, resolving the race condition.