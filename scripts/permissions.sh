#!/bin/bash

for f in $(find ./ * | grep "prestashop/"); do  chmod 777 $f; done
