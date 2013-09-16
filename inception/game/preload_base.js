
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
Module['FS_createPath']('/packages/gk', 'lava', true, true);
Module['FS_createPath']('/', 'data', true, true);
Module['FS_createPath']('/packages', 'textures', true, true);
Module['FS_createPath']('/packages', 'fonts', true, true);
Module['FS_createPath']('/packages', 'icons', true, true);
Module['FS_createPath']('/packages', 'particles', true, true);
Module['FS_createPath']('/packages', 'sounds', true, true);
Module['FS_createPath']('/packages/sounds', 'aard', true, true);
Module['FS_createPath']('/packages/sounds', 'q009', true, true);
Module['FS_createPath']('/packages/sounds', 'yo_frankie', true, true);
Module['FS_createPath']('/packages', 'caustics', true, true);
Module['FS_createPath']('/packages', 'models', true, true);
Module['FS_createPath']('/packages/models', 'debris', true, true);
Module['FS_createPath']('/packages/models', 'projectiles', true, true);
Module['FS_createPath']('/packages/models/projectiles', 'grenade', true, true);
Module['FS_createPath']('/packages/models/projectiles', 'rocket', true, true);
Module['FS_createPath']('/packages', 'brushes', true, true);
Module['FS_createPath']('/packages', 'hud', true, true);

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
      new DataRequest(0, 56832, 1, 0).open('GET', '/packages/gk/lava/lava_cc.dds');
    new DataRequest(56832, 172921, 1, 0).open('GET', '/packages/gk/lava/lava_nm.dds');
    new DataRequest(172921, 220771, 0, 0).open('GET', '/data/menus.cfg');
    new DataRequest(220771, 225655, 0, 0).open('GET', '/data/guioverlay.png');
    new DataRequest(225655, 239207, 0, 0).open('GET', '/data/background_decal.png');
    new DataRequest(239207, 242118, 0, 0).open('GET', '/data/sounds.cfg');
    new DataRequest(242118, 243340, 0, 0).open('GET', '/data/default_map_settings.cfg');
    new DataRequest(243340, 246623, 0, 0).open('GET', '/data/hit.png');
    new DataRequest(246623, 246759, 0, 0).open('GET', '/data/default_map_models.cfg');
    new DataRequest(246759, 250042, 0, 0).open('GET', '/data/crosshair.png');
    new DataRequest(250042, 253354, 0, 0).open('GET', '/data/teammate.png');
    new DataRequest(253354, 270916, 0, 0).open('GET', '/data/background.png');
    new DataRequest(270916, 360546, 0, 0).open('GET', '/data/stdshader.cfg');
    new DataRequest(360546, 364792, 0, 0).open('GET', '/data/guiskin.png');
    new DataRequest(364792, 494998, 0, 0).open('GET', '/data/logo.png');
    new DataRequest(494998, 497830, 0, 0).open('GET', '/data/guislider.png');
    new DataRequest(497830, 500237, 0, 0).open('GET', '/data/keymap.cfg');
    new DataRequest(500237, 505121, 0, 0).open('GET', '/data/mapshot_frame.png');
    new DataRequest(505121, 509052, 0, 0).open('GET', '/data/guicursor.png');
    new DataRequest(509052, 512035, 0, 0).open('GET', '/data/loading_bar.png');
    new DataRequest(512035, 596522, 0, 0).open('GET', '/data/glsl.cfg');
    new DataRequest(596522, 600203, 0, 0).open('GET', '/data/loading_frame.png');
    new DataRequest(600203, 601216, 0, 0).open('GET', '/data/stdlib.cfg');
    new DataRequest(601216, 604982, 0, 0).open('GET', '/data/game_fps.cfg');
    new DataRequest(604982, 605141, 0, 0).open('GET', '/data/background_detail.png');
    new DataRequest(605141, 613645, 0, 0).open('GET', '/data/stdedit.cfg');
    new DataRequest(613645, 613717, 0, 0).open('GET', '/data/font.cfg');
    new DataRequest(613717, 619234, 0, 0).open('GET', '/data/brush.cfg');
    new DataRequest(619234, 627399, 0, 0).open('GET', '/data/game_rpg.cfg');
    new DataRequest(627399, 634616, 0, 0).open('GET', '/data/defaults.cfg');
    new DataRequest(634616, 790619, 0, 0).open('GET', '/packages/textures/water.jpg');
    new DataRequest(790619, 1045792, 0, 0).open('GET', '/packages/textures/waterdudv.jpg');
    new DataRequest(1045792, 1048828, 0, 0).open('GET', '/packages/textures/notexture.png');
    new DataRequest(1048828, 1226390, 0, 0).open('GET', '/packages/textures/waterfalln.jpg');
    new DataRequest(1226390, 1263584, 0, 0).open('GET', '/packages/textures/waterfall.jpg');
    new DataRequest(1263584, 1264255, 0, 0).open('GET', '/packages/textures/readme.txt');
    new DataRequest(1264255, 1506425, 0, 0).open('GET', '/packages/textures/waterfalldudv.jpg');
    new DataRequest(1506425, 1856248, 0, 0).open('GET', '/packages/textures/watern.jpg');
    new DataRequest(1856248, 1942372, 0, 0).open('GET', '/packages/fonts/font.png');
    new DataRequest(1942372, 1944614, 0, 0).open('GET', '/packages/fonts/default.cfg');
    new DataRequest(1944614, 1949339, 0, 0).open('GET', '/packages/fonts/font_readme.txt');
    new DataRequest(1949339, 1962717, 0, 0).open('GET', '/packages/icons/info.jpg');
    new DataRequest(1962717, 1974827, 0, 0).open('GET', '/packages/icons/arrow_fw.jpg');
    new DataRequest(1974827, 1989961, 0, 0).open('GET', '/packages/icons/frankie.jpg');
    new DataRequest(1989961, 2008637, 0, 0).open('GET', '/packages/icons/server.jpg');
    new DataRequest(2008637, 2021917, 0, 0).open('GET', '/packages/icons/radio_on.jpg');
    new DataRequest(2021917, 2040120, 0, 0).open('GET', '/packages/icons/checkbox_on.jpg');
    new DataRequest(2040120, 2053015, 0, 0).open('GET', '/packages/icons/cube.jpg');
    new DataRequest(2053015, 2066072, 0, 0).open('GET', '/packages/icons/exit.jpg');
    new DataRequest(2066072, 2082512, 0, 0).open('GET', '/packages/icons/checkbox_off.jpg');
    new DataRequest(2082512, 2095580, 0, 0).open('GET', '/packages/icons/chat.jpg');
    new DataRequest(2095580, 2099669, 0, 0).open('GET', '/packages/icons/menu.png');
    new DataRequest(2099669, 2099766, 0, 0).open('GET', '/packages/icons/readme.txt');
    new DataRequest(2099766, 2113262, 0, 0).open('GET', '/packages/icons/snoutx10k.jpg');
    new DataRequest(2113262, 2131990, 0, 0).open('GET', '/packages/icons/radio_off.jpg');
    new DataRequest(2131990, 2143652, 0, 0).open('GET', '/packages/icons/arrow_bw.jpg');
    new DataRequest(2143652, 2161959, 0, 0).open('GET', '/packages/icons/action.jpg');
    new DataRequest(2161959, 2179951, 0, 0).open('GET', '/packages/icons/menu.jpg');
    new DataRequest(2179951, 2193455, 0, 0).open('GET', '/packages/icons/hand.jpg');
    new DataRequest(2193455, 2251317, 0, 0).open('GET', '/packages/particles/lightning.jpg');
    new DataRequest(2251317, 2255829, 0, 0).open('GET', '/packages/particles/smoke.png');
    new DataRequest(2255829, 2257634, 0, 0).open('GET', '/packages/particles/spark.png');
    new DataRequest(2257634, 2319786, 0, 0).open('GET', '/packages/particles/ball2.png');
    new DataRequest(2319786, 2339291, 0, 0).open('GET', '/packages/particles/circle.png');
    new DataRequest(2339291, 2358313, 0, 0).open('GET', '/packages/particles/muzzleflash2.jpg');
    new DataRequest(2358313, 2373939, 0, 0).open('GET', '/packages/particles/blood.png');
    new DataRequest(2373939, 2381354, 0, 0).open('GET', '/packages/particles/steam.png');
    new DataRequest(2381354, 3114833, 0, 0).open('GET', '/packages/particles/explosion.png');
    new DataRequest(3114833, 3115077, 0, 0).open('GET', '/packages/particles/readme.txt');
    new DataRequest(3115077, 3117975, 0, 0).open('GET', '/packages/particles/base.png');
    new DataRequest(3117975, 3120242, 0, 0).open('GET', '/packages/particles/blob.png');
    new DataRequest(3120242, 3177406, 0, 0).open('GET', '/packages/particles/bullet.png');
    new DataRequest(3177406, 3197307, 0, 0).open('GET', '/packages/particles/muzzleflash1.jpg');
    new DataRequest(3197307, 3267499, 0, 0).open('GET', '/packages/particles/flames.png');
    new DataRequest(3267499, 3267744, 0, 0).open('GET', '/packages/particles/readme.txt~');
    new DataRequest(3267744, 3268605, 0, 0).open('GET', '/packages/particles/flare.jpg');
    new DataRequest(3268605, 3288743, 0, 0).open('GET', '/packages/particles/muzzleflash3.jpg');
    new DataRequest(3288743, 3614643, 0, 0).open('GET', '/packages/particles/lensflares.png');
    new DataRequest(3614643, 3654479, 0, 0).open('GET', '/packages/particles/scorch.png');
    new DataRequest(3654479, 3708411, 0, 0).open('GET', '/packages/particles/ball1.png');
    new DataRequest(3708411, 3733881, 0, 1).open('GET', '/packages/sounds/aard/pain1.wav');
    new DataRequest(3733881, 3743595, 0, 1).open('GET', '/packages/sounds/aard/die1.wav');
    new DataRequest(3743595, 3754957, 0, 1).open('GET', '/packages/sounds/aard/land.wav');
    new DataRequest(3754957, 3758651, 0, 1).open('GET', '/packages/sounds/aard/grunt2.wav');
    new DataRequest(3758651, 3760355, 0, 1).open('GET', '/packages/sounds/aard/tak.wav');
    new DataRequest(3760355, 3767001, 0, 1).open('GET', '/packages/sounds/aard/weapload.wav');
    new DataRequest(3767001, 3778407, 0, 1).open('GET', '/packages/sounds/aard/grunt1.wav');
    new DataRequest(3778407, 3787757, 0, 1).open('GET', '/packages/sounds/aard/pain3.wav');
    new DataRequest(3787757, 3797167, 0, 1).open('GET', '/packages/sounds/aard/pain2.wav');
    new DataRequest(3797167, 3807819, 0, 1).open('GET', '/packages/sounds/aard/die2.wav');
    new DataRequest(3807819, 3815779, 0, 1).open('GET', '/packages/sounds/aard/pain5.wav');
    new DataRequest(3815779, 3823759, 0, 1).open('GET', '/packages/sounds/aard/pain4.wav');
    new DataRequest(3823759, 3835621, 0, 1).open('GET', '/packages/sounds/aard/bang.wav');
    new DataRequest(3835621, 3847935, 0, 1).open('GET', '/packages/sounds/aard/itempick.wav');
    new DataRequest(3847935, 3855601, 0, 1).open('GET', '/packages/sounds/aard/pain6.wav');
    new DataRequest(3855601, 3859659, 0, 1).open('GET', '/packages/sounds/aard/outofammo.wav');
    new DataRequest(3859659, 3863791, 0, 1).open('GET', '/packages/sounds/aard/jump.wav');
    new DataRequest(3863791, 3891678, 0, 1).open('GET', '/packages/sounds/q009/minigun.ogg');
    new DataRequest(3891678, 4016076, 0, 1).open('GET', '/packages/sounds/q009/shotgun3.ogg');
    new DataRequest(4016076, 4074775, 0, 1).open('GET', '/packages/sounds/q009/rlauncher2.ogg');
    new DataRequest(4074775, 4197458, 0, 1).open('GET', '/packages/sounds/q009/rifle3.ogg');
    new DataRequest(4197458, 4223631, 0, 1).open('GET', '/packages/sounds/q009/teleport.ogg');
    new DataRequest(4223631, 4357417, 0, 1).open('GET', '/packages/sounds/q009/ren.ogg');
    new DataRequest(4357417, 4380745, 0, 1).open('GET', '/packages/sounds/q009/minigun2.ogg');
    new DataRequest(4380745, 4399636, 0, 1).open('GET', '/packages/sounds/q009/jumppad.ogg');
    new DataRequest(4399636, 4433323, 0, 1).open('GET', '/packages/sounds/q009/glauncher.ogg');
    new DataRequest(4433323, 4453766, 0, 1).open('GET', '/packages/sounds/q009/weapswitch.ogg');
    new DataRequest(4453766, 4483748, 0, 1).open('GET', '/packages/sounds/q009/explosion.ogg');
    new DataRequest(4483748, 4607968, 0, 1).open('GET', '/packages/sounds/q009/rifle2.ogg');
    new DataRequest(4607968, 4733048, 0, 1).open('GET', '/packages/sounds/q009/shotgun.ogg');
    new DataRequest(4733048, 4759304, 0, 1).open('GET', '/packages/sounds/q009/minigun3.ogg');
    new DataRequest(4759304, 4862370, 0, 1).open('GET', '/packages/sounds/q009/ren2.ogg');
    new DataRequest(4862370, 4991407, 0, 1).open('GET', '/packages/sounds/q009/rifle.ogg');
    new DataRequest(4991407, 5107846, 0, 1).open('GET', '/packages/sounds/q009/ren3.ogg');
    new DataRequest(5107846, 5165783, 0, 1).open('GET', '/packages/sounds/q009/rlauncher.ogg');
    new DataRequest(5165783, 5198405, 0, 1).open('GET', '/packages/sounds/q009/quaddamage_out.ogg');
    new DataRequest(5198405, 5216280, 0, 1).open('GET', '/packages/sounds/q009/outofammo.ogg');
    new DataRequest(5216280, 5342382, 0, 1).open('GET', '/packages/sounds/q009/shotgun2.ogg');
    new DataRequest(5342382, 5369282, 0, 1).open('GET', '/packages/sounds/q009/pistol3.ogg');
    new DataRequest(5369282, 5388722, 0, 0).open('GET', '/packages/sounds/q009/license.txt');
    new DataRequest(5388722, 5390038, 0, 0).open('GET', '/packages/sounds/q009/readme.txt');
    new DataRequest(5390038, 5417746, 0, 1).open('GET', '/packages/sounds/q009/quaddamage_shoot.ogg');
    new DataRequest(5417746, 5475391, 0, 1).open('GET', '/packages/sounds/q009/rlauncher3.ogg');
    new DataRequest(5475391, 5503773, 0, 1).open('GET', '/packages/sounds/q009/pistol2.ogg');
    new DataRequest(5503773, 5539215, 0, 1).open('GET', '/packages/sounds/q009/glauncher2.ogg');
    new DataRequest(5539215, 5572443, 0, 1).open('GET', '/packages/sounds/q009/glauncher3.ogg');
    new DataRequest(5572443, 5600837, 0, 1).open('GET', '/packages/sounds/q009/pistol.ogg');
    new DataRequest(5600837, 5620446, 0, 1).open('GET', '/packages/sounds/yo_frankie/amb_waterdrip_2.ogg');
    new DataRequest(5620446, 5621076, 0, 0).open('GET', '/packages/sounds/yo_frankie/readme.txt');
    new DataRequest(5621076, 5628489, 0, 1).open('GET', '/packages/sounds/yo_frankie/sfx_interact.ogg');
    new DataRequest(5628489, 5652394, 0, 1).open('GET', '/packages/sounds/yo_frankie/watersplash2.ogg');
    new DataRequest(5652394, 5676556, 0, 0).open('GET', '/packages/caustics/caust08.png');
    new DataRequest(5676556, 5701035, 0, 0).open('GET', '/packages/caustics/caust17.png');
    new DataRequest(5701035, 5726221, 0, 0).open('GET', '/packages/caustics/caust13.png');
    new DataRequest(5726221, 5749545, 0, 0).open('GET', '/packages/caustics/caust06.png');
    new DataRequest(5749545, 5773120, 0, 0).open('GET', '/packages/caustics/caust03.png');
    new DataRequest(5773120, 5795990, 0, 0).open('GET', '/packages/caustics/caust05.png');
    new DataRequest(5795990, 5820169, 0, 0).open('GET', '/packages/caustics/caust19.png');
    new DataRequest(5820169, 5843444, 0, 0).open('GET', '/packages/caustics/caust23.png');
    new DataRequest(5843444, 5866613, 0, 0).open('GET', '/packages/caustics/caust24.png');
    new DataRequest(5866613, 5889819, 0, 0).open('GET', '/packages/caustics/caust25.png');
    new DataRequest(5889819, 5913320, 0, 0).open('GET', '/packages/caustics/caust28.png');
    new DataRequest(5913320, 5936874, 0, 0).open('GET', '/packages/caustics/caust26.png');
    new DataRequest(5936874, 5961615, 0, 0).open('GET', '/packages/caustics/caust12.png');
    new DataRequest(5961615, 5984813, 0, 0).open('GET', '/packages/caustics/caust04.png');
    new DataRequest(5984813, 6008680, 0, 0).open('GET', '/packages/caustics/caust07.png');
    new DataRequest(6008680, 6033223, 0, 0).open('GET', '/packages/caustics/caust31.png');
    new DataRequest(6033223, 6057672, 0, 0).open('GET', '/packages/caustics/caust15.png');
    new DataRequest(6057672, 6082724, 0, 0).open('GET', '/packages/caustics/caust14.png');
    new DataRequest(6082724, 6106474, 0, 0).open('GET', '/packages/caustics/caust29.png');
    new DataRequest(6106474, 6130638, 0, 0).open('GET', '/packages/caustics/caust11.png');
    new DataRequest(6130638, 6154892, 0, 0).open('GET', '/packages/caustics/caust30.png');
    new DataRequest(6154892, 6179433, 0, 0).open('GET', '/packages/caustics/caust18.png');
    new DataRequest(6179433, 6179491, 0, 0).open('GET', '/packages/caustics/readme.txt');
    new DataRequest(6179491, 6203374, 0, 0).open('GET', '/packages/caustics/caust09.png');
    new DataRequest(6203374, 6227199, 0, 0).open('GET', '/packages/caustics/caust10.png');
    new DataRequest(6227199, 6250643, 0, 0).open('GET', '/packages/caustics/caust22.png');
    new DataRequest(6250643, 6275135, 0, 0).open('GET', '/packages/caustics/caust01.png');
    new DataRequest(6275135, 6299654, 0, 0).open('GET', '/packages/caustics/caust00.png');
    new DataRequest(6299654, 6323760, 0, 0).open('GET', '/packages/caustics/caust20.png');
    new DataRequest(6323760, 6348117, 0, 0).open('GET', '/packages/caustics/caust16.png');
    new DataRequest(6348117, 6371761, 0, 0).open('GET', '/packages/caustics/caust27.png');
    new DataRequest(6371761, 6395877, 0, 0).open('GET', '/packages/caustics/caust02.png');
    new DataRequest(6395877, 6419515, 0, 0).open('GET', '/packages/caustics/caust21.png');
    new DataRequest(6419515, 6434291, 0, 0).open('GET', '/packages/models/debris/tris.md2');
    new DataRequest(6434291, 6434534, 0, 0).open('GET', '/packages/models/debris/md2.cfg');
    new DataRequest(6434534, 6626360, 0, 0).open('GET', '/packages/models/debris/skin.png');
    new DataRequest(6626360, 6626498, 0, 0).open('GET', '/packages/models/projectiles/grenade/iqm.cfg');
    new DataRequest(6626498, 6626654, 0, 0).open('GET', '/packages/models/projectiles/rocket/iqm.cfg');
    new DataRequest(6626654, 6639891, 0, 0).open('GET', '/packages/models/projectiles/rocket/skin.jpg');
    new DataRequest(6639891, 6643027, 0, 0).open('GET', '/packages/models/projectiles/rocket/rocket.iqm');
    new DataRequest(6643027, 6650746, 0, 0).open('GET', '/packages/models/projectiles/rocket/normal.jpg');
    new DataRequest(6650746, 6651406, 0, 0).open('GET', '/packages/models/projectiles/rocket/readme.txt');
    new DataRequest(6651406, 6672174, 0, 0).open('GET', '/packages/models/projectiles/rocket/mask.jpg');
    new DataRequest(6672174, 6672311, 0, 0).open('GET', '/packages/brushes/gradient_128.png');
    new DataRequest(6672311, 6673307, 0, 0).open('GET', '/packages/brushes/circle_8_hard.png');
    new DataRequest(6673307, 6674545, 0, 0).open('GET', '/packages/brushes/circle_32_solid.png');
    new DataRequest(6674545, 6678877, 0, 0).open('GET', '/packages/brushes/circle_64_hard.png');
    new DataRequest(6678877, 6680084, 0, 0).open('GET', '/packages/brushes/square_64_hard.png');
    new DataRequest(6680084, 6681166, 0, 0).open('GET', '/packages/brushes/square_16_hard.png');
    new DataRequest(6681166, 6682139, 0, 0).open('GET', '/packages/brushes/square_16_solid.png');
    new DataRequest(6682139, 6683120, 0, 0).open('GET', '/packages/brushes/square_32_solid.png');
    new DataRequest(6683120, 6684405, 0, 0).open('GET', '/packages/brushes/circle_32_soft.png');
    new DataRequest(6684405, 6685400, 0, 0).open('GET', '/packages/brushes/circle_8_solid.png');
    new DataRequest(6685400, 6687214, 0, 0).open('GET', '/packages/brushes/circle_64_soft.png');
    new DataRequest(6687214, 6688327, 0, 0).open('GET', '/packages/brushes/circle_16_solid.png');
    new DataRequest(6688327, 6690691, 0, 0).open('GET', '/packages/brushes/circle_128_solid.png');
    new DataRequest(6690691, 6700326, 0, 0).open('GET', '/packages/brushes/noise_128.png');
    new DataRequest(6700326, 6701318, 0, 0).open('GET', '/packages/brushes/circle_8_soft.png');
    new DataRequest(6701318, 6702501, 0, 0).open('GET', '/packages/brushes/square_32_hard.png');
    new DataRequest(6702501, 6703623, 0, 0).open('GET', '/packages/brushes/circle_16_hard.png');
    new DataRequest(6703623, 6707183, 0, 0).open('GET', '/packages/brushes/circle_32_hard.png');
    new DataRequest(6707183, 6710660, 0, 0).open('GET', '/packages/brushes/circle_128_soft.png');
    new DataRequest(6710660, 6710789, 0, 0).open('GET', '/packages/brushes/gradient_64.png');
    new DataRequest(6710789, 6710909, 0, 0).open('GET', '/packages/brushes/gradient_32.png');
    new DataRequest(6710909, 6711915, 0, 0).open('GET', '/packages/brushes/square_64_solid.png');
    new DataRequest(6711915, 6713006, 0, 0).open('GET', '/packages/brushes/circle_16_soft.png');
    new DataRequest(6713006, 6717094, 0, 0).open('GET', '/packages/brushes/circle_128_hard.png');
    new DataRequest(6717094, 6717153, 0, 0).open('GET', '/packages/brushes/readme.txt');
    new DataRequest(6717153, 6719443, 0, 0).open('GET', '/packages/brushes/noise_64.png');
    new DataRequest(6719443, 6721027, 0, 0).open('GET', '/packages/brushes/circle_64_solid.png');
    new DataRequest(6721027, 6721130, 0, 0).open('GET', '/packages/brushes/gradient_16.png');
    new DataRequest(6721130, 6737565, 0, 0).open('GET', '/packages/hud/ff.png');
    new DataRequest(6737565, 6881309, 0, 0).open('GET', '/packages/hud/damage.png');
    new DataRequest(6881309, 6881380, 0, 0).open('GET', '/packages/hud/readme.txt');
    new DataRequest(6881380, 6986781, 0, 0).open('GET', '/packages/hud/items.png');

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'base.data';
    var REMOTE_PACKAGE_NAME = 'base.data';
    var PACKAGE_UUID = 'bd9e87fd-1966-47b5-ba3f-2a2a8ac1f242';
  
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
          DataRequest.prototype.requests["/packages/gk/lava/lava_cc.dds"].onload();
          DataRequest.prototype.requests["/packages/gk/lava/lava_nm.dds"].onload();
          DataRequest.prototype.requests["/data/menus.cfg"].onload();
          DataRequest.prototype.requests["/data/guioverlay.png"].onload();
          DataRequest.prototype.requests["/data/background_decal.png"].onload();
          DataRequest.prototype.requests["/data/sounds.cfg"].onload();
          DataRequest.prototype.requests["/data/default_map_settings.cfg"].onload();
          DataRequest.prototype.requests["/data/hit.png"].onload();
          DataRequest.prototype.requests["/data/default_map_models.cfg"].onload();
          DataRequest.prototype.requests["/data/crosshair.png"].onload();
          DataRequest.prototype.requests["/data/teammate.png"].onload();
          DataRequest.prototype.requests["/data/background.png"].onload();
          DataRequest.prototype.requests["/data/stdshader.cfg"].onload();
          DataRequest.prototype.requests["/data/guiskin.png"].onload();
          DataRequest.prototype.requests["/data/logo.png"].onload();
          DataRequest.prototype.requests["/data/guislider.png"].onload();
          DataRequest.prototype.requests["/data/keymap.cfg"].onload();
          DataRequest.prototype.requests["/data/mapshot_frame.png"].onload();
          DataRequest.prototype.requests["/data/guicursor.png"].onload();
          DataRequest.prototype.requests["/data/loading_bar.png"].onload();
          DataRequest.prototype.requests["/data/glsl.cfg"].onload();
          DataRequest.prototype.requests["/data/loading_frame.png"].onload();
          DataRequest.prototype.requests["/data/stdlib.cfg"].onload();
          DataRequest.prototype.requests["/data/game_fps.cfg"].onload();
          DataRequest.prototype.requests["/data/background_detail.png"].onload();
          DataRequest.prototype.requests["/data/stdedit.cfg"].onload();
          DataRequest.prototype.requests["/data/font.cfg"].onload();
          DataRequest.prototype.requests["/data/brush.cfg"].onload();
          DataRequest.prototype.requests["/data/game_rpg.cfg"].onload();
          DataRequest.prototype.requests["/data/defaults.cfg"].onload();
          DataRequest.prototype.requests["/packages/textures/water.jpg"].onload();
          DataRequest.prototype.requests["/packages/textures/waterdudv.jpg"].onload();
          DataRequest.prototype.requests["/packages/textures/notexture.png"].onload();
          DataRequest.prototype.requests["/packages/textures/waterfalln.jpg"].onload();
          DataRequest.prototype.requests["/packages/textures/waterfall.jpg"].onload();
          DataRequest.prototype.requests["/packages/textures/readme.txt"].onload();
          DataRequest.prototype.requests["/packages/textures/waterfalldudv.jpg"].onload();
          DataRequest.prototype.requests["/packages/textures/watern.jpg"].onload();
          DataRequest.prototype.requests["/packages/fonts/font.png"].onload();
          DataRequest.prototype.requests["/packages/fonts/default.cfg"].onload();
          DataRequest.prototype.requests["/packages/fonts/font_readme.txt"].onload();
          DataRequest.prototype.requests["/packages/icons/info.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/arrow_fw.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/frankie.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/server.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/radio_on.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/checkbox_on.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/cube.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/exit.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/checkbox_off.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/chat.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/menu.png"].onload();
          DataRequest.prototype.requests["/packages/icons/readme.txt"].onload();
          DataRequest.prototype.requests["/packages/icons/snoutx10k.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/radio_off.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/arrow_bw.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/action.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/menu.jpg"].onload();
          DataRequest.prototype.requests["/packages/icons/hand.jpg"].onload();
          DataRequest.prototype.requests["/packages/particles/lightning.jpg"].onload();
          DataRequest.prototype.requests["/packages/particles/smoke.png"].onload();
          DataRequest.prototype.requests["/packages/particles/spark.png"].onload();
          DataRequest.prototype.requests["/packages/particles/ball2.png"].onload();
          DataRequest.prototype.requests["/packages/particles/circle.png"].onload();
          DataRequest.prototype.requests["/packages/particles/muzzleflash2.jpg"].onload();
          DataRequest.prototype.requests["/packages/particles/blood.png"].onload();
          DataRequest.prototype.requests["/packages/particles/steam.png"].onload();
          DataRequest.prototype.requests["/packages/particles/explosion.png"].onload();
          DataRequest.prototype.requests["/packages/particles/readme.txt"].onload();
          DataRequest.prototype.requests["/packages/particles/base.png"].onload();
          DataRequest.prototype.requests["/packages/particles/blob.png"].onload();
          DataRequest.prototype.requests["/packages/particles/bullet.png"].onload();
          DataRequest.prototype.requests["/packages/particles/muzzleflash1.jpg"].onload();
          DataRequest.prototype.requests["/packages/particles/flames.png"].onload();
          DataRequest.prototype.requests["/packages/particles/readme.txt~"].onload();
          DataRequest.prototype.requests["/packages/particles/flare.jpg"].onload();
          DataRequest.prototype.requests["/packages/particles/muzzleflash3.jpg"].onload();
          DataRequest.prototype.requests["/packages/particles/lensflares.png"].onload();
          DataRequest.prototype.requests["/packages/particles/scorch.png"].onload();
          DataRequest.prototype.requests["/packages/particles/ball1.png"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/pain1.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/die1.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/land.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/grunt2.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/tak.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/weapload.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/grunt1.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/pain3.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/pain2.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/die2.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/pain5.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/pain4.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/bang.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/itempick.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/pain6.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/outofammo.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/aard/jump.wav"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/minigun.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/shotgun3.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/rlauncher2.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/rifle3.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/teleport.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/ren.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/minigun2.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/jumppad.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/glauncher.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/weapswitch.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/explosion.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/rifle2.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/shotgun.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/minigun3.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/ren2.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/rifle.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/ren3.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/rlauncher.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/quaddamage_out.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/outofammo.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/shotgun2.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/pistol3.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/license.txt"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/readme.txt"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/quaddamage_shoot.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/rlauncher3.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/pistol2.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/glauncher2.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/glauncher3.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/q009/pistol.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/yo_frankie/amb_waterdrip_2.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/yo_frankie/readme.txt"].onload();
          DataRequest.prototype.requests["/packages/sounds/yo_frankie/sfx_interact.ogg"].onload();
          DataRequest.prototype.requests["/packages/sounds/yo_frankie/watersplash2.ogg"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust08.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust17.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust13.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust06.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust03.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust05.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust19.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust23.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust24.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust25.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust28.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust26.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust12.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust04.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust07.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust31.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust15.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust14.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust29.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust11.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust30.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust18.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/readme.txt"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust09.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust10.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust22.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust01.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust00.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust20.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust16.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust27.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust02.png"].onload();
          DataRequest.prototype.requests["/packages/caustics/caust21.png"].onload();
          DataRequest.prototype.requests["/packages/models/debris/tris.md2"].onload();
          DataRequest.prototype.requests["/packages/models/debris/md2.cfg"].onload();
          DataRequest.prototype.requests["/packages/models/debris/skin.png"].onload();
          DataRequest.prototype.requests["/packages/models/projectiles/grenade/iqm.cfg"].onload();
          DataRequest.prototype.requests["/packages/models/projectiles/rocket/iqm.cfg"].onload();
          DataRequest.prototype.requests["/packages/models/projectiles/rocket/skin.jpg"].onload();
          DataRequest.prototype.requests["/packages/models/projectiles/rocket/rocket.iqm"].onload();
          DataRequest.prototype.requests["/packages/models/projectiles/rocket/normal.jpg"].onload();
          DataRequest.prototype.requests["/packages/models/projectiles/rocket/readme.txt"].onload();
          DataRequest.prototype.requests["/packages/models/projectiles/rocket/mask.jpg"].onload();
          DataRequest.prototype.requests["/packages/brushes/gradient_128.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_8_hard.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_32_solid.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_64_hard.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/square_64_hard.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/square_16_hard.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/square_16_solid.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/square_32_solid.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_32_soft.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_8_solid.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_64_soft.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_16_solid.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_128_solid.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/noise_128.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_8_soft.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/square_32_hard.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_16_hard.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_32_hard.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_128_soft.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/gradient_64.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/gradient_32.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/square_64_solid.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_16_soft.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_128_hard.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/readme.txt"].onload();
          DataRequest.prototype.requests["/packages/brushes/noise_64.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/circle_64_solid.png"].onload();
          DataRequest.prototype.requests["/packages/brushes/gradient_16.png"].onload();
          DataRequest.prototype.requests["/packages/hud/ff.png"].onload();
          DataRequest.prototype.requests["/packages/hud/damage.png"].onload();
          DataRequest.prototype.requests["/packages/hud/readme.txt"].onload();
          DataRequest.prototype.requests["/packages/hud/items.png"].onload();
          Module['removeRunDependency']('datafile_base.data');

    };
    Module['addRunDependency']('datafile_base.data');

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

