#!/usr/bin/env sh

ifconfig | grep 'inet ' | grep -v '127.0.0.1' | awk '{print $2}' | head -1