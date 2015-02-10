### native
#./configure --disable-i386-asm --disable-gl --disable-cpu-opt
# make
# ./src/prboom -nofullscreen -nosound

### web
#EMCONFIGURE_JS=1 ~/Dev/emscripten/emconfigure ./configure --disable-i386-asm --disable-gl --disable-cpu-opt --without-net --with-sdl-prefix=/home/alon/Dev/emscripten/system
make -j 2
mv src/prboom src/prboom.bc
# blacklist all rendering methods (_R_*), and some others that show up in profiling
~/Dev/emscripten/emcc src/prboom.bc -o boon.html --preload-file prboom.wad --preload-file doom.wad -s TOTAL_MEMORY=134217728 -O3 --pre-js pre.js -s EMTERPRETIFY=1  -s EMTERPRETIFY_ASYNC=1 -s EMTERPRETIFY_WHITELIST='["_main", "_D_DoomLoop", "_D_DoomMain", "_D_DoomLoopIter", "_D_Display", "_D_Wipe", "_I_uSleep", "_TryRunTics", "_D_BuildNewTiccmds", "_I_StartTic", "_I_GetEvent", "_D_PostEvent", "_M_Responder", "_M_QuitResponse", "_I_uSleep"]'

