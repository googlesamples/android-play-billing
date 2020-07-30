!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).firebase=t()}(this,(function(){"use strict";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(t[r],n[r]));return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class t{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class n extends Error{constructor(e,t){super(t),this.code=e,this.name="FirebaseError",Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,r.prototype.create)}}class r{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,s=this.errors[e],a=s?function(e,t){return e.replace(i,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(s,r):"Error",c=`${this.serviceName}: ${a} (${o}).`,u=new n(o,c);for(const e of Object.keys(r))"_"!==e.slice(-1)&&(e in u&&console.warn(`Overwriting FirebaseError base field "${e}" can cause unexpected behavior.`),u[e]=r[e]);return u}}const i=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}get(e="[DEFAULT]"){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const e=new t;this.instancesDeferred.set(n,e);try{const t=this.getOrInitializeService(n);t&&e.resolve(t)}catch(e){}}return this.instancesDeferred.get(n).promise}getImmediate(e){const{identifier:t,optional:n}=Object.assign({identifier:"[DEFAULT]",optional:!1},e),r=this.normalizeInstanceIdentifier(t);try{const e=this.getOrInitializeService(r);if(!e){if(n)return null;throw Error(`Service ${this.name} is not available`)}return e}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService("[DEFAULT]")}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService(n);t.resolve(e)}catch(e){}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all(e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()))}isComponentSet(){return null!=this.component}getOrInitializeService(e){let t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return"[DEFAULT]"===e?void 0:e}(e)),this.instances.set(e,t)),t||null}normalizeInstanceIdentifier(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}}class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const u=[];var l;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(l||(l={}));const p={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},f=l.INFO,h={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},d=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=h[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class g{constructor(e){this.name=e,this._logLevel=f,this._logHandler=d,this._userLogHandler=null,u.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in l))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...e),this._logHandler(this,l.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...e),this._logHandler(this,l.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,l.INFO,...e),this._logHandler(this,l.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,l.WARN,...e),this._logHandler(this,l.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...e),this._logHandler(this,l.ERROR,...e)}}function m(e){u.forEach(t=>{t.setLogLevel(e)})}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const b=new r("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."}),v={"@firebase/app":"fire-core","@firebase/analytics":"fire-analytics","@firebase/auth":"fire-auth","@firebase/database":"fire-rtdb","@firebase/functions":"fire-fn","@firebase/installations":"fire-iid","@firebase/messaging":"fire-fcm","@firebase/performance":"fire-perf","@firebase/remote-config":"fire-rc","@firebase/storage":"fire-gcs","@firebase/firestore":"fire-fst","fire-js":"fire-js","firebase-wrapper":"fire-js-all"};
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class w{constructor(t,n,r){this.firebase_=r,this.isDeleted_=!1,this.INTERNAL={},this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=e(void 0,t),this.container=new c(n.name),this.container.addComponent(new s("app",()=>this,"PUBLIC"));for(const e of this.firebase_.INTERNAL.components.values())this.container.addComponent(e)}get automaticDataCollectionEnabled(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_}set automaticDataCollectionEnabled(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e}get name(){return this.checkDestroyed_(),this.name_}get options(){return this.checkDestroyed_(),this.options_}delete(){return new Promise(e=>{this.checkDestroyed_(),e()}).then(()=>(this.firebase_.INTERNAL.removeApp(this.name_),Promise.all(this.container.getProviders().map(e=>e.delete())))).then(()=>{this.isDeleted_=!0})}_getService(e,t="[DEFAULT]"){return this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})}checkDestroyed_(){if(this.isDeleted_)throw b.create("app-deleted",{appName:this.name_})}}const y=new g("@firebase/app");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function _(t){const n={},r=new Map,i={__esModule:!0,initializeApp:function(e,r={}){if("object"!=typeof r||null===r){r={name:r}}const s=r;void 0===s.name&&(s.name="[DEFAULT]");const{name:a}=s;if("string"!=typeof a||!a)throw b.create("bad-app-name",{appName:String(a)});if(o(n,a))throw b.create("duplicate-app",{appName:a});const c=new t(e,s,i);return n[a]=c,c},app:a,registerVersion:function(e,t,n){var r;let i=null!==(r=v[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void y.warn(e.join(" "))}c(new s(`${i}-version`,()=>({library:i,version:t}),"VERSION"))},setLogLevel:m,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw b.create("invalid-log-argument",{appName:name});!function(e,t){for(const n of u){let r=null;t&&t.level&&(r=p[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const o=i.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:l[n].toLowerCase(),message:o,args:i,type:t.name})}}}(e,t)},apps:null,SDK_VERSION:"7.17.1",INTERNAL:{registerComponent:c,removeApp:function(e){delete n[e]},components:r,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function a(e){if(!o(n,e=e||"[DEFAULT]"))throw b.create("no-app",{appName:e});return n[e]}function c(o){const s=o.name;if(r.has(s))return y.debug(`There were multiple attempts to register component ${s}.`),"PUBLIC"===o.type?i[s]:null;if(r.set(s,o),"PUBLIC"===o.type){const n=(e=a())=>{if("function"!=typeof e[s])throw b.create("invalid-app-argument",{appName:s});return e[s]()};void 0!==o.serviceProps&&e(n,o.serviceProps),i[s]=n,t.prototype[s]=function(...e){return this._getService.bind(this,s).apply(this,o.multipleInstances?e:[])}}for(const e of Object.keys(n))n[e]._addComponent(o);return"PUBLIC"===o.type?i[s]:null}return i.default=i,Object.defineProperty(i,"apps",{get:function(){return Object.keys(n).map(e=>n[e])}}),a.App=t,i}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const E=function(){const e=_(w);e.SDK_VERSION=`${e.SDK_VERSION}_LITE`;const t=e.INTERNAL.registerComponent;return e.INTERNAL.registerComponent=function(e){if("PUBLIC"===e.type&&"performance"!==e.name&&"installations"!==e.name)throw Error(`${name} cannot register with the standalone perf instance`);return t(e)},e}();function S(e){return Array.prototype.slice.call(e)}function T(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function A(e,t,n){var r,i=new Promise((function(i,o){T(r=e[t].apply(e,n)).then(i,o)}));return i.request=r,i}function N(e,t,n){var r=A(e,t,n);return r.then((function(e){if(e)return new P(e,r.request)}))}function O(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function C(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return A(this[t],r,arguments)})}))}function k(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function R(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return N(this[t],r,arguments)})}))}function L(e){this._index=e}function P(e,t){this._cursor=e,this._request=t}function D(e){this._store=e}function j(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function M(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new j(n)}function $(e){this._db=e}!function(e,t){e.INTERNAL.registerComponent(new s("platform-logger",e=>new I(e),"PRIVATE")),e.registerVersion("@firebase/app","0.6.9",t),e.registerVersion("fire-js","")}(E,"lite"),O(L,"_index",["name","keyPath","multiEntry","unique"]),C(L,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),R(L,"_index",IDBIndex,["openCursor","openKeyCursor"]),O(P,"_cursor",["direction","key","primaryKey","value"]),C(P,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(P.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,n),T(t._request).then((function(e){if(e)return new P(e,t._request)}))}))})})),D.prototype.createIndex=function(){return new L(this._store.createIndex.apply(this._store,arguments))},D.prototype.index=function(){return new L(this._store.index.apply(this._store,arguments))},O(D,"_store",["name","keyPath","indexNames","autoIncrement"]),C(D,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),R(D,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),k(D,"_store",IDBObjectStore,["deleteIndex"]),j.prototype.objectStore=function(){return new D(this._tx.objectStore.apply(this._tx,arguments))},O(j,"_tx",["objectStoreNames","mode"]),k(j,"_tx",IDBTransaction,["abort"]),M.prototype.createObjectStore=function(){return new D(this._db.createObjectStore.apply(this._db,arguments))},O(M,"_db",["name","version","objectStoreNames"]),k(M,"_db",IDBDatabase,["deleteObjectStore","close"]),$.prototype.transaction=function(){return new j(this._db.transaction.apply(this._db,arguments))},O($,"_db",["name","version","objectStoreNames"]),k($,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[D,L].forEach((function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var t=S(arguments),n=t[t.length-1],r=this._store||this._index,i=r[e].apply(r,t.slice(0,-1));i.onsuccess=function(){n(i.result)}})}))})),[L,D].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})}));const F=new r("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function U(e){return e instanceof n&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function B({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function q(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function x(e,t){const n=(await t.json()).error;return F.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function V({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function H(e,{refreshToken:t}){const n=V(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function K(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function z(e){return new Promise(t=>{setTimeout(t,e)})}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const W=/^[cdef][\w-]{21}$/;function G(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return W.test(t)?t:""}catch(e){return""}}function J(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Y=new Map;function Z(e,t){const n=J(e);Q(n,t),function(e,t){const n=ee();n&&n.postMessage({key:e,fid:t});te()}(n,t)}function Q(e,t){const n=Y.get(e);if(n)for(const e of n)e(t)}let X=null;function ee(){return!X&&"BroadcastChannel"in self&&(X=new BroadcastChannel("[Firebase] FID Change"),X.onmessage=e=>{Q(e.data.key,e.data.fid)}),X}function te(){0===Y.size&&X&&(X.close(),X=null)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ne="firebase-installations-store";let re=null;function ie(){return re||(re=function(e,t,n){var r=A(indexedDB,"open",[e,t]),i=r.request;return i&&(i.onupgradeneeded=function(e){n&&n(new M(i.result,e.oldVersion,i.transaction))}),r.then((function(e){return new $(e)}))}("firebase-installations-database",1,e=>{switch(e.oldVersion){case 0:e.createObjectStore(ne)}})),re}async function oe(e,t){const n=J(e),r=(await ie()).transaction(ne,"readwrite"),i=r.objectStore(ne),o=await i.get(n);return await i.put(t,n),await r.complete,o&&o.fid===t.fid||Z(e,t.fid),t}async function se(e){const t=J(e),n=(await ie()).transaction(ne,"readwrite");await n.objectStore(ne).delete(t),await n.complete}async function ae(e,t){const n=J(e),r=(await ie()).transaction(ne,"readwrite"),i=r.objectStore(ne),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await r.complete,!s||o&&o.fid===s.fid||Z(e,s.fid),s}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ce(e){let t;const n=await ae(e,n=>{const r=function(e){return pe(e||{fid:G(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(F.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=B(e),r=V(e),i={fid:t,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.15"},o={method:"POST",headers:r,body:JSON.stringify(i)},s=await K(()=>fetch(n,o));if(s.ok){const e=await s.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:q(e.authToken)}}throw await x("Create Installation",s)}(e,t);return oe(e,n)}catch(n){throw U(n)&&409===n.serverCode?await se(e):await oe(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ue(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ue(e){let t=await le(e);for(;1===t.registrationStatus;)await z(100),t=await le(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ce(e);return n||t}return t}function le(e){return ae(e,e=>{if(!e)throw F.create("installation-not-found");return pe(e)})}function pe(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function fe({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${B(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),i=H(e,n),o=t.getImmediate({optional:!0});o&&i.append("x-firebase-client",o.getPlatformInfoString());const s={installation:{sdkVersion:"w:0.4.15"}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await K(()=>fetch(r,a));if(c.ok){return q(await c.json())}throw await x("Generate Auth Token",c)}async function he(e,t=!1){let n;const r=await ae(e.appConfig,r=>{if(!ge(r))throw F.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await de(e.appConfig);for(;1===n.authToken.requestStatus;)await z(100),n=await de(e.appConfig);const r=n.authToken;return 0===r.requestStatus?he(e,t):r}(e,t),r;{if(!navigator.onLine)throw F.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await fe(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await oe(e.appConfig,r),n}catch(n){if(!U(n)||401!==n.serverCode&&404!==n.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await oe(e.appConfig,n)}else await se(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function de(e){return ae(e,e=>{if(!ge(e))throw F.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */})}function ge(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function me(e,t=!1){return await async function(e){const{registrationPromise:t}=await ce(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.appConfig),(await he(e,t)).token}async function be(e,t){const n=function(e,{fid:t}){return`${B(e)}/${t}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t),r={method:"DELETE",headers:H(e,t)},i=await K(()=>fetch(n,r));if(!i.ok)throw await x("Delete Installation",i)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ve({appConfig:e},t){return function(e,t){ee();const n=J(e);let r=Y.get(n);r||(r=new Set,Y.set(n,r)),r.add(t)}(e,t),()=>{!function(e,t){const n=J(e),r=Y.get(n);r&&(r.delete(t),0===r.size&&Y.delete(n),te())}(e,t)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function we(e){return F.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ye;(ye=E).INTERNAL.registerComponent(new s("installations",e=>{const t=e.getProvider("app").getImmediate(),n={appConfig:function(e){if(!e||!e.options)throw we("App Configuration");if(!e.name)throw we("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw we(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:()=>async function(e){const{installationEntry:t,registrationPromise:n}=await ce(e.appConfig);return n?n.catch(console.error):he(e).catch(console.error),t.fid}(n),getToken:e=>me(n,e),delete:()=>async function(e){const{appConfig:t}=e,n=await ae(t,e=>{if(!e||0!==e.registrationStatus)return e});if(n){if(1===n.registrationStatus)throw F.create("delete-pending-registration");if(2===n.registrationStatus){if(!navigator.onLine)throw F.create("app-offline");await be(t,n),await se(t)}}}(n),onIdChange:e=>ve(n,e)}},"PUBLIC")),ye.registerVersion("@firebase/installations","0.4.15");const _e=new r("performance","Performance",{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Ie,Ee,Se,Te;class Ae{constructor(e){if(this.window=e,!e)throw _e.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){this.performance&&this.performance.mark&&this.performance.mark(e)}measure(e,t,n){this.performance&&this.performance.measure&&this.performance.measure(e,t,n)}getEntriesByType(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]}getEntriesByName(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver(e=>{for(const n of e.getEntries())t(n)}).observe({entryTypes:[e]})}static getInstance(){return void 0===Ie&&(Ie=new Ae(Ee)),Ie}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ne(e,t){const n=e.length-t.length;if(n<0||n>1)throw _e.create("invalid String merger input");const r=[];for(let n=0;n<e.length;n++)r.push(e.charAt(n)),t.length>n&&r.push(t.charAt(n));return r.join("")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oe{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Ne("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Ne("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getAppId(){const e=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!e)throw _e.create("no app id");return e}getProjectId(){const e=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!e)throw _e.create("no project id");return e}getApiKey(){const e=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!e)throw _e.create("no api key");return e}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===Se&&(Se=new Oe),Se}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ce(){return Te}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var ke;!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.VISIBLE=1]="VISIBLE",e[e.HIDDEN=2]="HIDDEN"}(ke||(ke={}));const Re=["firebase_","google_","ga_"],Le=new RegExp("^[a-zA-Z]\\w*$");function Pe(){const e=Ae.getInstance().navigator;return"serviceWorker"in e?e.serviceWorker.controller?2:3:1}function De(){switch(Ae.getInstance().document.visibilityState){case"visible":return ke.VISIBLE;case"hidden":return ke.HIDDEN;default:return ke.UNKNOWN}}function je(){const e=Ae.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Me=new g("Performance");Me.logLevel=l.INFO;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const $e=!0;function Fe(e){const t=function(){const e=Ae.getInstance().localStorage;if(!e)return;const t=e.getItem("@firebase/performance/configexpire");if(!(t&&(n=t,Number(n)>Date.now())))return;var n;const r=e.getItem("@firebase/performance/config");if(!r)return;try{return JSON.parse(r)}catch(e){return}}();return t?(Ue(t),Promise.resolve()):function(e){return function(){const e=Oe.getInstance().installationsService.getToken();return e.then(e=>{}),e}().then(t=>{const n=`https://firebaseremoteconfig.googleapis.com/v1/projects/${Oe.getInstance().getProjectId()}/namespaces/fireperf:fetch?key=${Oe.getInstance().getApiKey()}`,r=new Request(n,{method:"POST",headers:{Authorization:`FIREBASE_INSTALLATIONS_AUTH ${t}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:t,app_id:Oe.getInstance().getAppId(),app_version:"0.3.10",sdk_version:"0.0.1"})});return fetch(r).then(e=>{if(e.ok)return e.json();throw _e.create("RC response not ok")})}).catch(()=>{Me.info("Could not fetch config, will use default configs")})}(e).then(Ue).then(e=>function(e){const t=Ae.getInstance().localStorage;if(!e||!t)return;t.setItem("@firebase/performance/config",JSON.stringify(e)),t.setItem("@firebase/performance/configexpire",String(Date.now()+60*Oe.getInstance().configTimeToLive*60*1e3))}(e),()=>{})}function Ue(e){if(!e)return e;const t=Oe.getInstance(),n=e.entries||{};return void 0!==n.fpr_enabled?t.loggingEnabled="true"===String(n.fpr_enabled):t.loggingEnabled=$e,n.fpr_log_source&&(t.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(t.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(t.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),t.logTraceAfterSampling=Be(t.tracesSamplingRate),t.logNetworkAfterSampling=Be(t.networkRequestsSamplingRate),e}function Be(e){return Math.random()<=e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let qe,xe=1;function Ve(){return xe=2,qe=qe||function(){const e=Ae.getInstance().document;return new Promise(t=>{if(e&&"complete"!==e.readyState){const n=()=>{"complete"===e.readyState&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()})}().then(()=>function(){const e=Oe.getInstance().installationsService.getId();return e.then(e=>{Te=e}),e}()).then(e=>Fe(e)).then(()=>He(),()=>He()),qe}function He(){xe=3}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Ke,ze=3,We=[],Ge=!1;function Je(e){setTimeout(()=>{if(0!==ze)return We.length?void function(){const e=[...We];We=[];const t=e.map(e=>({source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)}));(function(e,t){return function(e){const t=Oe.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}(e).then(e=>(e.ok||Me.info("Call to Firebase backend failed."),e.json())).then(e=>{const n=Number(e.nextRequestWaitMillis);let r=1e4;isNaN(n)||(r=Math.max(n,r));const i=e.logResponseDetails;Array.isArray(i)&&i.length>0&&"RETRY_REQUEST_LATER"===i[0].responseAction&&(We=[...t,...We],Me.info("Retry transport request later.")),ze=3,Je(r)})})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Oe.getInstance().logSource,log_event:t},e).catch(()=>{We=[...e,...We],ze--,Me.info(`Tries left: ${ze}.`),Je(1e4)})}():Je(1e4)},e)}function Ye(e){return(...t)=>{!function(e){if(!e.eventTime||!e.message)throw _e.create("invalid cc log");We=[...We,e]}({message:e(...t),eventTime:Date.now()})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ze(e,t){Ke||(Ke=Ye(et)),Ke(e,t)}function Qe(e){const t=Oe.getInstance();!t.instrumentationEnabled&&e.isAuto||(t.dataCollectionEnabled||e.isAuto)&&Ae.getInstance().requiredApisAvailable()&&(e.isAuto&&De()!==ke.VISIBLE||t.loggingEnabled&&t.logTraceAfterSampling&&(3===xe?Xe(e):Ve().then(()=>Xe(e),()=>Xe(e))))}function Xe(e){Ce()&&setTimeout(()=>Ze(e,1),0)}function et(e,t){return 0===t?function(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:tt(),network_request_metric:t};return JSON.stringify(n)}(e):function(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);const n=e.getAttributes();0!==Object.keys(n).length&&(t.custom_attributes=n);const r={application_info:tt(),trace_metric:t};return JSON.stringify(r)}(e)}function tt(){return{google_app_id:Oe.getInstance().getAppId(),app_instance_id:Ce(),web_app_info:{sdk_version:"0.3.10",page_url:Ae.getInstance().getUrl(),service_worker_status:Pe(),visibility_state:De(),effective_connection_type:je()},application_process_state:0}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const nt=["_fp","_fcp","_fid"];
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class rt{constructor(e,t=!1,n){this.name=e,this.isAuto=t,this.state=1,this.customAttributes={},this.counters={},this.api=Ae.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=n||`FB-PERF-TRACE-MEASURE-${this.randomId}-${this.name}`,n&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw _e.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw _e.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Qe(this)}record(e,t,n){if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const e of Object.keys(n.metrics))isNaN(Number(n.metrics[e]))||(this.counters[e]=Number(Math.floor(n.metrics[e])));Qe(this)}incrementMetric(e,t=1){void 0===this.counters[e]&&this.putMetric(e,0),this.counters[e]+=t}putMetric(e,t){if(!function(e,t){return!(0===e.length||e.length>100)&&(t&&t.startsWith("_wt_")&&nt.indexOf(e)>-1||!e.startsWith("_"))}(e,this.name))throw _e.create("invalid custom metric name",{customMetricName:e});this.counters[e]=t}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const n=function(e){return!(0===e.length||e.length>40)&&(!Re.some(t=>e.startsWith(t))&&!!e.match(Le))}(e),r=function(e){return 0!==e.length&&e.length<=100}(t);if(n&&r)this.customAttributes[e]=t;else{if(!n)throw _e.create("invalid attribute name",{attributeName:e});if(!r)throw _e.create("invalid attribute value",{attributeValue:t})}}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor(1e3*(t.startTime+this.api.getTimeOrigin())))}static createOobTrace(e,t,n){const r=Ae.getInstance().getUrl();if(!r)return;const i=new rt("_wt_"+r,!0),o=Math.floor(1e3*Ae.getInstance().getTimeOrigin());i.setStartTime(o),e&&e[0]&&(i.setDuration(Math.floor(1e3*e[0].duration)),i.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),i.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),i.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(t){const e=t.find(e=>"first-paint"===e.name);e&&e.startTime&&i.putMetric("_fp",Math.floor(1e3*e.startTime));const r=t.find(e=>"first-contentful-paint"===e.name);r&&r.startTime&&i.putMetric("_fcp",Math.floor(1e3*r.startTime)),n&&i.putMetric("_fid",Math.floor(1e3*n))}Qe(i)}static createUserTimingTrace(e){Qe(new rt(e,!1,e))}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function it(e){const t=e;if(!t||void 0===t.responseStart)return;const n=Ae.getInstance().getTimeOrigin(),r=Math.floor(1e3*(t.startTime+n)),i=t.responseStart?Math.floor(1e3*(t.responseStart-t.startTime)):void 0,o=Math.floor(1e3*(t.responseEnd-t.startTime));!function(e){const t=Oe.getInstance();if(!t.instrumentationEnabled)return;const n=e.url,r=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout(()=>Ze(e,0),0)}({url:t.name&&t.name.split("?")[0],responsePayloadBytes:t.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ot(){Ce()&&(setTimeout(()=>function(){const e=Ae.getInstance(),t=e.getEntriesByType("navigation"),n=e.getEntriesByType("paint");if(e.onFirstInputDelay){let r=setTimeout(()=>{rt.createOobTrace(t,n),r=void 0},5e3);e.onFirstInputDelay(e=>{r&&(clearTimeout(r),rt.createOobTrace(t,n,e))})}else rt.createOobTrace(t,n)}(),0),setTimeout(()=>function(){const e=Ae.getInstance(),t=e.getEntriesByType("resource");for(const e of t)it(e);e.setupObserver("resource",it)}(),0),setTimeout(()=>function(){const e=Ae.getInstance(),t=e.getEntriesByType("measure");for(const e of t)st(e);e.setupObserver("measure",st)}(),0))}function st(e){const t=e.name;"FB-PERF-TRACE-MEASURE"!==t.substring(0,"FB-PERF-TRACE-MEASURE".length)&&rt.createUserTimingTrace(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class at{constructor(e){this.app=e,Ae.getInstance().requiredApisAvailable()?(Ge||(Je(5500),Ge=!0),Ve().then(ot,ot)):Me.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}trace(e){return new rt(e)}set instrumentationEnabled(e){Oe.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return Oe.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){Oe.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return Oe.getInstance().dataCollectionEnabled}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e){const t=(e,t)=>{if("[DEFAULT]"!==e.name)throw _e.create("FB not default");if("undefined"==typeof window)throw _e.create("no window");return function(e){Ee=e}(window),Oe.getInstance().firebaseAppInstance=e,Oe.getInstance().installationsService=t,new at(e)};e.INTERNAL.registerComponent(new s("performance",e=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations").getImmediate();return t(n,r)},"PUBLIC")),e.registerVersion("@firebase/performance","0.3.10")}(E);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return E.registerVersion("firebase","7.17.1","lite"),E}));
//# sourceMappingURL=firebase-performance-standalone.es2017.js.map
