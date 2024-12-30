FROM node:18.18.0
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /zebra-swiper-docs-docker
COPY .vitepress/  /zebra-swiper-docs-docker/
WORKDIR /zebra-swiper-docs-docker
EXPOSE 3002