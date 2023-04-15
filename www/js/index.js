/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
 

function onDeviceReady() {
    alert('device ready');
     //var ref = cordova.InAppBrowser.open('http://192.168.0.104:3333/', '_blank', 'hidenavigationbuttons=yes,location=no,toolbar=no,zoom=no,fullscreen=yes,mediaPlaybackRequiresUserAction=no,allowInlineMediaPlayback=yes');
    
     var baseApp = document.getElementById('baseApp');
     baseApp.onclick = function() {
        var ref = cordova.InAppBrowser.open('https://pongvarid.github.io/lionfienessmockup/', '_blank', 'hidenavigationbuttons=yes,location=no,toolbar=no,zoom=no,fullscreen=yes,mediaPlaybackRequiresUserAction=no,allowInlineMediaPlayback=yes');
        ref.addEventListener('loadstart', function(event) {
            if (event.url.match("https://www.google.com")) {
                
                window.open('https://pongvarid.github.io/lionfienessmockup/#/about', '_system', 'location=yes');  
            }
        });
    };

     var about = document.getElementById('aboutApp');
     aboutApp.onclick = function() {
            window.open('https://pongvarid.github.io/lionfienessmockup/#/about', '_system', 'location=yes');
        };
 
} 

 