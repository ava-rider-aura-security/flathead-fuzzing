#!/bin/bash


# #1
# 1. Master
# 2. Input via [here](https://github.com/nautilus-fuzz/nautilus) with a modified grammer
# 3. Asan
# 4. Ubsan
# 5. Msan
# 6. LAF_AL 6 and 7 are [here](https://github.com/AFLplusplus/AFLplusplus/blob/stable/docs/fuzzing_in_depth.md#b-selecting-instrumentation-options) 
# 7. CMPLOG
# 8. MOpt mutator enabled: `-L 0`
# 9. -P exploit
# 10. -P explore
# 11. -a ascii
# 12. -a binary

# 1,8-12 use the default compile, 2-7 have their own

#Before stuff
sudo sh -c 'echo core > /proc/sys/kernel/core_pattern'

#1 Master
tmux new -d -s fuzzing 'afl-fuzz -i input -o output -x js.dict -M master  -- bin/default; zsh'
tmux rename-window -t fuzzing:1 'master'

#2 Nautilus (doesn't count as a core)
tmux new-window -n 'nautilus' 'cd ../nautilus-flathead/; cargo run --release ;zsh'

#3 Asan
tmux new-window -n 'asan' 'afl-fuzz -i input -o output -x js.dict -S asan -- bin/asan;zsh'

# Uses cfisan instead of msan
#4 Cfisan
tmux new-window -n 'cfisan' 'afl-fuzz -i input -o output -x js.dict -S cfisan -- bin/cfisan;zsh'

#5 Ubsan
tmux new-window -n 'ubsan' 'afl-fuzz -i input -o output -x js.dict -S ubsan -- bin/ubsan;zsh'

#6 LAF_AL
tmux new-window -n 'laf' 'afl-fuzz -i input -o output -x js.dict -S laf -- bin/laf;zsh'

#7 cmplog
tmux new-window -n 'cmplog1' 'afl-fuzz -i input -o output -c bin/cmplog -m none -x js.dict -S cmplog1 -- bin/default;zsh'

#8 cmplog2
tmux new-window -n 'cmplog2' 'afl-fuzz -i input -o output -c bin/cmplog -m none -x js.dict -S cmplog2 -- bin/default;zsh'

#9 mopt
tmux new-window -n 'mopt' 'afl-fuzz -i input -o output -L 0 -x js.dict -S mopt -- bin/default;zsh'

#10 exploit
tmux new-window -n 'exploit' 'afl-fuzz -i input -o output  -P exploit -x js.dict -S exploit -- bin/default;zsh'

#11 explore
tmux new-window -n 'explore' 'afl-fuzz -i input -o output -P explore -x js.dict -S explore -- bin/default;zsh'

#12 ascii
tmux new-window -n 'ascii' 'afl-fuzz -i input -o output -a ascii -x js.dict -S ascii -- bin/default;zsh'

tmux a