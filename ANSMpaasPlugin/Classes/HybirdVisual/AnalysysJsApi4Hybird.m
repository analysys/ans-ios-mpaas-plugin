//
//  AnalysysJsApi4Hybird.m
//  MpassDemo
//
//  Created by 少冲 on 2020/9/10.
//  Copyright © 2020 Analysys. All rights reserved.
//

// https://help.aliyun.com/document_detail/55577.html?spm=a2c4g.11186623.6.1302.1d69634d144Qi4

/**
 1. 创建 JSAPI 类
 2. 注册 JSAPI。在自定义的 Plist 文件中注册此 JSAPI
    2.1 配置 jsApi ：在 H5 页面中调用的 JSAPI 接口名。注意： 为防止自定义的 JSAPI 与容器内置 JSAPI 相互影响导致不可用，请给自定义 JSAPI 名加上前缀予以区分
    2.2 配置 name：创建的 JSAPI 的类名。
  3. 需在初始化容器配置时，指定自定义的 Plist 文件的路径
        3.1 - (void)application:(UIApplication *)application beforeDidFinishLaunchingWithOptions:(NSDictionary *)launchOptions
 */

#import "AnalysysJsApi4Hybird.h"

@implementation AnalysysJsApi4Hybird

/// 当在前端调用此 JSAPI 时，会转发到此方法
/// @param data H5 页面调用此 JSAPI 时传入的参数
/// @param context 当前 H5 页面的上下文，具体可参考 PSDContext.h
/// @param callback 调用此 JSAPI 完成后的回调方法，以字典方式传递调用结果到 H5 页面
-(void)handler:(NSDictionary *)data context:(PSDContext *)context callback:(PSDJsApiResponseCallbackBlock)callback {
    [super handler:data context:context callback:callback];
    
//    WKWebView *webView = (WKWebView *)context.currentViewControllerProxy.psdContentView;
    //  hybird模式
    callback(@YES);
}

@end
