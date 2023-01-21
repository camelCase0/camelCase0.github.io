#!/bin/bash

for file in */; do
    if [ -d "$f" ]; then
       $file = ${f%?}
       echo 'import $file^ from "./$file";' > ${file}/index.js
       echo ${file}/${file}.js
       touch ${file}/${file}.js
       touch ${file}/${file}.css
    fi
done
