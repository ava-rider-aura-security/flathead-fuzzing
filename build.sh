#!/bin/bash

#Compiles and copies the binaries to bin/
OUT_FILE=bin/default make

#Dont check for leaks cos theres too much
OUT_FILE=bin/asan AFL_USE_ASAN=1 ASAN_OPTIONS=detect_leaks=0 make
#No msan cos theres a bug with this already
#OUT_FILE=bin/msan AFL_USE_MSAN=1 make
OUT_FILE=bin/cfisan AFL_USE_CFISAN=1 make
OUT_FILE=bin/ubsan AFL_USE_UBSAN=1 make
OUT_FILE=bin/laf AFL_LLVM_LAF_ALL=1 make
OUT_FILE=bin/cmplog AFL_LLVM_CMPLOG=1 make