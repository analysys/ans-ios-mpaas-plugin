#
# Be sure to run `pod lib lint ANSMpaasPlugin.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'ANSMpaasPlugin'
  s.version          = '0.0.1'
  s.summary          = 'A short description of ANSMpaasPlugin.'

# This description is used to generate tags and improve search results.
#   * Think: What does it do? Why did you write it? What is the focus?
#   * Try to keep it short, snappy and to the point.
#   * Write the description between the DESC delimiters below.
#   * Finally, don't worry about the indent, CocoaPods strips it!

  s.name         = "ans-ios-mpaas-plugin"
  s.version      = "0.0.1"
  s.summary      = "易观 iOS mPaaS 插件"
  s.homepage     = "https://github.com/analysys/ans-ios-mpaas-plugin"
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'analysys' => 'analysys@analysys.com.cn' }
  s.source           = { :git => 'https://github.com/analysys/ans-ios-mpaas-plugin.git', :tag => s.version.to_s }
  # s.social_media_url = 'https://twitter.com/<TWITTER_USERNAME>'

  s.ios.deployment_target = '9.0'

  s.source_files = 'ANSMpaasPlugin/Classes/**/*'
  
  s.resource = 'ANSMpaasPlugin/Assets/AnalysysWKWebPlugins.bundle'

  s.public_header_files = 'Pod/Classes/**/*.h'
  # s.frameworks = 'UIKit', 'MapKit'
  s.dependency 'NebulaPoseidon'
  s.dependency 'NebulaSDK'
  s.dependency 'AnalysysAgent'
  
end
