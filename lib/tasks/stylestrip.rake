namespace :stylestrip do

  begin
    require 'deadweight'
    # If DW not installed on Prod server, let's not blow up the rake tasks - -
  rescue LoadError
  end

  desc "Run Deadweight CSS check (requires script/server)"
  task :deadweight do

      dw = Deadweight.new
      dw.stylesheets = ["/assets/splash.css?", "/assets/application.css?"]
      dw.pages = ["/"]
      # Printing dw results
      puts dw.run
  end
end
