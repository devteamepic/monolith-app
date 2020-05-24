source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'rails', '~> 5.2.3'
gem 'pg'
gem 'puma', '~> 3.12'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'
gem 'react-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'devise'
gem 'doorkeeper'
gem 'carrierwave'
# gem 'mini_magick'
gem 'rmagick', '~> 2.15', '>= 2.15.4'
gem 'active_model_serializers', '~> 0.10.0'
gem 'bunny', '~> 2.4'
gem 'google-protobuf'
gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'capistrano',         require: false
  gem 'capistrano-rvm',     require: false
  gem 'capistrano-rails',   require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano3-puma',   require: false
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'activeadmin'
gem 'sassc', '~> 2.3.0'
gem 'sassc-rails', '~> 2.1.2'