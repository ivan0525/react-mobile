# 制定Node版本
FROM node:12.0.0

# 容器中应用程序的路径，将web目录作为工作目录
WORKDIR /web

# 将package.json复制到Docker环境
COPY ./package.json /web/package.json

# 安装依赖
RUN yarn

# 将代码复制到Docker容器的web目录
COPY . /web

# 暴露容器内部访问端口
EXPOSE 8000

CMD [ "yarn", "start" ]
