## Prepare

    npm install eslint --save-dev

## Emberfire

Install emberfire

    ember install emberfire

configure firebase in `config/environment.js`:

    firebase: 'https://YOUR-FIREBASE-NAME.firebaseio.com/',

    firebase: 'https://glowing-fire-5225.firebaseio.com/',
## Torii

Install:

    ember install torii  

Add adapter to integrate torii with firebase.

    mkdir app/torii-adapters/

```javascript
// app/torii-adapters/application.js

import Ember from 'ember';  
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({  
  firebase: Ember.inject.service()
});
```
