/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as app from "tns-core-modules/application";

if (app.android) {
  app.android.on(
    app.AndroidApplication.activityCreatedEvent,
    function(args: app.AndroidActivityBundleEventData) {
      console.log('test');
      let policy = new android.os.StrictMode.ThreadPolicy.Builder()
        .permitAll()
        .build();
      android.os.StrictMode.setThreadPolicy(policy);
    }
  );
}



app.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
