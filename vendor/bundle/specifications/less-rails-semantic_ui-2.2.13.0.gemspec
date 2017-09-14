# -*- encoding: utf-8 -*-
# stub: less-rails-semantic_ui 2.2.13.0 ruby lib

Gem::Specification.new do |s|
  s.name = "less-rails-semantic_ui".freeze
  s.version = "2.2.13.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Maxim Dobryakov".freeze]
  s.date = "2017-08-11"
  s.description = "This is a gem for Rails with Semantic UI assets inside.".freeze
  s.email = ["maxim.dobryakov@gmail.com".freeze]
  s.homepage = "https://github.com/Semantic-Org/Semantic-UI-Rails-LESS".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.6.12".freeze
  s.summary = "Semantic UI assets for Rails".freeze

  s.installed_by_version = "2.6.12" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<less-rails>.freeze, ["< 2.8.0", ">= 2.6.0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.7"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<rack>.freeze, [">= 2.0.0"])
      s.add_development_dependency(%q<minispec>.freeze, ["~> 0.0.2"])
      s.add_development_dependency(%q<activesupport>.freeze, ["< 10.0", ">= 4.0"])
      s.add_development_dependency(%q<rails>.freeze, ["< 10.0", ">= 4.0"])
      s.add_development_dependency(%q<therubyracer>.freeze, ["~> 0.12.2"])
      s.add_development_dependency(%q<appraisal>.freeze, ["< 3.0", ">= 2.0"])
    else
      s.add_dependency(%q<less-rails>.freeze, ["< 2.8.0", ">= 2.6.0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<rack>.freeze, [">= 2.0.0"])
      s.add_dependency(%q<minispec>.freeze, ["~> 0.0.2"])
      s.add_dependency(%q<activesupport>.freeze, ["< 10.0", ">= 4.0"])
      s.add_dependency(%q<rails>.freeze, ["< 10.0", ">= 4.0"])
      s.add_dependency(%q<therubyracer>.freeze, ["~> 0.12.2"])
      s.add_dependency(%q<appraisal>.freeze, ["< 3.0", ">= 2.0"])
    end
  else
    s.add_dependency(%q<less-rails>.freeze, ["< 2.8.0", ">= 2.6.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<rack>.freeze, [">= 2.0.0"])
    s.add_dependency(%q<minispec>.freeze, ["~> 0.0.2"])
    s.add_dependency(%q<activesupport>.freeze, ["< 10.0", ">= 4.0"])
    s.add_dependency(%q<rails>.freeze, ["< 10.0", ">= 4.0"])
    s.add_dependency(%q<therubyracer>.freeze, ["~> 0.12.2"])
    s.add_dependency(%q<appraisal>.freeze, ["< 3.0", ">= 2.0"])
  end
end
