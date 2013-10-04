
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
Module['FS_createPath']('/packages/gk/future', 'panel_gk_006', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_001', true, true);
Module['FS_createPath']('/packages/gk/future', 'lamps_02_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_009', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_015', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_004', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_014', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_018', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_16_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_16_gk_v2', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_010', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_003', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_20_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_000', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_21_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_22_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_15_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_23_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_007', true, true);
Module['FS_createPath']('/packages/gk/future', 'lamps_01_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_017', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_008', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_012', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_011', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_12_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_24_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_005', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_013', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_002', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_016', true, true);

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
    new DataRequest(1019298, 1019899, 0, 0).open('GET', '/packages/gk/future/panel_gk_006/package.cfg');
    new DataRequest(1019899, 1020500, 0, 0).open('GET', '/packages/gk/future/panel_gk_001/package.cfg');
    new DataRequest(1020500, 1021204, 0, 0).open('GET', '/packages/gk/future/lamps_02_gk/package.cfg');
    new DataRequest(1021204, 1021568, 0, 0).open('GET', '/packages/gk/future/panel_gk_009/package.cfg');
    new DataRequest(1021568, 1022171, 0, 0).open('GET', '/packages/gk/future/panel_gk_015/package.cfg');
    new DataRequest(1022171, 1022535, 0, 0).open('GET', '/packages/gk/future/panel_gk_004/package.cfg');
    new DataRequest(1022535, 1023136, 0, 0).open('GET', '/packages/gk/future/panel_gk_014/package.cfg');
    new DataRequest(1023136, 1023503, 0, 0).open('GET', '/packages/gk/future/panel_gk_018/package.cfg');
    new DataRequest(1023503, 1024168, 0, 0).open('GET', '/packages/gk/future/wall_plate_16_gk/package.cfg');
    new DataRequest(1024168, 1024588, 0, 0).open('GET', '/packages/gk/future/wall_plate_16_gk_v2/package.cfg');
    new DataRequest(1024588, 1025193, 0, 0).open('GET', '/packages/gk/future/panel_gk_010/package.cfg');
    new DataRequest(1025193, 1025557, 0, 0).open('GET', '/packages/gk/future/panel_gk_003/package.cfg');
    new DataRequest(1025557, 1026222, 0, 0).open('GET', '/packages/gk/future/wall_plate_20_gk/package.cfg');
    new DataRequest(1026222, 1026587, 0, 0).open('GET', '/packages/gk/future/panel_gk_000/package.cfg');
    new DataRequest(1026587, 1027252, 0, 0).open('GET', '/packages/gk/future/wall_plate_21_gk/package.cfg');
    new DataRequest(1027252, 1027917, 0, 0).open('GET', '/packages/gk/future/wall_plate_22_gk/package.cfg');
    new DataRequest(1027917, 1028314, 0, 0).open('GET', '/packages/gk/future/wall_plate_15_gk/package.cfg');
    new DataRequest(1028314, 1028979, 0, 0).open('GET', '/packages/gk/future/wall_plate_23_gk/package.cfg');
    new DataRequest(1028979, 1029584, 0, 0).open('GET', '/packages/gk/future/panel_gk_007/package.cfg');
    new DataRequest(1029584, 1030000, 0, 0).open('GET', '/packages/gk/future/lamps_01_gk/package.cfg');
    new DataRequest(1030000, 1030603, 0, 0).open('GET', '/packages/gk/future/panel_gk_017/package.cfg');
    new DataRequest(1030603, 1031206, 0, 0).open('GET', '/packages/gk/future/panel_gk_008/package.cfg');
    new DataRequest(1031206, 1031570, 0, 0).open('GET', '/packages/gk/future/panel_gk_012/package.cfg');
    new DataRequest(1031570, 1032173, 0, 0).open('GET', '/packages/gk/future/panel_gk_011/package.cfg');
    new DataRequest(1032173, 1032569, 0, 0).open('GET', '/packages/gk/future/wall_plate_12_gk/package.cfg');
    new DataRequest(1032569, 1033234, 0, 0).open('GET', '/packages/gk/future/wall_plate_24_gk/package.cfg');
    new DataRequest(1033234, 1033835, 0, 0).open('GET', '/packages/gk/future/panel_gk_005/package.cfg');
    new DataRequest(1033835, 1034199, 0, 0).open('GET', '/packages/gk/future/panel_gk_013/package.cfg');
    new DataRequest(1034199, 1034563, 0, 0).open('GET', '/packages/gk/future/panel_gk_002/package.cfg');
    new DataRequest(1034563, 1035164, 0, 0).open('GET', '/packages/gk/future/panel_gk_016/package.cfg');
    new DataRequest(1035164, 1062475, 1, 0).open('GET', '/packages/gk/future/panel_gk_000/panel_gk_000_cc.dds');
    new DataRequest(1062475, 1090350, 1, 0).open('GET', '/packages/gk/future/panel_gk_000/panel_gk_000_nm.dds');
    new DataRequest(1090350, 1103499, 1, 0).open('GET', '/packages/gk/future/panel_gk_001/panel_gk_001_cc.dds');
    new DataRequest(1103499, 1116561, 1, 0).open('GET', '/packages/gk/future/panel_gk_001/panel_gk_001_nm.dds');
    new DataRequest(1116561, 1145086, 1, 0).open('GET', '/packages/gk/future/panel_gk_002/panel_gk_002_cc.dds');
    new DataRequest(1145086, 1173158, 1, 0).open('GET', '/packages/gk/future/panel_gk_002/panel_gk_002_nm.dds');
    new DataRequest(1173158, 1201904, 1, 0).open('GET', '/packages/gk/future/panel_gk_003/panel_gk_003_cc.dds');
    new DataRequest(1201904, 1230400, 1, 0).open('GET', '/packages/gk/future/panel_gk_003/panel_gk_003_nm.dds');
    new DataRequest(1230400, 1258672, 1, 0).open('GET', '/packages/gk/future/panel_gk_004/panel_gk_004_cc.dds');
    new DataRequest(1258672, 1286304, 1, 0).open('GET', '/packages/gk/future/panel_gk_004/panel_gk_004_nm.dds');
    new DataRequest(1286304, 1314181, 1, 0).open('GET', '/packages/gk/future/panel_gk_005/panel_gk_005_cc.dds');
    new DataRequest(1314181, 1341602, 1, 0).open('GET', '/packages/gk/future/panel_gk_005/panel_gk_005_nm.dds');
    new DataRequest(1341602, 1369099, 1, 0).open('GET', '/packages/gk/future/panel_gk_006/panel_gk_006_cc.dds');
    new DataRequest(1369099, 1396474, 1, 0).open('GET', '/packages/gk/future/panel_gk_006/panel_gk_006_nm.dds');
    new DataRequest(1396474, 1403622, 1, 0).open('GET', '/packages/gk/future/panel_gk_007/panel_gk_007_cc.dds');
    new DataRequest(1403622, 1410518, 1, 0).open('GET', '/packages/gk/future/panel_gk_007/panel_gk_007_nm.dds');
    new DataRequest(1410518, 1466169, 1, 0).open('GET', '/packages/gk/future/panel_gk_008/panel_gk_008_cc.dds');
    new DataRequest(1466169, 1514979, 1, 0).open('GET', '/packages/gk/future/panel_gk_008/panel_gk_008_nm.dds');
    new DataRequest(1514979, 1628613, 1, 0).open('GET', '/packages/gk/future/panel_gk_009/panel_gk_009_cc.dds');
    new DataRequest(1628613, 1735830, 1, 0).open('GET', '/packages/gk/future/panel_gk_009/panel_gk_009_nm.dds');
    new DataRequest(1735830, 1793588, 1, 0).open('GET', '/packages/gk/future/panel_gk_010/panel_gk_010_cc.dds');
    new DataRequest(1793588, 1853035, 1, 0).open('GET', '/packages/gk/future/panel_gk_010/panel_gk_010_nm.dds');
    new DataRequest(1853035, 1879991, 1, 0).open('GET', '/packages/gk/future/panel_gk_011/panel_gk_011_cc.dds');
    new DataRequest(1879991, 1905242, 1, 0).open('GET', '/packages/gk/future/panel_gk_011/panel_gk_011_nm.dds');
    new DataRequest(1905242, 1907626, 1, 0).open('GET', '/packages/gk/future/panel_gk_012/panel_gk_012_cc.dds');
    new DataRequest(1907626, 1910075, 1, 0).open('GET', '/packages/gk/future/panel_gk_012/panel_gk_012_nm.dds');
    new DataRequest(1910075, 1928118, 1, 0).open('GET', '/packages/gk/future/panel_gk_013/panel_gk_013_cc.dds');
    new DataRequest(1928118, 1946417, 1, 0).open('GET', '/packages/gk/future/panel_gk_013/panel_gk_013_nm.dds');
    new DataRequest(1946417, 2006052, 1, 0).open('GET', '/packages/gk/future/panel_gk_014/panel_gk_014_cc.dds');
    new DataRequest(2006052, 2065195, 1, 0).open('GET', '/packages/gk/future/panel_gk_014/panel_gk_014_nm.dds');
    new DataRequest(2065195, 2094144, 1, 0).open('GET', '/packages/gk/future/panel_gk_015/panel_gk_015_cc.dds');
    new DataRequest(2094144, 2122479, 1, 0).open('GET', '/packages/gk/future/panel_gk_015/panel_gk_015_nm.dds');
    new DataRequest(2122479, 2150662, 1, 0).open('GET', '/packages/gk/future/panel_gk_016/panel_gk_016_cc.dds');
    new DataRequest(2150662, 2177854, 1, 0).open('GET', '/packages/gk/future/panel_gk_016/panel_gk_016_nm.dds');
    new DataRequest(2177854, 2182491, 1, 0).open('GET', '/packages/gk/future/panel_gk_017/panel_gk_017_cc.dds');
    new DataRequest(2182491, 2187068, 1, 0).open('GET', '/packages/gk/future/panel_gk_017/panel_gk_017_nm.dds');
    new DataRequest(2187068, 2298777, 1, 0).open('GET', '/packages/gk/future/panel_gk_018/panel_gk_018_cc.dds');
    new DataRequest(2298777, 2412681, 1, 0).open('GET', '/packages/gk/future/panel_gk_018/panel_gk_018_nm.dds');
    new DataRequest(2412681, 2439275, 1, 0).open('GET', '/packages/gk/future/lamps_01_gk/lamps_01_gk_cc.dds');
    new DataRequest(2439275, 2465247, 1, 0).open('GET', '/packages/gk/future/lamps_01_gk/lamps_01_gk_nm.dds');
    new DataRequest(2465247, 2476499, 1, 0).open('GET', '/packages/gk/future/lamps_01_gk/lamps_01_gk_si.dds');
    new DataRequest(2476499, 2558930, 1, 0).open('GET', '/packages/gk/future/lamps_02_gk/lamps_02_gk_cc.dds');
    new DataRequest(2558930, 2647313, 1, 0).open('GET', '/packages/gk/future/lamps_02_gk/lamps_02_gk_nm.dds');
    new DataRequest(2647313, 2682941, 1, 0).open('GET', '/packages/gk/future/lamps_02_gk/lamps_02_gk_si.dds');
    new DataRequest(2682941, 2786787, 1, 0).open('GET', '/packages/gk/future/wall_plate_12_gk/wall_plate_12_gk_cc.dds');
    new DataRequest(2786787, 2899330, 1, 0).open('GET', '/packages/gk/future/wall_plate_12_gk/wall_plate_12_gk_nm.dds');
    new DataRequest(2899330, 3016224, 1, 0).open('GET', '/packages/gk/future/wall_plate_15_gk/wall_plate_15_gk_cc.dds');
    new DataRequest(3016224, 3130630, 1, 0).open('GET', '/packages/gk/future/wall_plate_15_gk/wall_plate_15_gk_nm.dds');
    new DataRequest(3130630, 3197788, 1, 0).open('GET', '/packages/gk/future/wall_plate_16_gk/wall_plate_16_gk_cc.dds');
    new DataRequest(3197788, 3264789, 1, 0).open('GET', '/packages/gk/future/wall_plate_16_gk/wall_plate_16_gk_nm.dds');
    new DataRequest(3264789, 3381005, 1, 0).open('GET', '/packages/gk/future/wall_plate_16_gk_v2/wall_plate_16_gk_v2_cc.dds');
    new DataRequest(3381005, 3484705, 1, 0).open('GET', '/packages/gk/future/wall_plate_16_gk_v2/wall_plate_16_gk_v2_nm.dds');
    new DataRequest(3484705, 3533865, 1, 0).open('GET', '/packages/gk/future/wall_plate_20_gk/wall_plate_20_gk_cc.dds');
    new DataRequest(3533865, 3575714, 1, 0).open('GET', '/packages/gk/future/wall_plate_20_gk/wall_plate_20_gk_nm.dds');
    new DataRequest(3575714, 3630026, 1, 0).open('GET', '/packages/gk/future/wall_plate_21_gk/wall_plate_21_gk_cc.dds');
    new DataRequest(3630026, 3675652, 1, 0).open('GET', '/packages/gk/future/wall_plate_21_gk/wall_plate_21_gk_nm.dds');
    new DataRequest(3675652, 3705790, 1, 0).open('GET', '/packages/gk/future/wall_plate_22_gk/wall_plate_22_gk_cc.dds');
    new DataRequest(3705790, 3733294, 1, 0).open('GET', '/packages/gk/future/wall_plate_22_gk/wall_plate_22_gk_nm.dds');
    new DataRequest(3733294, 3738128, 1, 0).open('GET', '/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_cc.dds');
    new DataRequest(3738128, 3743072, 1, 0).open('GET', '/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_nm.dds');
    new DataRequest(3743072, 3762582, 0, 0).open('GET', '/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_cc.png');
    new DataRequest(3762582, 3782904, 0, 0).open('GET', '/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_nm.png');
    new DataRequest(3782904, 3798021, 0, 0).open('GET', '/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_sc.png');
    new DataRequest(3798021, 3812225, 0, 0).open('GET', '/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_hm.png');
    new DataRequest(3812225, 3842369, 1, 0).open('GET', '/packages/gk/future/wall_plate_24_gk/wall_plate_24_gk_cc.dds');
    new DataRequest(3842369, 3869741, 1, 0).open('GET', '/packages/gk/future/wall_plate_24_gk/wall_plate_24_gk_nm.dds');

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'future.data';
    var REMOTE_PACKAGE_NAME = 'future.data';
    var PACKAGE_UUID = '346b7cb3-e764-459c-aeb7-d610b09c7d86';
  
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
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_006/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_001/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_02_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_009/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_015/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_004/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_014/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_018/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_16_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_16_gk_v2/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_010/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_003/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_20_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_000/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_21_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_22_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_15_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_23_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_007/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_01_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_017/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_008/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_012/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_011/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_12_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_24_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_005/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_013/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_002/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_016/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_000/panel_gk_000_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_000/panel_gk_000_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_001/panel_gk_001_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_001/panel_gk_001_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_002/panel_gk_002_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_002/panel_gk_002_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_003/panel_gk_003_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_003/panel_gk_003_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_004/panel_gk_004_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_004/panel_gk_004_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_005/panel_gk_005_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_005/panel_gk_005_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_006/panel_gk_006_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_006/panel_gk_006_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_007/panel_gk_007_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_007/panel_gk_007_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_008/panel_gk_008_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_008/panel_gk_008_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_009/panel_gk_009_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_009/panel_gk_009_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_010/panel_gk_010_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_010/panel_gk_010_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_011/panel_gk_011_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_011/panel_gk_011_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_012/panel_gk_012_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_012/panel_gk_012_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_013/panel_gk_013_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_013/panel_gk_013_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_014/panel_gk_014_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_014/panel_gk_014_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_015/panel_gk_015_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_015/panel_gk_015_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_016/panel_gk_016_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_016/panel_gk_016_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_017/panel_gk_017_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_017/panel_gk_017_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_018/panel_gk_018_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_018/panel_gk_018_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_01_gk/lamps_01_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_01_gk/lamps_01_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_01_gk/lamps_01_gk_si.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_02_gk/lamps_02_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_02_gk/lamps_02_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_02_gk/lamps_02_gk_si.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_12_gk/wall_plate_12_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_12_gk/wall_plate_12_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_15_gk/wall_plate_15_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_15_gk/wall_plate_15_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_16_gk/wall_plate_16_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_16_gk/wall_plate_16_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_16_gk_v2/wall_plate_16_gk_v2_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_16_gk_v2/wall_plate_16_gk_v2_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_20_gk/wall_plate_20_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_20_gk/wall_plate_20_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_21_gk/wall_plate_21_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_21_gk/wall_plate_21_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_22_gk/wall_plate_22_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_22_gk/wall_plate_22_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_nm.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_cc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_nm.png"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_sc.png"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_23_gk/wall_plate_23_gk_hm.png"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_24_gk/wall_plate_24_gk_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_24_gk/wall_plate_24_gk_nm.dds"].onload();
          Module['removeRunDependency']('datafile_future.data');

    };
    Module['addRunDependency']('datafile_future.data');

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

