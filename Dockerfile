FROM ruby:2.5-alpine 

RUN apk add --no-cache build-base gcc bash cmake git

RUN gem install jekyll
RUN gem install bundler

EXPOSE 4000

WORKDIR /site

ENV JEKYLL_NEW false

COPY . .
RUN gem update --system
RUN bundle install

CMD [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "4000" ]