# Change these
set :repo_url,                'git@github.com:devteamepic/monolith-app.git'
set :application,             'monolith-app'
set :user,                    'root'
set :puma_threads,            [4, 16]
set :puma_workers,            0

# Don't change these unless you know what you're doing
set :pty,                     false
set :use_sudo,                false
set :deploy_via,              :remote_cache
set :deploy_to,               "/home/#{fetch(:user)}/apps/#{fetch(:application)}"
set :puma_bind,               "unix://#{shared_path}/tmp/sockets/#{fetch(:application)}-puma.sock"
set :puma_state,              "#{shared_path}/tmp/pids/puma.state"
set :puma_pid,                "#{shared_path}/tmp/pids/puma.pid"
set :puma_access_log,         "#{release_path}/log/puma.error.log"
set :puma_error_log,          "#{release_path}/log/puma.access.log"
set :ssh_options,             { forward_agent: true, user: fetch(:user), keys: %w(~/.ssh/id_rsa.pub) }
set :puma_preload_app,        true
set :puma_worker_timeout,     nil
set :puma_init_active_record, true  # Change to false when not using ActiveRecord
set :bundle_binstubs,         nil
# set :bundle_path, "/usr/share/rvm/gems/ruby-2.5.1/bin/bundle"
# set :delayed_job_workers,     2
# set :delayed_job_pid_dir,     '/tmp'
# set :delayed_job_queue,       :default


## Defaults:
# set :scm,           :git
# set :branch,        :master
# set :format,        :pretty
# set :log_level,     :debug
# set :keep_releases, 5

## Linked Files & Directories (Default None):
set :linked_files, %w{config/master.key }
set :linked_dirs,  %w{log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system public/uploads}

namespace :puma do
  desc 'Create Directories for Puma Pids and Socket'
  task :make_dirs do
    on roles(:app) do
      execute "mkdir #{shared_path}/tmp/sockets -p"
      execute "mkdir #{shared_path}/tmp/pids -p"
    end
  end

  before :start, :make_dirs
end

namespace :deploy do

  desc "Make sure local git is in sync with remote."
  task :check_revision do
    on roles(:app) do
      unless `git rev-parse HEAD` == `git rev-parse origin/#{fetch(:branch)}`
        puts "WARNING: HEAD is not the same as origin/#{fetch(:branch)}"
        puts "Run `git push` to sync changes."
        exit
      end
    end
  end

  desc 'Initial Deploy'
  task :initial do
    on roles(:app) do
      before 'deploy:restart', 'puma:start'
      invoke 'deploy'
    end
  end

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      invoke 'puma:restart'
    end
  end

  # task :delayed_job_restart do
  #   invoke 'delayed_job:restart'
  # end

  before :starting,     :check_revision
  after  :finishing,    :compile_assets
  after  :finishing,    :cleanup
  after  :finishing,    :restart
  # Not used but can be reconfigured
  # after  :publishing,   :delayed_job_restart
end

after 'deploy:publishing', 'deploy:restart'
namespace :deploy do

end

task :submission_worker do
  on roles(:app) do
    execute "nohup rake bunny:worker > ./log/rake.log 2>&1 &"
  end
end

# after :deploy, :submission_worker

