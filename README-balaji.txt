** Balaji Notes

State JSON

https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json


COMPARIOSN url dataprep vs original angular2-seed
https://github.com/balajic/dataprep/compare/master...mgechev:master?diff=split&name=master#diff-02aeed42126d9e2bd48df8e67b14fe98

=======================================================================================================================================
Fixing the Build issue in ng2-material fork
=======================================================================================================================================
** Install Python 2.7 if you haven't installed before
git clone https://github.com/mgechev/angular2-seed (Original angular2-seed)
delete src folder

copy app folder from ng2-material(https://github.com/justindujardin/angular2-seed/) seed into this and rename it as src
********* Not Required**** rename bootstrap.ts -> main.ts
********* Not Required**** Change the "bootstrap.ts" reference in index.html system.import bootstrap => main
overwrite index.html from ng2-seed. It has the better loading mechanism.

Add/modify the following in package.json

"angular2": "2.0.0-beta.0",  (It will say beta 1)
"ng2-material": "0.1.0",   (Latest 0.2.2)

** Install the tsd package
npm install tsd

** Now pull down all the node modules
npm install

npm run build.prod

=======================================================================================================================================
Notes:
=======================================================================================================================================
Look at the new index.html. It uses System.js only for dev.. For production everything including templates html compiled into one .js file

"build.prod" All the tasks listed under this is defined in tools\task folder under seoparate file.

build.assets.prod.ts -> is the one copies the assets folder.. Excludes the .css, .ts & .js. Everything gets copied into APP_SRC folder

addding a new gulp task (Example copying the font file)
   create a file like build.prod.font.ts under tools\tasks and call the same in gulp "build.prod" task sequence.
   alter tavively you can as well add task directly in gulp.ts and call the same in "build.prod" task
  
  
 fixing build bug with ng2.beta 6
 https://github.com/angular/angular/issues/7001
 angular2/src/facade/async.js
 line 11: var fromPromise_1 = require('rxjs/observable/PromiseObservable');  

=======================================================================================================================================
KDB Queries
=======================================================================================================================================
** State table preparation
http://108.35.124.68:5001/?state:`state xasc select distinct state:Physician_Profile_State from PRFL


=======================================================================================================================================
Creating Service that connects to KDB
=======================================================================================================================================
Create a Service class and import Http, Injectable as well as RxJs map
  Add the member function which access the Web service and return http.get.map() in it. Let the Component subscribe to it

Go back to main.ts/bootstrap.ts Import HTTP_PROVIDERS, ServiceClass and add pass it to the bootstarp function

In the Component class, just import the Service Class and inject it to the constructor.
  Subscribe to the Service class memeber function which retunrs the Observable and assign the output to a Data Model in the Component Class
  Just use the data model in the Component HTML