
(function() {

    var decrunchWorker = new Worker('crunch-worker.js');
    var decrunchCallbacks = [];
    decrunchWorker.onmessage = function(msg) {
      decrunchCallbacks[msg.data.callbackID](msg.data.data);
      console.log('decrunched ' + msg.data.filename + ' in ' + msg.data.time + ' ms, ' + msg.data.data.length + ' bytes');
      decrunchCallbacks[msg.data.callbackID] = null;
    };
    function requestDecrunch(filename, data, callback) {
      decrunchWorker.postMessage({
        filename: filename,
        data: new Uint8Array(data),
        callbackID: decrunchCallbacks.length
      });
      decrunchCallbacks.push(callback);
    }

  if (typeof Module == 'undefined') Module = {};
  if (!Module['preRun']) Module['preRun'] = [];
  Module["preRun"].push(function() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'packages', true, true);
Module['FS_createPath']('/packages', 'base', true, true);
Module['FS_createPath']('/packages', 'gk', true, true);
Module['FS_createPath']('/packages/gk', 'cyber', true, true);
Module['FS_createPath']('/packages/gk/cyber', 'glow_colors', true, true);
Module['FS_createPath']('/packages/gk/cyber', 'cyberskydark', true, true);
Module['FS_createPath']('/packages/gk/cyber', 'cybersky', true, true);
Module['FS_createPath']('/packages/gk/cyber', 'plain_colors', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);
        if (this.crunched) {
          var ddsHeader = byteArray.subarray(0, 128);
          var that = this;
          requestDecrunch(this.name, byteArray.subarray(128), function(ddsData) {
            byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
            byteArray.set(ddsHeader, 0);
            byteArray.set(ddsData, 128);
            that.finish(byteArray);
          });
        } else {
          this.finish(byteArray);
        }
      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Runtime.warn('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 497714, 0, 0).open('GET', '/packages/base/cyber1.ogz');
    new DataRequest(497714, 498018, 0, 0).open('GET', '/packages/base/cyber1.cfg');
    new DataRequest(498018, 516314, 0, 0).open('GET', '/packages/base/cyber1.wpt');
    new DataRequest(516314, 524176, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/glow_color_01_sc.png');
    new DataRequest(524176, 529549, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/glow_color_box_01_gc.png');
    new DataRequest(529549, 539126, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/glow_color_box_01_cc.png');
    new DataRequest(539126, 545270, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/Thumbs.db');
    new DataRequest(545270, 548128, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/glow_color_05.png');
    new DataRequest(548128, 550987, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/glow_color_04.png');
    new DataRequest(550987, 552740, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/package.cfg');
    new DataRequest(552740, 555599, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/glow_color_03.png');
    new DataRequest(555599, 558456, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/glow_color_nm.png');
    new DataRequest(558456, 561317, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/glow_color_01.png');
    new DataRequest(561317, 564177, 0, 0).open('GET', '/packages/gk/cyber/glow_colors/glow_color_02.png');
    new DataRequest(564177, 1394899, 0, 0).open('GET', '/packages/gk/cyber/cyberskydark/gkskycyber_lf.png');
    new DataRequest(1394899, 2232646, 0, 0).open('GET', '/packages/gk/cyber/cyberskydark/gkskycyber_bk.png');
    new DataRequest(2232646, 2973622, 0, 0).open('GET', '/packages/gk/cyber/cyberskydark/gkskycyber_up.png');
    new DataRequest(2973622, 3719171, 0, 0).open('GET', '/packages/gk/cyber/cyberskydark/gkskycyber_dn.png');
    new DataRequest(3719171, 4536045, 0, 0).open('GET', '/packages/gk/cyber/cyberskydark/gkskycyber_rt.png');
    new DataRequest(4536045, 5365260, 0, 0).open('GET', '/packages/gk/cyber/cyberskydark/gkskycyber_ft.png');
    new DataRequest(5365260, 5550942, 0, 0).open('GET', '/packages/gk/cyber/cybersky/gkskycyber_rt.jpg');
    new DataRequest(5550942, 5737454, 0, 0).open('GET', '/packages/gk/cyber/cybersky/gkskycyber_bk.jpg');
    new DataRequest(5737454, 5923105, 0, 0).open('GET', '/packages/gk/cyber/cybersky/gkskycyber_lf.jpg');
    new DataRequest(5923105, 6106539, 0, 0).open('GET', '/packages/gk/cyber/cybersky/gkskycyber_ft.jpg');
    new DataRequest(6106539, 6280953, 0, 0).open('GET', '/packages/gk/cyber/cybersky/gkskycyber_up.jpg');
    new DataRequest(6280953, 6439530, 0, 0).open('GET', '/packages/gk/cyber/cybersky/gkskycyber_dn.jpg');
    new DataRequest(6439530, 6442390, 0, 0).open('GET', '/packages/gk/cyber/plain_colors/plain_color_02_cc.png');
    new DataRequest(6442390, 6445251, 0, 0).open('GET', '/packages/gk/cyber/plain_colors/plain_color_04_cc.png');
    new DataRequest(6445251, 6448111, 0, 0).open('GET', '/packages/gk/cyber/plain_colors/plain_color_03_cc.png');
    new DataRequest(6448111, 6455973, 0, 0).open('GET', '/packages/gk/cyber/plain_colors/plain_color_01_sc.png');
    new DataRequest(6455973, 6459557, 0, 0).open('GET', '/packages/gk/cyber/plain_colors/Thumbs.db');
    new DataRequest(6459557, 6461108, 0, 0).open('GET', '/packages/gk/cyber/plain_colors/package.cfg');
    new DataRequest(6461108, 6463967, 0, 0).open('GET', '/packages/gk/cyber/plain_colors/plain_color_01_cc.png');
    new DataRequest(6463967, 6466827, 0, 0).open('GET', '/packages/gk/cyber/plain_colors/plain_color_05_cc.png');
    new DataRequest(6466827, 6469684, 0, 0).open('GET', '/packages/gk/cyber/plain_colors/plain_color_nm.png');

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'four.data';
    var REMOTE_PACKAGE_NAME = 'four.data';
    var PACKAGE_UUID = '8dc7b05c-92c3-4441-a4c6-7e9dd766b7e6';
  
    function fetchRemotePackage(packageName, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        if (event.loaded && event.total) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: event.total
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
      // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though.
      var ptr = Module['_malloc'](byteArray.length);
      Module['HEAPU8'].set(byteArray, ptr);
      DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
          DataRequest.prototype.requests["/packages/base/cyber1.ogz"].onload();
          DataRequest.prototype.requests["/packages/base/cyber1.cfg"].onload();
          DataRequest.prototype.requests["/packages/base/cyber1.wpt"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/glow_color_01_sc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/glow_color_box_01_gc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/glow_color_box_01_cc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/Thumbs.db"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/glow_color_05.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/glow_color_04.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/glow_color_03.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/glow_color_nm.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/glow_color_01.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/glow_colors/glow_color_02.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cyberskydark/gkskycyber_lf.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cyberskydark/gkskycyber_bk.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cyberskydark/gkskycyber_up.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cyberskydark/gkskycyber_dn.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cyberskydark/gkskycyber_rt.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cyberskydark/gkskycyber_ft.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cybersky/gkskycyber_rt.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cybersky/gkskycyber_bk.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cybersky/gkskycyber_lf.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cybersky/gkskycyber_ft.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cybersky/gkskycyber_up.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/cybersky/gkskycyber_dn.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/plain_colors/plain_color_02_cc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/plain_colors/plain_color_04_cc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/plain_colors/plain_color_03_cc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/plain_colors/plain_color_01_sc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/plain_colors/Thumbs.db"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/plain_colors/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/plain_colors/plain_color_01_cc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/plain_colors/plain_color_05_cc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/cyber/plain_colors/plain_color_nm.png"].onload();
          Module['removeRunDependency']('datafile_four.data');

    };
    Module['addRunDependency']('datafile_four.data');

    function handleError(error) {
      console.error('package error:', error);
    };
  
    if (!Module.preloadResults)
      Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      fetchRemotePackage(REMOTE_PACKAGE_NAME, processPackageData, handleError);
      });

  if (!Module['postRun']) Module['postRun'] = [];
  Module["postRun"].push(function() {
    decrunchWorker.terminate();
  });

})();

