ARG DOCKER_REGISTRY

FROM $DOCKER_REGISTRY/node:22-alpine3.19 as appbuilder


#ENV NODE_ENV=production
WORKDIR /home/node/app
COPY app ./
# Inject the .npmrc file
ARG ARTIFACTORY_URL
ARG ARTIFACTORY_AUTH_TOKEN
ARG ARTIFACTORY_EMAIL
RUN echo -e "registry=${ARTIFACTORY_URL}\n\
${ARTIFACTORY_URL}:_authToken=${ARTIFACTORY_AUTH_TOKEN}\n\
${ARTIFACTORY_URL}:email=${ARTIFACTORY_EMAIL}\n\
always-auth=true" > /home/node/app/.npmrc

RUN sed -i '2,$s#^https:##g' /home/node/app/.npmrc
RUN cat /home/node/app/.npmrc

# For debugging
#RUN ls -la

RUN node --version
RUN npm --version

RUN npm install --verbose && npm run build


# For consitency we remove the .npmrc file even though it won't be copied to production image
RUN rm /home/node/app/.npmrc

FROM $DOCKER_REGISTRY/node:22-alpine3.19
WORKDIR /home/node/app
COPY --from=appbuilder /home/node/app .
# RUN ls -la
USER node
CMD ["npm", "run", "preview"]