### native
#./configure --disable-i386-asm --disable-gl --disable-cpu-opt
# make
# ./src/prboom -nofullscreen -nosound

### web
#EMCONFIGURE_JS=1 ~/Dev/emscripten/emconfigure ./configure --disable-i386-asm --disable-gl --disable-cpu-opt --without-net --with-sdl-prefix=/home/alon/Dev/emscripten/system
make -j 2
mv src/prboom src/prboom.bc
~/Dev/emscripten/emcc src/prboom.bc -o boon.html --preload-file prboom.wad --preload-file doom.wad -s TOTAL_MEMORY=134217728 -O3 --pre-js pre.js -s EMTERPRETIFY=1 -s EMTERPRETIFY_BLACKLIST='["_R_RenderPlayerView", "_R_RenderBSPNode", "_R_Subsector", "_R_AddLine", "_R_ClipWallSegment", "_R_PointToAngle", "_R_StoreWallRange", "_R_RenderSegLoop", "_R_CheckBBox", "_R_GetTextureColumn", "_R_ScaleFromGlobalAngle", "_R_DrawPlanes", "_R_DoDrawPlane", "_R_MakeSpans", "_R_MapPlane", "_R_DrawSpan", "_R_DrawSpan8_PointUV_PointZ", "_R_DrawColumn8_PointUV_PointZ", "_FixedMul81", "_FixedMul3699", "_FixedMul3226", "_R_FlushColumns", "_R_FlushQuad8", "_R_FlushHT8", "_R_ColourMap", "_R_DrawSprite", "_R_DrawVisSprite", "_R_DrawMasked", "_wipe_ScreenWipe", "_wipe_doMelt", "_wipe_initMelt", "___muldi3", "___muldsi3", "_between", "_FixedDiv82", "___divdi3", "___udivmoddi4", "_i64Subtract", "_llvm_ctlz_i32", "_R_PointToDist"]' -s EMTERPRETIFY_ASYNC=1 -profiling

