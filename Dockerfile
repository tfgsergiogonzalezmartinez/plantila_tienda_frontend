
FROM node:20-alpine as angular
ARG IP_API
ARG API_HOST
ARG API_PORT
ARG PAGE_ICON
ARG PAGE_TITULO
ARG PAGE_BACKGROUND_COLOR
ARG PAGE_MONEDA

ENV ENV_IP_API=${IP_API}
ENV ENV_API_HOST=${API_HOST}
ENV ENV_API_PORT=${API_PORT}
ENV ENV_PAGE_ICON=${PAGE_ICON}
ENV ENV_PAGE_TITULO=${PAGE_TITULO}
ENV ENV_PAGE_BACKGROUND_COLOR=${PAGE_BACKGROUND_COLOR}
ENV ENV_PAGE_MONEDA=${PAGE_MONEDA}

WORKDIR /home/app
COPY package*.json .
RUN npm ci
COPY . .
RUN if [ -f Enviroment.ts ]; then rm Enviroment.ts; fi
RUN echo "Archivo Environment.ts eliminado (si existía)"

RUN touch ${API_HOST}.txt

RUN echo "export const Enviroment = { \
  BACKEND_URL : 'http://${ENV_IP_API}:${ENV_API_PORT}}/', \
  BACKEND_API_URL : 'http://${ENV_IP_API}:${ENV_API_PORT}/api/', \
  PAGE_ICON : '${ENV_PAGE_ICON}', \
  PAGE_TITULO : '${ENV_PAGE_TITULO}', \
  PAGE_BACKGROUND_COLOR : '${ENV_PAGE_BACKGROUND_COLOR}', \
  PAGE_MONEDA : '${ENV_PAGE_MONEDA}', \
};" > Enviroment.ts
RUN echo "Archivo environment.ts creado con variables de entorno"
RUN chmod 777 Enviroment.ts

RUN npm run build -- --configuration=production

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=angular /home/app/dist/plantilla_tienda_frontend/browser .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod -R +rx *
EXPOSE 80
