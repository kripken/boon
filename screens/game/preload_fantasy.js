
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
Module['FS_createPath']('/packages/gk', 'fantasy', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'skyfantasy', true, true);
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
      new DataRequest(0, 14326, 1, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_dn.dds');
    new DataRequest(14326, 28092, 1, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_lf.dds');
    new DataRequest(28092, 3591134, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_bk.png');
    new DataRequest(3591134, 3604910, 1, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_ft.dds');
    new DataRequest(3604910, 7128627, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_lf.png');
    new DataRequest(7128627, 7142246, 1, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_rt.dds');
    new DataRequest(7142246, 9956673, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_up.png');
    new DataRequest(9956673, 13949890, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_dn.png');
    new DataRequest(13949890, 13963397, 1, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_bk.dds');
    new DataRequest(13963397, 13976243, 1, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_up.dds');
    new DataRequest(13976243, 17654650, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_ft.png');
    new DataRequest(17654650, 21154712, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasy/skyfantasy_rt.png');
    new DataRequest(21154712, 21155175, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/package2.cfg');
    new DataRequest(21155175, 21155634, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');
    new DataRequest(21155634, 21156066, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/package2.cfg');
    new DataRequest(21156066, 21156493, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/package.cfg');
    new DataRequest(21156493, 21157208, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/package2.cfg');
    new DataRequest(21157208, 21157913, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/package.cfg');
    new DataRequest(21157913, 21158708, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/package2.cfg');
    new DataRequest(21158708, 21159493, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');
    new DataRequest(21159493, 21160287, 0, 0).open('GET', '/packages/gk/fantasy/wooden_roof_tiles_gk_v01/package2.cfg');
    new DataRequest(21160287, 21161073, 0, 0).open('GET', '/packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');
    new DataRequest(21161073, 21161787, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v03/package2.cfg');
    new DataRequest(21161787, 21162492, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v03/package.cfg');
    new DataRequest(21162492, 21162931, 0, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/package2.cfg');
    new DataRequest(21162931, 21163366, 0, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');
    new DataRequest(21163366, 21164080, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/package2.cfg');
    new DataRequest(21164080, 21164785, 0, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/package.cfg');
    new DataRequest(21164785, 21165200, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/package2.cfg');
    new DataRequest(21165200, 21165611, 0, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/package.cfg');
    new DataRequest(21165611, 21166280, 0, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/package2.cfg');
    new DataRequest(21166280, 21166939, 0, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/package.cfg');
    new DataRequest(21166939, 21167638, 0, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/package2.cfg');
    new DataRequest(21167638, 21168327, 0, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/package.cfg');
    new DataRequest(21168327, 21169057, 0, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/package2.cfg');
    new DataRequest(21169057, 21169779, 0, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');
    new DataRequest(21169779, 21170210, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v02/package2.cfg');
    new DataRequest(21170210, 21170637, 0, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v02/package.cfg');
    new DataRequest(21170637, 21171094, 0, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/package2.cfg');
    new DataRequest(21171094, 21171546, 0, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');
    new DataRequest(21171546, 21290160, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds');
    new DataRequest(21290160, 21309018, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds');
    new DataRequest(21309018, 21426982, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds');
    new DataRequest(21426982, 21445750, 1, 0).open('GET', '/packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds');
    new DataRequest(21445750, 21476634, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds');
    new DataRequest(21476634, 21507061, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds');
    new DataRequest(21507061, 21537435, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds');
    new DataRequest(21537435, 21556056, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds');
    new DataRequest(21556056, 21781765, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.dds');
    new DataRequest(21781765, 21999150, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.dds');
    new DataRequest(21999150, 22013929, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds');
    new DataRequest(22013929, 22028008, 1, 0).open('GET', '/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds');
    new DataRequest(22028008, 22146913, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds');
    new DataRequest(22146913, 22217074, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds');
    new DataRequest(22217074, 22336121, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds');
    new DataRequest(22336121, 22367186, 1, 0).open('GET', '/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds');
    new DataRequest(22367186, 22483736, 1, 0).open('GET', '/packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.dds');
    new DataRequest(22483736, 22514531, 1, 0).open('GET', '/packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.dds');
    new DataRequest(22514531, 22543440, 1, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds');
    new DataRequest(22543440, 22571793, 1, 0).open('GET', '/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds');
    new DataRequest(22571793, 22602653, 1, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds');
    new DataRequest(22602653, 22633091, 1, 0).open('GET', '/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds');
    new DataRequest(22633091, 22698105, 1, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds');
    new DataRequest(22698105, 22763230, 1, 0).open('GET', '/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds');
    new DataRequest(22763230, 22778108, 1, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds');
    new DataRequest(22778108, 22792818, 1, 0).open('GET', '/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds');
    new DataRequest(22792818, 22800279, 1, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds');
    new DataRequest(22800279, 22829395, 1, 0).open('GET', '/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds');
    new DataRequest(22829395, 22912236, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg');
    new DataRequest(22912236, 23061675, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg');
    new DataRequest(23061675, 23218121, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg');
    new DataRequest(23218121, 23403572, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg');
    new DataRequest(23403572, 23557407, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg');
    new DataRequest(23557407, 23706469, 0, 0).open('GET', '/packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg');

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'fantasy.data';
    var REMOTE_PACKAGE_NAME = 'fantasy.data';
    var PACKAGE_UUID = '23080b59-4397-4b20-9110-366ea36014ce';
  
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
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_dn.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_lf.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_bk.png"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_ft.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_lf.png"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_rt.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_up.png"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_dn.png"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_bk.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_up.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_ft.png"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasy/skyfantasy_rt.png"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_tiles_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_trim_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_roof_tiles_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v03/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v03/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_plaster_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_plaster_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v02/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v02/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_trim_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_trim_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_plates_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_plates_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_planks_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/wooden_planks_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v02/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v02/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_intersection_gk_v01/package2.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_intersection_gk_v01/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds"].onload();
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
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg"].onload();
          Module['removeRunDependency']('datafile_fantasy.data');

    };
    Module['addRunDependency']('datafile_fantasy.data');

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

