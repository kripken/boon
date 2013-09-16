
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
Module['FS_createPath']('/packages/gk', 'future', true, true);
Module['FS_createPath']('/packages/gk/future', 'skysfJPG', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_006', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_07_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_001', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_17_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'lamps_02_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_06_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_009', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_015', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_004', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_014', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_01_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_018', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_16_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_08_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_010', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_03_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_09_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'diamond_plate_big_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_003', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_000', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_13_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_15_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_007', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_10_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'lamps_01_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_017', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_008', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_012', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_011', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_02_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'diamond_plate_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_12_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_05_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_04_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'panel_gk_005', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_14_gk', true, true);
Module['FS_createPath']('/packages/gk/future', 'wall_plate_11_gk', true, true);
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
      new DataRequest(0, 6783051, 0, 0).open('GET', '/packages/base/zoom.ogz');
    new DataRequest(6783051, 6784307, 0, 0).open('GET', '/packages/base/zoom.cfg');
    new DataRequest(6784307, 6804906, 0, 0).open('GET', '/packages/base/zoom.wpt');
    new DataRequest(6804906, 6974104, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_rt.jpg');
    new DataRequest(6974104, 7152035, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_ft.jpg');
    new DataRequest(7152035, 7259489, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_up.jpg');
    new DataRequest(7259489, 7458033, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_bk.jpg');
    new DataRequest(7458033, 7653231, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_dn.jpg');
    new DataRequest(7653231, 7824204, 0, 0).open('GET', '/packages/gk/future/skysfJPG/skysfJ_lf.jpg');
    new DataRequest(7824204, 7824805, 0, 0).open('GET', '/packages/gk/future/panel_gk_006/package.cfg');
    new DataRequest(7824805, 7825192, 0, 0).open('GET', '/packages/gk/future/wall_plate_07_gk/package.cfg');
    new DataRequest(7825192, 7825794, 0, 0).open('GET', '/packages/gk/future/panel_gk_001/package.cfg');
    new DataRequest(7825794, 7826181, 0, 0).open('GET', '/packages/gk/future/wall_plate_17_gk/package.cfg');
    new DataRequest(7826181, 7826856, 0, 0).open('GET', '/packages/gk/future/lamps_02_gk/package.cfg');
    new DataRequest(7826856, 7827502, 0, 0).open('GET', '/packages/gk/future/wall_plate_06_gk/package.cfg');
    new DataRequest(7827502, 7827867, 0, 0).open('GET', '/packages/gk/future/panel_gk_009/package.cfg');
    new DataRequest(7827867, 7828471, 0, 0).open('GET', '/packages/gk/future/panel_gk_015/package.cfg');
    new DataRequest(7828471, 7828836, 0, 0).open('GET', '/packages/gk/future/panel_gk_004/package.cfg');
    new DataRequest(7828836, 7829438, 0, 0).open('GET', '/packages/gk/future/panel_gk_014/package.cfg');
    new DataRequest(7829438, 7829825, 0, 0).open('GET', '/packages/gk/future/wall_plate_01_gk/package.cfg');
    new DataRequest(7829825, 7830192, 0, 0).open('GET', '/packages/gk/future/panel_gk_018/package.cfg');
    new DataRequest(7830192, 7830579, 0, 0).open('GET', '/packages/gk/future/wall_plate_16_gk/package.cfg');
    new DataRequest(7830579, 7830966, 0, 0).open('GET', '/packages/gk/future/wall_plate_08_gk/package.cfg');
    new DataRequest(7830966, 7831572, 0, 0).open('GET', '/packages/gk/future/panel_gk_010/package.cfg');
    new DataRequest(7831572, 7831959, 0, 0).open('GET', '/packages/gk/future/wall_plate_03_gk/package.cfg');
    new DataRequest(7831959, 7832605, 0, 0).open('GET', '/packages/gk/future/wall_plate_09_gk/package.cfg');
    new DataRequest(7832605, 7833025, 0, 0).open('GET', '/packages/gk/future/diamond_plate_big_gk/package.cfg');
    new DataRequest(7833025, 7833390, 0, 0).open('GET', '/packages/gk/future/panel_gk_003/package.cfg');
    new DataRequest(7833390, 7833756, 0, 0).open('GET', '/packages/gk/future/panel_gk_000/package.cfg');
    new DataRequest(7833756, 7834143, 0, 0).open('GET', '/packages/gk/future/wall_plate_13_gk/package.cfg');
    new DataRequest(7834143, 7834530, 0, 0).open('GET', '/packages/gk/future/wall_plate_15_gk/package.cfg');
    new DataRequest(7834530, 7835136, 0, 0).open('GET', '/packages/gk/future/panel_gk_007/package.cfg');
    new DataRequest(7835136, 7835782, 0, 0).open('GET', '/packages/gk/future/wall_plate_10_gk/package.cfg');
    new DataRequest(7835782, 7836196, 0, 0).open('GET', '/packages/gk/future/lamps_01_gk/package.cfg');
    new DataRequest(7836196, 7836799, 0, 0).open('GET', '/packages/gk/future/panel_gk_017/package.cfg');
    new DataRequest(7836799, 7837403, 0, 0).open('GET', '/packages/gk/future/panel_gk_008/package.cfg');
    new DataRequest(7837403, 7837768, 0, 0).open('GET', '/packages/gk/future/panel_gk_012/package.cfg');
    new DataRequest(7837768, 7838372, 0, 0).open('GET', '/packages/gk/future/panel_gk_011/package.cfg');
    new DataRequest(7838372, 7838759, 0, 0).open('GET', '/packages/gk/future/wall_plate_02_gk/package.cfg');
    new DataRequest(7838759, 7839156, 0, 0).open('GET', '/packages/gk/future/diamond_plate_gk/package.cfg');
    new DataRequest(7839156, 7839543, 0, 0).open('GET', '/packages/gk/future/wall_plate_12_gk/package.cfg');
    new DataRequest(7839543, 7840191, 0, 0).open('GET', '/packages/gk/future/wall_plate_05_gk/package.cfg');
    new DataRequest(7840191, 7840578, 0, 0).open('GET', '/packages/gk/future/wall_plate_04_gk/package.cfg');
    new DataRequest(7840578, 7841179, 0, 0).open('GET', '/packages/gk/future/panel_gk_005/package.cfg');
    new DataRequest(7841179, 7841566, 0, 0).open('GET', '/packages/gk/future/wall_plate_14_gk/package.cfg');
    new DataRequest(7841566, 7841953, 0, 0).open('GET', '/packages/gk/future/wall_plate_11_gk/package.cfg');
    new DataRequest(7841953, 7842318, 0, 0).open('GET', '/packages/gk/future/panel_gk_013/package.cfg');
    new DataRequest(7842318, 7842683, 0, 0).open('GET', '/packages/gk/future/panel_gk_002/package.cfg');
    new DataRequest(7842683, 7843284, 0, 0).open('GET', '/packages/gk/future/panel_gk_016/package.cfg');
    new DataRequest(7843284, 7870551, 1, 0).open('GET', '/packages/gk/future/panel_gk_000/panel_gk_000_cc.dds');
    new DataRequest(7870551, 7898484, 1, 0).open('GET', '/packages/gk/future/panel_gk_000/panel_gk_000_nm.dds');
    new DataRequest(7898484, 7911521, 1, 0).open('GET', '/packages/gk/future/panel_gk_001/panel_gk_001_cc.dds');
    new DataRequest(7911521, 7924575, 1, 0).open('GET', '/packages/gk/future/panel_gk_001/panel_gk_001_nm.dds');
    new DataRequest(7924575, 7953147, 1, 0).open('GET', '/packages/gk/future/panel_gk_002/panel_gk_002_cc.dds');
    new DataRequest(7953147, 7981196, 1, 0).open('GET', '/packages/gk/future/panel_gk_002/panel_gk_002_nm.dds');
    new DataRequest(7981196, 8009934, 1, 0).open('GET', '/packages/gk/future/panel_gk_003/panel_gk_003_cc.dds');
    new DataRequest(8009934, 8038368, 1, 0).open('GET', '/packages/gk/future/panel_gk_003/panel_gk_003_nm.dds');
    new DataRequest(8038368, 8066618, 1, 0).open('GET', '/packages/gk/future/panel_gk_004/panel_gk_004_cc.dds');
    new DataRequest(8066618, 8094178, 1, 0).open('GET', '/packages/gk/future/panel_gk_004/panel_gk_004_nm.dds');
    new DataRequest(8094178, 8122030, 1, 0).open('GET', '/packages/gk/future/panel_gk_005/panel_gk_005_cc.dds');
    new DataRequest(8122030, 8149361, 1, 0).open('GET', '/packages/gk/future/panel_gk_005/panel_gk_005_nm.dds');
    new DataRequest(8149361, 8177169, 1, 0).open('GET', '/packages/gk/future/panel_gk_006/panel_gk_006_cc.dds');
    new DataRequest(8177169, 8204424, 1, 0).open('GET', '/packages/gk/future/panel_gk_006/panel_gk_006_nm.dds');
    new DataRequest(8204424, 8211577, 1, 0).open('GET', '/packages/gk/future/panel_gk_007/panel_gk_007_cc.dds');
    new DataRequest(8211577, 8218530, 1, 0).open('GET', '/packages/gk/future/panel_gk_007/panel_gk_007_nm.dds');
    new DataRequest(8218530, 8273702, 1, 0).open('GET', '/packages/gk/future/panel_gk_008/panel_gk_008_cc.dds');
    new DataRequest(8273702, 8322027, 1, 0).open('GET', '/packages/gk/future/panel_gk_008/panel_gk_008_nm.dds');
    new DataRequest(8322027, 8435831, 1, 0).open('GET', '/packages/gk/future/panel_gk_009/panel_gk_009_cc.dds');
    new DataRequest(8435831, 8544513, 1, 0).open('GET', '/packages/gk/future/panel_gk_009/panel_gk_009_nm.dds');
    new DataRequest(8544513, 8602639, 1, 0).open('GET', '/packages/gk/future/panel_gk_010/panel_gk_010_cc.dds');
    new DataRequest(8602639, 8662065, 1, 0).open('GET', '/packages/gk/future/panel_gk_010/panel_gk_010_nm.dds');
    new DataRequest(8662065, 8688977, 1, 0).open('GET', '/packages/gk/future/panel_gk_011/panel_gk_011_cc.dds');
    new DataRequest(8688977, 8714296, 1, 0).open('GET', '/packages/gk/future/panel_gk_011/panel_gk_011_nm.dds');
    new DataRequest(8714296, 8716679, 1, 0).open('GET', '/packages/gk/future/panel_gk_012/panel_gk_012_cc.dds');
    new DataRequest(8716679, 8719137, 1, 0).open('GET', '/packages/gk/future/panel_gk_012/panel_gk_012_nm.dds');
    new DataRequest(8719137, 8778830, 1, 0).open('GET', '/packages/gk/future/panel_gk_014/panel_gk_014_cc.dds');
    new DataRequest(8778830, 8838138, 1, 0).open('GET', '/packages/gk/future/panel_gk_014/panel_gk_014_nm.dds');
    new DataRequest(8838138, 8867066, 1, 0).open('GET', '/packages/gk/future/panel_gk_015/panel_gk_015_cc.dds');
    new DataRequest(8867066, 8895395, 1, 0).open('GET', '/packages/gk/future/panel_gk_015/panel_gk_015_nm.dds');
    new DataRequest(8895395, 8923565, 1, 0).open('GET', '/packages/gk/future/panel_gk_016/panel_gk_016_cc.dds');
    new DataRequest(8923565, 8950714, 1, 0).open('GET', '/packages/gk/future/panel_gk_016/panel_gk_016_nm.dds');
    new DataRequest(8950714, 8958093, 1, 0).open('GET', '/packages/gk/future/panel_gk_017/panel_gk_017_cc.dds');
    new DataRequest(8958093, 8965036, 1, 0).open('GET', '/packages/gk/future/panel_gk_017/panel_gk_017_nm.dds');
    new DataRequest(8965036, 9076770, 1, 0).open('GET', '/packages/gk/future/panel_gk_018/panel_gk_018_cc.dds');
    new DataRequest(9076770, 9190560, 1, 0).open('GET', '/packages/gk/future/panel_gk_018/panel_gk_018_nm.dds');
    new DataRequest(9190560, 9217063, 1, 0).open('GET', '/packages/gk/future/lamps_01_gk/lamps_01_gk_cc.dds');
    new DataRequest(9217063, 9242987, 1, 0).open('GET', '/packages/gk/future/lamps_01_gk/lamps_01_gk_nm.dds');
    new DataRequest(9242987, 9289864, 0, 0).open('GET', '/packages/gk/future/lamps_01_gk/lamps_01_gk_si.png');

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'high.data';
    var REMOTE_PACKAGE_NAME = 'high.data';
    var PACKAGE_UUID = '2e275353-ee7d-4b23-ba40-fc079e06f1de';
  
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
          DataRequest.prototype.requests["/packages/base/zoom.ogz"].onload();
          DataRequest.prototype.requests["/packages/base/zoom.cfg"].onload();
          DataRequest.prototype.requests["/packages/base/zoom.wpt"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_rt.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_ft.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_up.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_bk.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_dn.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/skysfJPG/skysfJ_lf.jpg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_006/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_07_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_001/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_17_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_02_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_06_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_009/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_015/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_004/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_014/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_01_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_018/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_16_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_08_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_010/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_03_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_09_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/diamond_plate_big_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_003/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_000/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_13_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_15_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_007/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_10_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/lamps_01_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_017/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_008/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_012/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_011/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_02_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/diamond_plate_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_12_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_05_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_04_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/panel_gk_005/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_14_gk/package.cfg"].onload();
          DataRequest.prototype.requests["/packages/gk/future/wall_plate_11_gk/package.cfg"].onload();
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
          DataRequest.prototype.requests["/packages/gk/future/lamps_01_gk/lamps_01_gk_si.png"].onload();
          Module['removeRunDependency']('datafile_high.data');

    };
    Module['addRunDependency']('datafile_high.data');

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

