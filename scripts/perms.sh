#!/bin/bash

for f in $(find ./ * | grep "prestashop/" | grep "/assets"); do  chmod 777 $f; done
for f in $(find ./ * | grep "backups/"); do chmod 777 $f; done
for f in $(find ./ * | grep "scripts/"); do chmod 777 $f; done
