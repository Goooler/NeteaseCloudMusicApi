FROM oven/bun:1-alpine

RUN apk add --no-cache tini

# NODE_ENV is still used by Express and other Node.js libraries
ENV NODE_ENV production
USER bun

WORKDIR /app

COPY --chown=bun:bun . ./

RUN bun install --frozen-lockfile

EXPOSE 3000

CMD [ "/sbin/tini", "--", "bun", "run", "start" ]
