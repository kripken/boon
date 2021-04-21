### native
#./configure --disable-i386-asm --disable-gl --disable-cpu-opt
# make
# ./src/prboom -nofullscreen -nosound

### web
~/Dev/emscripten/emconfigure ./configure --disable-i386-asm --disable-gl --disable-cpu-opt --without-net
~/Dev/emscripten/emmake make -j 8
/home/azakai/Dev/emscripten/emcc -Isrc  src/mmus2mid.o src/am_map.o src/g_game.o src/p_mobj.o src/r_demo.o src/r_segs.o src/hu_lib.o src/lprintf.o src/p_plats.o src/r_sky.o src/d_deh.o src/hu_stuff.o src/m_argv.o src/p_pspr.o src/m_bbox.o src/p_saveg.o src/r_things.o src/d_items.o src/m_cheat.o src/p_setup.o src/s_sound.o src/d_main.o src/p_sight.o src/sounds.o src/m_menu.o src/p_spec.o src/info.o src/st_lib.o src/m_misc.o src/p_switch.o src/p_telept.o src/st_stuff.o src/m_random.o src/p_tick.o src/tables.o src/p_user.o src/p_ceilng.o src/v_video.o src/doomdef.o src/p_doors.o src/p_enemy.o src/r_bsp.o src/version.o src/doomstat.o src/p_floor.o src/r_data.o src/w_wad.o src/p_genlin.o src/dstrings.o src/p_inter.o src/wi_stuff.o src/r_draw.o src/f_finale.o src/p_lights.o src/z_bmalloc.o src/p_map.o src/r_main.o src/f_wipe.o src/z_zone.o src/p_maputl.o src/r_plane.o src/md5.o src/p_checksum.o src/r_patch.o src/r_fps.o src/r_filter.o src/d_client.o src/w_mmap.o src/SDL/libsdldoom.a      -lm -o boon.html --preload-file prboom.wad --preload-file doom.wad -s TOTAL_MEMORY=134217728 -O3 --pre-js pre.js --closure 1

