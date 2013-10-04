
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
Module['FS_createPath']('/packages', 'models', true, true);
Module['FS_createPath']('/packages/models', 'ffflag', true, true);
Module['FS_createPath']('/packages/models', 'ffpit', true, true);
Module['FS_createPath']('/packages/models', 'screen0', true, true);
Module['FS_createPath']('/packages/models', 'screen1', true, true);
Module['FS_createPath']('/packages/models', 'screen2', true, true);
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
      new DataRequest(0, 395236, 0, 0).open('GET', '/packages/base/colos.ogz');
    new DataRequest(395236, 396541, 0, 0).open('GET', '/packages/base/colos.cfg');
    new DataRequest(396541, 408005, 0, 0).open('GET', '/packages/base/colos.wpt');
    new DataRequest(408005, 408257, 0, 0).open('GET', '/packages/models/ffflag/md5.cfg');
    new DataRequest(408257, 580009, 1, 0).open('GET', '/packages/models/ffflag/ffflag_cc.dds');
    new DataRequest(580009, 734842, 1, 0).open('GET', '/packages/models/ffflag/ffflag_nm.dds');
    new DataRequest(734842, 891455, 1, 0).open('GET', '/packages/models/ffflag/ffflag_sc.dds');
    new DataRequest(891455, 914876, 0, 0).open('GET', '/packages/models/ffflag/ffflag.md5mesh');
    new DataRequest(914876, 1006631, 0, 0).open('GET', '/packages/models/ffflag/ffflag.md5anim');
    new DataRequest(1006631, 1006911, 0, 0).open('GET', '/packages/models/ffpit/md5.cfg');
    new DataRequest(1006911, 1072221, 1, 0).open('GET', '/packages/models/ffpit/ffpit_01_gk_sc.dds');
    new DataRequest(1072221, 1139508, 1, 0).open('GET', '/packages/models/ffpit/ffpit_01_gk_nm.dds');
    new DataRequest(1139508, 1207504, 1, 0).open('GET', '/packages/models/ffpit/ffpit_01_gk_cc.dds');
    new DataRequest(1207504, 1252701, 0, 0).open('GET', '/packages/models/ffpit/ffpit.md5mesh');
    new DataRequest(1252701, 1252764, 0, 0).open('GET', '/packages/models/screen0/obj.cfg');
    new DataRequest(1252764, 1255234, 0, 0).open('GET', '/packages/models/screen0/skin.jpg');
    new DataRequest(1255234, 1255641, 0, 0).open('GET', '/packages/models/screen0/tris.obj');
    new DataRequest(1255641, 1255704, 0, 0).open('GET', '/packages/models/screen1/obj.cfg');
    new DataRequest(1255704, 1258174, 0, 0).open('GET', '/packages/models/screen1/skin.jpg');
    new DataRequest(1258174, 1258581, 0, 0).open('GET', '/packages/models/screen1/tris.obj');
    new DataRequest(1258581, 1258644, 0, 0).open('GET', '/packages/models/screen2/obj.cfg');
    new DataRequest(1258644, 1261114, 0, 0).open('GET', '/packages/models/screen2/skin.jpg');
    new DataRequest(1261114, 1261521, 0, 0).open('GET', '/packages/models/screen2/tris.obj');
    new DataRequest(1261521, 1261992, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');
    new DataRequest(1261992, 1262431, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/package.cfg');
    new DataRequest(1262431, 1263150, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/package.cfg');
    new DataRequest(1263150, 1263949, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');
    new DataRequest(1263949, 1264747, 0, 0).open('GET', '/packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');
    new DataRequest(1264747, 1265466, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v03/package.cfg');
    new DataRequest(1265466, 1265913, 0, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');
    new DataRequest(1265913, 1266337, 0, 0).open('GET', '/packages/gk/fantasy/package.cfg');
    new DataRequest(1266337, 1267056, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/package.cfg');
    new DataRequest(1267056, 1267256, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/package.cfg');
    new DataRequest(1267256, 1267928, 0, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/package.cfg');
    new DataRequest(1267928, 1268630, 0, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/package.cfg');
    new DataRequest(1268630, 1269364, 0, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');
    new DataRequest(1269364, 1269803, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v02/package.cfg');
    new DataRequest(1269803, 1270262, 0, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');
    new DataRequest(1270262, 1389167, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds');
    new DataRequest(1389167, 1459328, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds');
    new DataRequest(1459328, 1577942, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds');
    new DataRequest(1577942, 1596800, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds');
    new DataRequest(1596800, 1627684, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds');
    new DataRequest(1627684, 1658111, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds');
    new DataRequest(1658111, 1688485, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds');
    new DataRequest(1688485, 1707106, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds');
    new DataRequest(1707106, 1721968, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds');
    new DataRequest(1721968, 1736047, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds');
    new DataRequest(1736047, 1855094, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds');
    new DataRequest(1855094, 1886159, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds');
    new DataRequest(1886159, 1915068, 1, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds');
    new DataRequest(1915068, 1943421, 1, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds');
    new DataRequest(1943421, 1974281, 1, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds');
    new DataRequest(1974281, 2004719, 1, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds');
    new DataRequest(2004719, 2069733, 1, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds');
    new DataRequest(2069733, 2134858, 1, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds');
    new DataRequest(2134858, 2149736, 1, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds');
    new DataRequest(2149736, 2164446, 1, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds');
    new DataRequest(2164446, 2171907, 1, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds');
    new DataRequest(2171907, 2201023, 1, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds');
    new DataRequest(2201023, 2283864, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg');
    new DataRequest(2283864, 2433303, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg');
    new DataRequest(2433303, 2589749, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg');
    new DataRequest(2589749, 2775200, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg');
    new DataRequest(2775200, 2929035, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg');
    new DataRequest(2929035, 3078097, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg');

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'low.data';
    var REMOTE_PACKAGE_NAME = 'low.data';
    var PACKAGE_UUID = '87c6012f-ce66-4454-a5c4-f43623e15ff2';
  
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
          DataRequest.prototype.requests["/packages/base/colos.ogz"].onload();
          DataRequest.prototype.requests["/packages/base/colos.cfg"].onload();
          DataRequest.prototype.requests["/packages/base/colos.wpt"].onload();
          DataRequest.prototype.requests["/packages/models/ffflag/md5.cfg"].onload();
          DataRequest.prototype.requests["/packages/models/ffflag/ffflag_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/models/ffflag/ffflag_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/models/ffflag/ffflag_sc.dds"].onload();
          DataRequest.prototype.requests["/packages/models/ffflag/ffflag.md5mesh"].onload();
          DataRequest.prototype.requests["/packages/models/ffflag/ffflag.md5anim"].onload();
          DataRequest.prototype.requests["/packages/models/ffpit/md5.cfg"].onload();
          DataRequest.prototype.requests["/packages/models/ffpit/ffpit_01_gk_sc.dds"].onload();
          DataRequest.prototype.requests["/packages/models/ffpit/ffpit_01_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/models/ffpit/ffpit_01_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/models/ffpit/ffpit.md5mesh"].onload();
          DataRequest.prototype.requests["/packages/models/screen0/obj.cfg"].onload();
          DataRequest.prototype.requests["/packages/models/screen0/skin.jpg"].onload();
          DataRequest.prototype.requests["/packages/models/screen0/tris.obj"].onload();
          DataRequest.prototype.requests["/packages/models/screen1/obj.cfg"].onload();
          DataRequest.prototype.requests["/packages/models/screen1/skin.jpg"].onload();
          DataRequest.prototype.requests["/packages/models/screen1/tris.obj"].onload();
          DataRequest.prototype.requests["/packages/models/screen2/obj.cfg"].onload();
          DataRequest.prototype.requests["/packages/models/screen2/skin.jpg"].onload();
          DataRequest.prototype.requests["/packages/models/screen2/tris.obj"].onload();
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
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg"].onload();
          Module['removeRunDependency']('datafile_low.data');

    };
    Module['addRunDependency']('datafile_low.data');

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

