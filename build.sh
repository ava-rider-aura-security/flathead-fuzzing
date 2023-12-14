#Compiles and copies the binaries to bin/

docker build . -t fuzzing:latest
containerId=$(docker create fuzzing:latest)
docker cp "$containerId":/fuzzing/flathead-fuzzing/bin/. bin/
docker rm "$containerId"