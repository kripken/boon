
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
Module['FS_createPath']('/packages/gk', 'fantasy', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_roof_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v03', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_plaster_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v02', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_plates_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_planks_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v02', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_intersection_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'skyfantasyJPG', true, true);

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
      new DataRequest(0, 4195600, 0, 0).open('GET', '/packages/base/two_towers.ogz');
    new DataRequest(4195600, 4196688, 0, 0).open('GET', '/packages/base/two_towers.cfg');
    new DataRequest(4196688, 4213217, 0, 0).open('GET', '/packages/base/two_towers.wpt');
    new DataRequest(4213217, 4213688, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');
    new DataRequest(4213688, 4214127, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/package.cfg');
    new DataRequest(4214127, 4214846, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/package.cfg');
    new DataRequest(4214846, 4215645, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');
    new DataRequest(4215645, 4216443, 0, 0).open('GET', '/packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');
    new DataRequest(4216443, 4217162, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v03/package.cfg');
    new DataRequest(4217162, 4217609, 0, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');
    new DataRequest(4217609, 4218033, 0, 0).open('GET', '/packages/gk/fantasy/package.cfg');
    new DataRequest(4218033, 4218752, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/package.cfg');
    new DataRequest(4218752, 4218952, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/package.cfg');
    new DataRequest(4218952, 4219624, 0, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/package.cfg');
    new DataRequest(4219624, 4220326, 0, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/package.cfg');
    new DataRequest(4220326, 4221060, 0, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');
    new DataRequest(4221060, 4221499, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v02/package.cfg');
    new DataRequest(4221499, 4221958, 0, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');
    new DataRequest(4221958, 4340572, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds');
    new DataRequest(4340572, 4359430, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds');
    new DataRequest(4359430, 4477394, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds');
    new DataRequest(4477394, 4496162, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds');
    new DataRequest(4496162, 4527046, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds');
    new DataRequest(4527046, 4557473, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds');
    new DataRequest(4557473, 4587847, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds');
    new DataRequest(4587847, 4606468, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds');
    new DataRequest(4606468, 4621330, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds');
    new DataRequest(4621330, 4635409, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds');
    new DataRequest(4635409, 5054210, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.jpg');
    new DataRequest(5054210, 5173257, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds');
    new DataRequest(5173257, 5204322, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds');
    new DataRequest(5204322, 5320872, 1, 0).open('GET', '/packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.dds');
    new DataRequest(5320872, 5351667, 1, 0).open('GET', '/packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.dds');
    new DataRequest(5351667, 5380576, 1, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds');
    new DataRequest(5380576, 5408929, 1, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds');
    new DataRequest(5408929, 5439789, 1, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds');
    new DataRequest(5439789, 5470227, 1, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds');
    new DataRequest(5470227, 5535241, 1, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds');
    new DataRequest(5535241, 5600366, 1, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds');
    new DataRequest(5600366, 5615244, 1, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds');
    new DataRequest(5615244, 5629954, 1, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds');
    new DataRequest(5629954, 5712795, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg');
    new DataRequest(5712795, 5862234, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg');
    new DataRequest(5862234, 6018680, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg');
    new DataRequest(6018680, 6204131, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg');
    new DataRequest(6204131, 6357966, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg');
    new DataRequest(6357966, 6507028, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg');

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'medium.data';
    var REMOTE_PACKAGE_NAME = 'medium.data';
    var PACKAGE_UUID = 'aa2ecea2-2e5e-4a46-b4f2-7346b39db6db';
  
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
          DataRequest.prototype.requests["/packages/base/two_towers.ogz"].onload();
          DataRequest.prototype.requests["/packages/base/two_towers.cfg"].onload();
          DataRequest.prototype.requests["/packages/base/two_towers.wpt"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v03/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_plaster_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v02/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_trim_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_plates_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_planks_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v02/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_intersection_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg"].onload();
          Module['removeRunDependency']('datafile_medium.data');

    };
    Module['addRunDependency']('datafile_medium.data');

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

