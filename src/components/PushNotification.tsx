import { useState } from 'react';

function PushNotification() {
  const [subscription, setSubscription] = useState(null);
    
  async function handleSubscribe() {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: 'BGDLrVxXg0OF7gXsK0mUi6eKjcjJG37ZBl_sd22oB8xytYuLnrx3bePUbG1haBBdRNxTZvjmMjrPkdfTawaCTms',
      };

      const pushSubscription = await registration.pushManager.subscribe(subscribeOptions);
      setSubscription(pushSubscription as any);

      await fetch('https://rezayari.ir:8000/subscribe', {
        method: 'POST',
        body: JSON.stringify(pushSubscription),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }

  return <div>{subscription ? <p>Subscribed to push notifications!</p> : <button onClick={handleSubscribe}>Subscribe to push notifications</button>}</div>;
}

export default PushNotification;
