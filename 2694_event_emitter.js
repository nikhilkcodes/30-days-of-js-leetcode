class EventEmitter {
    constructor() {
      // Create an object to store event subscriptions
      this.subscriptions = {};
    }
  
    subscribe(event, cb) {
      // Check if the event already has subscribers
      if (!this.subscriptions[event]) {
        // If not, initialize it as an empty array
        this.subscriptions[event] = [];
      }
  
      // Add the callback function to the list of subscribers for this event
      this.subscriptions[event].push(cb);
  
      // Return an object with an "unsubscribe" method
      const unsubscribe = () => {
        // Remove the callback from the list of subscribers
        const index = this.subscriptions[event].indexOf(cb);
        if (index !== -1) {
          this.subscriptions[event].splice(index, 1);
        }
      };
  
      return { unsubscribe };
    }
  
    emit(event, args = []) {
      // Check if there are subscribers for this event
      if (this.subscriptions[event]) {
        // Initialize an array to store the results
        const results = [];
  
        // Loop through the subscribers and call each callback
        this.subscriptions[event].forEach((cb) => {
          // Call the callback with the provided arguments
          const result = cb(...args);
          results.push(result);
        });
  
        // Return an array of results
        return results;
      } else {
        // If there are no subscribers, return an empty array
        return [];
      }
    }
  }
  