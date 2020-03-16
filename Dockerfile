FROM ruby:2.5-alpine 

RUN apk add --no-cache build-base gcc bash cmake git

RUN gem install bundler
RUN gem update --system

WORKDIR /site

ENV JEKYLL_NEW false

COPY . .
RUN bundle install

CMD [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0" ]