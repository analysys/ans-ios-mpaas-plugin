//
//  AnalysysPlugin4WKWebView.m
//  MpassDemo
//
//  Created by 少冲 on 2020/9/10.
//  Copyright © 2020 Analysys. All rights reserved.
//

#import "AnalysysPlugin4WKWebView.h"
#import <AnalysysAgent/AnalysysAgent.h>

@implementation AnalysysPlugin4WKWebView

/// 监听的 H5 事件，事件列表请查看头文件 NBDefines.h
-(void)pluginDidLoad {
    self.scope = kPSDScope_Scene;
    
    //  1. 拦截H5页面请求事件  hybird事件交互
    [self.target addEventListener:kEvent_Navigation_Start withListener:self useCapture:NO];
    
    [super pluginDidLoad];
}

/// 处理监听的事件触发后的逻辑
/// @param event e
- (void)handleEvent:(PSDEvent *)event {
    [super handleEvent:event];
    
    PSDContentView *webview = event.context.currentViewController.psdContentView;
    
    if ([kEvent_Navigation_Start isEqualToString:event.eventType]) {
        //  1. 处理Hybird模式下事件交互
        PSDNavigationEvent *naviEvent = (PSDNavigationEvent *)event;
        if ([AnalysysAgent setHybridModel:webview request:naviEvent.request]) {
            [event preventDefault];
            return;
        }
    }
}

/// 与 H5 通信，可能需要注册 JSAPI
- (void)addJSApis {
    [super addJSApis];
    
}

@end
