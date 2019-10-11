const myPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve('dog');
  }, 100);
});

myPromise.then(result => {
  console.log('promise: ', result);
})

const myObservable = new Rx.Observable(observer => {
  setTimeout(() => {
    observer.next('dog');
    observer.next('cat');
    observer.next('bird');
  }, 100);
});

const subscription = myObservable
  // .filter(result => result === 'bird')
  .subscribe(result => {
    console.log('observable: ', result);
  });

// subscription.unsubscribe();
