
class EventEmitter {
  subscribers: object;

  constructor() {
    this.subscribers = {}
  }

  // Publisher:
  emit(eventName, data) {
    // return if event is not subscribed
    if (!Array.isArray(this.subscribers[eventName]) || this.subscribers[eventName].length == 0) {
      return
    }

    // Whenever you publish any event, it will trigger callback for all stored event in subscriber object
    this.subscribers[eventName].forEach((callback) => {
      callback(data)
    })
  }

  // Subscriber
  on(eventName, callback) {

    if (!Array.isArray(this.subscribers[eventName])) {
      this.subscribers[eventName] = []
    }
    this.subscribers[eventName].push(callback);

    // TODO: this will fail if two different subscribers try to unsub, because the index positions will have changed after the first one
    // so we should do this part better somehow
    const index = this.subscribers[eventName].length - 1
    return {
      unsubscribe() {
        this.subscribers[eventName].splice(index, 1);
      },
    }
  }
}

export default EventEmitter;
