# angular-single-page-build
In this repository I have a document in which I have explained that how can we build angular app in a single file

1)	Install ngx-build-plus in project:
https://github.com/manfredsteyer/ngx-build-plus
follow the above url to install ngx-build-plus and configure project.

2)	Build Project:
To simply build project without custom elements Run the following command
ng build --prod --extraWebpackConfig webpack.partial.js --output-hashing none --single-bundle true --bundle-styles false.
You can also add all that flags in build command in package.json file

You might get error of ‘zone.js’ not found after prod build. To resolve this issue import ‘zone.js’ in ‘main.ts’ file.

```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'zone.js'
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  ```
  
3)	Configure index.html:
Place configuration object in a script tag in index.html. This object contains required attributes and other info for our own widget testing.

4)	Add a widget js file in src folder and import js and css bundles to html header.

5)	Configure widget js for deploy:
In “angular.json” file add “{widgetname}.js” file in “assets” array. This will put our widget js file in dist folder while build.

