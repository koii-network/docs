---
title: Events
description: Finnie Solana provider implements EventEmitter API. The following are the events that will be emitted
image: img/thumbnail.png
sidebar_label: Events
---

## accountChanged

Finnie will emit accountChanged when the user switches to an another account. This is how you can listen to the events on your app:

```javascript
window.k2.on('accountChanged', (publicKey: PublicKey) => {
    if (publicKey) {
        // switched account is already connected
        const address = publicKey.toString()
        console.log(`Switched to account '${publicKey.toString()}'`)
    } else {
        // Reconnect
        try {
            const connectedPublickey = await window.solana.connect()
        } catch (error) {
            // request rejected
        }
    }
});
```