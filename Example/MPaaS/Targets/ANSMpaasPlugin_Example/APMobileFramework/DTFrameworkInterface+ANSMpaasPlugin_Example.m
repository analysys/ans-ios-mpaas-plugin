//
//  DTFrameworkInterface+ANSMpaasPlugin_Example.m
//  ANSMpaasPlugin_Example
//
//  Created by xiaoxu on 2020/09/14. All rights reserved.
//

#import "DTFrameworkInterface+ANSMpaasPlugin_Example.h"
#import <NebulaPoseidon/NebulaPoseidon.h>
#import <NebulaSDK/NebulaSDK.h>
#import <NebulaBiz/H5WKWebView.h>
#import <AnalysysAgent/AnalysysAgent.h>
#import <ANSMpaasPlugin/AnalysysJsApi4EventList.h>
#import <ANSMpaasPlugin/AnalysysJsApi4Hybird.h>
#import <ANSMpaasPlugin/AnalysysJsApi4Property.h>
#import <ANSMpaasPlugin/AnalysysJsApi4Track.h>

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wobjc-protocol-method-implementation"

@implementation DTFrameworkInterface (ANSMpaasPlugin_Example)

- (BOOL)shouldLogReportActive
{
    return YES;
}

- (NSTimeInterval)logReportActiveMinInterval
{
    return 1800;
}

- (BOOL)shouldLogStartupConsumption
{
    return YES;
}

- (BOOL)shouldAutoactivateBandageKit
{
    return YES;
}

- (BOOL)shouldAutoactivateShareKit
{
    return YES;
}

- (DTNavigationBarBackTextStyle)navigationBarBackTextStyle
{
    return DTNavigationBarBackTextStyleAlipay;
}

- (void)application:(UIApplication *)application beforeDidFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // 初始化 rpc
    [MPRpcInterface initRpc];
    
    // 初始化容器
    //    [MPNebulaAdapterInterface initNebula];
    
    // 自定义jsapi路径和预置离线包信息
    NSString *presetApplistPath = [[NSBundle mainBundle] pathForResource:[NSString stringWithFormat:@"DemoCustomPresetApps.bundle/h5_json.json"] ofType:nil];
    NSString *appPackagePath = [[NSBundle mainBundle] pathForResource:[NSString stringWithFormat:@"DemoCustomPresetApps.bundle"] ofType:nil];
//    NSString *pluginsJsapisPath = [[NSBundle mainBundle] pathForResource:[NSString stringWithFormat:@"DemoCustomPlugins.bundle/Poseidon-UserDefine-Extra-Config.plist"] ofType:nil];
    
    NSBundle *bundle = [NSBundle bundleForClass:[AnalysysJsApi4EventList class]];
    NSString *pluginsJsapisPath = [bundle pathForResource:@"AnalysysWKWebPlugins.bundle/AnalysysWKWebConfig.plist" ofType:nil];
    
    [MPNebulaAdapterInterface initNebulaWithCustomPresetApplistPath:presetApplistPath customPresetAppPackagePath:appPackagePath customPluginsJsapisPath:pluginsJsapisPath];
}

- (void)application:(UIApplication *)application afterDidFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    [self _initAnalysysSDKWithOptions:launchOptions];
    
    #ifdef DEBUG
        NBLogConfigurationGet().enableConsoleLog = YES;
    #endif

    // 定制容器
    [MPNebulaAdapterInterface shareInstance].nebulaVeiwControllerClass = [H5WebViewController class]; //设置H5容器基类
    [MPNebulaAdapterInterface shareInstance].nebulaWebViewClass = [H5WKWebView class];
    [MPNebulaAdapterInterface shareInstance].nebulaUserAgent = @"mPaaS/Portal";//设置H5容器UserAgent
    [MPNebulaAdapterInterface shareInstance].nebulaUseWKArbitrary = YES; //开启 WKWebview
    [MPNebulaAdapterInterface shareInstance].nebulaCommonResourceAppList = @[@"77777777"];// 设置全局资源包
    [MPNebulaAdapterInterface shareInstance].nebulaNeedVerify = NO; // 关闭离线包验签，正式版本请开启验签
    
    // 更新离线包
    [[MPNebulaAdapterInterface shareInstance] requestAllNebulaApps:^(NSDictionary *data, NSError *error) {
        NSLog(@"[mpaas] nebula rpc data :%@", data);
    }];
}

- (void)_initAnalysysSDKWithOptions:(NSDictionary *)launchOptions {
    CFAbsoluteTime startTime = CFAbsoluteTimeGetCurrent();
    
    //  部分设置在SDK初始化前设置
    [AnalysysAgent setAutomaticCollection:YES];
    
    [AnalysysAgent setAutomaticHeatmap:YES];
  
    [AnalysysAgent setAutoTrackClick:YES];
    
    // 通用属性
    [AnalysysAgent registerSuperProperties:@{@"Sex": @"male", @"bobby": @[@"football",@"pingpang"]}];
    
    //  AnalysysAgent SDK配置信息
    AnalysysConfig.appKey = @"heatmaptest0916";
    AnalysysConfig.channel = @"App Store";
    AnalysysConfig.autoProfile = YES;
    AnalysysConfig.autoTrackCrash = NO;
    AnalysysConfig.autoInstallation = YES;
    AnalysysConfig.autoTrackDeviceId = YES;
    AnalysysConfig.encryptType = AnalysysEncryptAESCBC128;
    AnalysysConfig.allowTimeCheck = YES;
    AnalysysConfig.maxDiffTimeInterval = 5 * 60;
    
//    //  设置证书校验模式(仅https)，默认：ANSSSLPinningModeNone
//    ANSSecurityPolicy *securityPolicy = [ANSSecurityPolicy policyWithPinningMode:ANSSSLPinningModeCertificate];
//    //  是否支持非法的证书（如：自签名证书）， 默认：NO
//    securityPolicy.allowInvalidCertificates = NO;
//    //  是否验证证书域名是否匹配，默认：YES
//    securityPolicy.validatesDomainName = YES;
//    //  本地证书路径配置
//    //securityPolicy.pinnedCertificates = [ANSSecurityPolicy certificatesInBundle:[NSBundle mainBundle]];
//    //  配置证书策略
//    AnalysysConfig.securityPolicy = securityPolicy;

    // 使用配置信息初始化SDK
    [AnalysysAgent startWithConfig:AnalysysConfig];
    
    //    NSLog(@"distinctid:%@", [AnalysysAgent getDistinctId]);
    
#if DEBUG
    [AnalysysAgent setDebugMode:AnalysysDebugButTrack];
#else
    [AnalysysAgent setDebugMode:AnalysysDebugOff];
#endif
    
    [AnalysysAgent setUploadURL:@"http://192.168.220.105:8089"];
    
#if DEBUG
    [AnalysysAgent setVisitorDebugURL:@"ws://192.168.220.105:9091"];
#endif
    [AnalysysAgent setVisitorConfigURL:@"http://192.168.220.105:8089"];
    
    CFAbsoluteTime linkTime = (CFAbsoluteTimeGetCurrent() - startTime);
    NSLog(@"The code execution time %f ms", linkTime *1000.0);
}

@end

#pragma clang diagnostic pop

