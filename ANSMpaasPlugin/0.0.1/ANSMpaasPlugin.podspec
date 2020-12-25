#
# Be sure to run `pod lib lint ANSMpaasPlugin.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|

  s.name         = "ANSMpaasPlugin"
  s.version      = "0.0.1"
  s.summary      = "易观 iOS mPaaS 插件"
  s.homepage     = "https://github.com/analysys/ans-ios-mpaas-plugin"
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'analysys' => 'analysys@analysys.com.cn' }
  s.source           = { :git => 'https://github.com/analysys/ans-ios-mpaas-plugin.git', :tag => s.version.to_s }
  # s.social_media_url = 'https://twitter.com/<TWITTER_USERNAME>'

  s.ios.deployment_target = '9.0'

  s.source_files = 'ANSMpaasPlugin/Classes/**/*.{h,m}'
  
  s.resource = 'ANSMpaasPlugin/Assets/AnalysysWKWebPlugins.bundle'

  s.public_header_files = 'ANSMpaasPlugin/Classes/**/*.h'
  
  # s.frameworks = 'UIKit', 'MapKit'

  s.dependency 'NebulaSDK'
  s.dependency 'NebulaPoseidon'
  s.dependency 'AnalysysAgent'
  
end
