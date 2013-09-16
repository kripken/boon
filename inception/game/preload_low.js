
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
Module['FS_createPath']('/packages/models', 'screen', true, true);
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
      new DataRequest(0, 420966, 0, 0).open('GET', '/packages/base/colos.ogz');
    new DataRequest(420966, 422170, 0, 0).open('GET', '/packages/base/colos.cfg');
    new DataRequest(422170, 433634, 0, 0).open('GET', '/packages/base/colos.wpt');
    new DataRequest(433634, 433886, 0, 0).open('GET', '/packages/models/ffflag/md5.cfg');
    new DataRequest(433886, 604636, 1, 0).open('GET', '/packages/models/ffflag/ffflag_cc.dds');
    new DataRequest(604636, 759469, 1, 0).open('GET', '/packages/models/ffflag/ffflag_nm.dds');
    new DataRequest(759469, 916082, 1, 0).open('GET', '/packages/models/ffflag/ffflag_sc.dds');
    new DataRequest(916082, 939503, 0, 0).open('GET', '/packages/models/ffflag/ffflag.md5mesh');
    new DataRequest(939503, 1031258, 0, 0).open('GET', '/packages/models/ffflag/ffflag.md5anim');
    new DataRequest(1031258, 1031538, 0, 0).open('GET', '/packages/models/ffpit/md5.cfg');
    new DataRequest(1031538, 1096848, 1, 0).open('GET', '/packages/models/ffpit/ffpit_01_gk_sc.dds');
    new DataRequest(1096848, 1164135, 1, 0).open('GET', '/packages/models/ffpit/ffpit_01_gk_nm.dds');
    new DataRequest(1164135, 1232131, 1, 0).open('GET', '/packages/models/ffpit/ffpit_01_gk_cc.dds');
    new DataRequest(1232131, 1277328, 0, 0).open('GET', '/packages/models/ffpit/ffpit.md5mesh');
    new DataRequest(1277328, 1277391, 0, 0).open('GET', '/packages/models/screen/obj.cfg');
    new DataRequest(1277391, 1279861, 0, 0).open('GET', '/packages/models/screen/skin.jpg');
    new DataRequest(1279861, 1280268, 0, 0).open('GET', '/packages/models/screen/tris.obj');
    new DataRequest(1280268, 1280739, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');
    new DataRequest(1280739, 1281178, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/package.cfg');
    new DataRequest(1281178, 1281897, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/package.cfg');
    new DataRequest(1281897, 1282696, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');
    new DataRequest(1282696, 1283494, 0, 0).open('GET', '/packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');
    new DataRequest(1283494, 1284213, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v03/package.cfg');
    new DataRequest(1284213, 1284660, 0, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');
    new DataRequest(1284660, 1285084, 0, 0).open('GET', '/packages/gk/fantasy/package.cfg');
    new DataRequest(1285084, 1285803, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/package.cfg');
    new DataRequest(1285803, 1286003, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/package.cfg');
    new DataRequest(1286003, 1286675, 0, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/package.cfg');
    new DataRequest(1286675, 1287377, 0, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/package.cfg');
    new DataRequest(1287377, 1288111, 0, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');
    new DataRequest(1288111, 1288550, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v02/package.cfg');
    new DataRequest(1288550, 1289009, 0, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');
    new DataRequest(1289009, 1407914, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds');
    new DataRequest(1407914, 1478075, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds');
    new DataRequest(1478075, 1596689, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds');
    new DataRequest(1596689, 1615547, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds');
    new DataRequest(1615547, 1646431, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds');
    new DataRequest(1646431, 1676858, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds');
    new DataRequest(1676858, 1707232, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds');
    new DataRequest(1707232, 1725853, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds');
    new DataRequest(1725853, 1740715, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds');
    new DataRequest(1740715, 1754794, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds');
    new DataRequest(1754794, 1873841, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds');
    new DataRequest(1873841, 1904906, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds');
    new DataRequest(1904906, 1933815, 1, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds');
    new DataRequest(1933815, 1962168, 1, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds');
    new DataRequest(1962168, 1993028, 1, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds');
    new DataRequest(1993028, 2023466, 1, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds');
    new DataRequest(2023466, 2088480, 1, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds');
    new DataRequest(2088480, 2153605, 1, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds');
    new DataRequest(2153605, 2168483, 1, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds');
    new DataRequest(2168483, 2183193, 1, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds');
    new DataRequest(2183193, 2190654, 1, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds');
    new DataRequest(2190654, 2219770, 1, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds');
    new DataRequest(2219770, 2302611, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg');
    new DataRequest(2302611, 2452050, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg');
    new DataRequest(2452050, 2608496, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg');
    new DataRequest(2608496, 2793947, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg');
    new DataRequest(2793947, 2947782, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg');
    new DataRequest(2947782, 3096844, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg');

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'low.data';
    var REMOTE_PACKAGE_NAME = 'low.data';
    var PACKAGE_UUID = 'b0abd48d-c64f-4373-b6a2-a5a1a3293c8d';
  
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
          DataRequest.prototype.requests["/packages/models/screen/obj.cfg"].onload();
          DataRequest.prototype.requests["/packages/models/screen/skin.jpg"].onload();
          DataRequest.prototype.requests["/packages/models/screen/tris.obj"].onload();
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

