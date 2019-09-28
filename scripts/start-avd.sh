#!/usr/bin/env bash

source .env

${ANDROID_EMULATOR_PATH} -avd ${ANDROID_EMULATOR_DEVICE}
