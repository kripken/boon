
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
Module['FS_createPath']('/packages', 'gk', true, true);
Module['FS_createPath']('/packages/gk', 'future', true, true);
Module['FS_createPath']('/packages/gk/future', 'skysfJPG', true, true);
Module['FS_createPath']('/packages/gk', 'modern', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_01', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_07', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_06', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_04', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_08', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_05', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_02', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_03', true, true);

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
      new DataRequest(0, 169198, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_rt.jpg');
    new DataRequest(169198, 347129, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_ft.jpg');
    new DataRequest(347129, 454583, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_up.jpg');
    new DataRequest(454583, 653127, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_bk.jpg');
    new DataRequest(653127, 848325, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_dn.jpg');
    new DataRequest(848325, 1019298, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_lf.jpg');
    new DataRequest(1019298, 1019965, 0, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_01/package.cfg');
    new DataRequest(1019965, 1020632, 0, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_07/package.cfg');
    new DataRequest(1020632, 1021896, 0, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_06/package.cfg');
    new DataRequest(1021896, 1022563, 0, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_04/package.cfg');
    new DataRequest(1022563, 1023230, 0, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_08/package.cfg');
    new DataRequest(1023230, 1023897, 0, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_05/package.cfg');
    new DataRequest(1023897, 1024564, 0, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_02/package.cfg');
    new DataRequest(1024564, 1025231, 0, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_03/package.cfg');
    new DataRequest(1025231, 1275377, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.dds');
    new DataRequest(1275377, 1705000, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.dds');
    new DataRequest(1705000, 1772961, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.dds');
    new DataRequest(1772961, 1843163, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.dds');
    new DataRequest(1843163, 1881293, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.dds');
    new DataRequest(1881293, 1919718, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.dds');
    new DataRequest(1919718, 2048317, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.dds');
    new DataRequest(2048317, 2180599, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.dds');
    new DataRequest(2180599, 2218584, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.dds');
    new DataRequest(2218584, 2257362, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.dds');
    new DataRequest(2257362, 2514839, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.dds');
    new DataRequest(2514839, 2773166, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.dds');
    new DataRequest(2773166, 3029566, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.dds');
    new DataRequest(3029566, 3287059, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.dds');
    new DataRequest(3287059, 3325309, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.dds');
    new DataRequest(3325309, 3363472, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.dds');
    new DataRequest(3363472, 3495579, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.dds');
    new DataRequest(3495579, 3628438, 1, 0).open('GET', '/packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.dds');

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'modern.data';
    var REMOTE_PACKAGE_NAME = 'modern.data';
    var PACKAGE_UUID = '3d45eb23-db8f-42ae-aa2d-9363d2e412f9';
  
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
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_rt.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_ft.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_up.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_bk.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_dn.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_lf.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_07/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_06/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_04/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_08/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_05/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_02/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_03/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.dds"].onload();
          Module['removeRunDependency']('datafile_modern.data');

    };
    Module['addRunDependency']('datafile_modern.data');

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

