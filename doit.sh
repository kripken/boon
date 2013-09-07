### native
#./configure --disable-i386-asm --disable-gl --disable-cpu-opt
# make
# ./src/prboom -nofullscreen -nosound

### web
#~/Dev/emscripten/emconfigure ./configure --disable-i386-asm --disable-gl --disable-cpu-opt
make
mv src/prboom src/prboom.bc
~/Dev/emscripten/emcc src/prboom.bc -o boon.html --preload-file prboom.wad --preload-file doom.wad -s TOTAL_MEMORY=134217728 -O2 -g --pre-js pre.js

