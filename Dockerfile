FROM aflplusplus/aflplusplus:stable as build

RUN apt update && apt install libreadline-dev -y

#Clones flathead
WORKDIR /fuzzing
RUN git clone https://github.com/ava-rider-aura-security/flathead-fuzzing
WORKDIR /fuzzing/flathead-fuzzing

RUN OUT_FILE=bin/default make
RUN OUT_FILE=bin/asan AFL_USE_ASAN=1 make
RUN OUT_FILE=bin/msan AFL_USE_MSAN=1 make
RUN OUT_FILE=bin/ubsan AFL_USE_UBSAN=1 make
RUN OUT_FILE=bin/laf AFL_LLVM_LAF_ALL=1 make
RUN OUT_FILE=bin/cmplog AFL_LLVM_CMPLOG=1 make