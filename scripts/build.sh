#!/usr/bin/env sh
set -ex

SCRIPTS_DIR=$(dirname $0)

docker build \
    --no-cache \
    --build-arg BUILDKIT_INLINE_CACHE=1 \
    --build-arg DOCKER_REGISTRY=$PELMOREX_DOCKER_REGISTRY \
    --build-arg ARTIFACTORY_EMAIL=$NPM_ARTIFACTORY_EMAIL \
    --build-arg ARTIFACTORY_URL=$NPM_ARTIFACTORY_URL \
    --build-arg ARTIFACTORY_AUTH_TOKEN=$NPM_ARTIFACTORY_AUTH_TOKEN \
    -t "${IMAGE_REPO}:${IMAGE_TAG}" -f ${SCRIPTS_DIR}/../docker/Dockerfile .

if [ "${PUSH_IMAGE:-true}" = "true" ]; then
  if [ "${ISLOCAL:-true}" = "true" ]; then
    docker push "${IMAGE_REPO}:${IMAGE_TAG}"
  else
    jfrog rt dp "${IMAGE_REPO}:${IMAGE_TAG}" naads-docker --build-name=${BUILD_NAME} --build-number=${BUILD_NUMBER}

    jfrog rt bp ${BUILD_NAME} ${BUILD_NUMBER}

    #jfrog rt bs ${BUILD_NAME} ${BUILD_NUMBER}
  fi
else
  echo "Pushing image is disabled"
fi