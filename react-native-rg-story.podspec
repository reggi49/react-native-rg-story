# react-native-rg-story.podspec

require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-rg-story"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-rg-story
                   DESC
  s.homepage     = "https://github.com/reggi49/react-native-rg-story"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "reggi49" => "reggi49@icloud.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/reggi49/react-native-rg-story.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,c,cc,cpp,m,mm,swift}"
  s.requires_arc = true

  s.dependency "React"
  # ...
  # s.dependency "..."
end

